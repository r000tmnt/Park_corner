const { ref, reactive, computed } = Vue
const { useI18n } = VueI18n
const { useVuelidate } = Vuelidate
const { required, email, maxLength, numeric } = VuelidateValidators

const contactForm = {
    template: `
    <section id="contact" class="mb-5" style="position: relative;">
        <div class="container">

            <div class="text-danger">
                {{ formErrorExistMessage }}
            </div>

            <div class="row">
                <div class="col-md-4">

                    <form id="theForm" enctype="multipart/form-data">
                        <h1 class="section_title mb-4">{{ t('contact') }}</h1>

                        <div class="mb-3">
                            <label for="name" class="form-label"><span class="text-danger">*</span>{{ t('form_field_name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" v-model="v$.name.$model">

                            <div class="text-danger" v-for="error of v$.name.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>                        
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label">{{ t('form_field_tel') }}</label>
                            <input type="text" id="phone" name="phone" class="form-control" v-model="v$.tel.$model">

                            <div class="text-danger" v-for="error of v$.tel.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>                        
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label"><span class="text-danger">*</span>{{ t('form_field_email') }}</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="v$.email.$model">

                            <div class="text-danger" v-for="error of v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>                        
                        </div>


                        <label><span class="text-danger">*</span>類型</label>

                        <div class="text-danger" v-for="error of v$.type.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="OC" name="type[]" class="form-check-input Checkbox" value="OC" v-model="v$.type.$model">
                            <label>{{ t('form_field_character_design') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="personal" name="type[]" class="form-check-input Checkbox" value="personal" v-model="v$.type.$model">
                            <label>{{ t('form_field_personal_commission') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="profile" name="type[]" class="form-check-input Checkbox" value="profile" v-model="v$.type.$model">
                            <label>{{ t('form_field_profile_avatar') }}</label>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" id="cover" name="type[]" class="form-check-input Checkbox" value="cover" v-model="v$.type.$model">
                            <label>{{ t('form_field_cover_art') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="other" name="type[]" class="form-check-input Checkbox" value="other" v-model="v$.type.$model">
                            <label>{{ t('form_field_other') }}</label>
                        </div>

                        <label for="files" class="form-label mt-3">{{ t('form_field_reference') }}</label>
                        <input type="file" name="files[]" id="file" @change="getFile" multiple>

                        <div class="text-danger" v-if="fileErrorMessage.length">
                            {{ fileErrorMessage }}
                        </div>

                        <br/>

                        <label for="detail" class="form-label mt-3"><span class="text-danger">*</span>{{ t('form_field_desc') }}</label>
                        <textarea id="detail" name="detail" v-model="v$.desc.$model"></textarea>

                        <div class="error text-danger" v-for="error of v$.desc.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>

                        <button type="button" 
                        data-bs-toggle="modal" 
                        data-bs-target="#postStatModal" 
                        class="btn btn-primary submitBtn float-end mt-2" 
                        @click="formSubmit"
                        :disabled="checkFormFields">
                            {{ t('form_submit') }}
                        </button>
                    </form> 
                </div>


                <!-- Modal -->
                <div class="modal fade" id="postStatModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-body">
                        <!--loading animation-->
                        <div class="submit_modal">
                            <div id="animation">

                                <div v-if="!formPostStat && formPostStatMessage.length" class="flex_center mb-4">
                                    <i class="fas fa-6x fa-times" style="color: red;"></i>                                
                                </div>

                                <div v-else-if="formPostStat && formPostStatMessage.length" class="flex_center mb-4">
                                    <i class="fas fa-6x fa-check" style="color: green;"></i>                                
                                </div>

                                <div v-else class="outterCircle mb-4">
                                    <div class="innerCircle"></div>
                                </div>
                                <h3 class="loading">{{ !formPostStatMessage.length? t('upload') : formPostStatMessage }}</h3>
                            </div>
                        </div>
                        <div class="flex_center">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>

        <div class="row form-decoration justify-content-end">
            <div id="Pic" class="col-md-7 bg-cover h-100" style="background-image: url('images/makson-serpa-7KAInrNdG0U-unsplash.jpg'); top: 0; bottom:0; position: absolute;"></div>
        </div>
    </section>
    `,
  
    setup() {
        // i18n 翻譯功能
        const { t } = useI18n()

        // 表單欄位
        const form_fields = reactive({
            name: '',
            tel: '',
            email: '',
            type: [],
            files: [],
            desc: ''
        })

        // 檔案欄位錯誤訊息
        const fileErrorMessage = ref('')
        // 表單發送成功與否狀態
        const formPostStat = ref(false)
        // 表單發送成功與否狀態訊息
        const formPostStatMessage = ref('')
        // 有表單錯誤時按到送出會顯示的訊息
        const formErrorExistMessage = ref('')

        const checkFormFields = computed(() => {
            return !form_fields.name.length || !form_fields.email.length || !form_fields.type.length || !form_fields.desc.length
        })

              // 表單驗證規則加上客製化的驗證訊息
      const rules = {
            name: { 
                required: withI18nMessage(required) 
            },
            tel: { 
                numeric: withI18nMessage(numeric), 
                maxLength: withI18nMessage(maxLength(12))
            },
            email: { 
                required: withI18nMessage(required),
                email: withI18nMessage(email) 
            },
            type: { 
                required: withI18nMessage(required)  
            },
            desc: { 
                required: withI18nMessage(required) 
            }
        }  

        // vuelidate 驗證設定
        const v$ = useVuelidate(rules, form_fields)

        console.log(v$)

        /**
         * 提交表單
         */
        const formSubmit = () => {
            // assign form data
            const contactForm = new FormData()
            
            contactForm.append('name', form_fields.name)
            contactForm.append('phone', form_fields.tel)
            contactForm.append('email', form_fields.email)
            contactForm.append('types', form_fields.type)
            contactForm.append('files', form_fields.files)
            contactForm.append('desc', form_fields.desc)

            for (const pair of contactForm.entries()) {
                console.log(`${pair[0]}, ${pair[1]}`);
            }

            // call axios
            axios.post('../php/process.php', contactForm).then((res) => {
                console.log('res :>>>', res)
                formPostStat.value = true
                formPostStatMessage.value = t('upload_success')

                // clear form fields
                form_fields.name = ''
                form_fields.tel = ''
                form_fields.email = ''
                form_fields.type.splice(0)
                form_fields.files.splice(0)
                form_fields.desc = ''
            }).catch((error) => {
                console.log('error :>>>', error)
                formPostStat.value = false
                formPostStatMessage.value = t('upload_failed')
            }) 
        }

        /**
         * 取得要上傳的檔案
         * @param {Object} event - 事件物件 
         */
        const getFile = (event) => {
            console.log(event)
            if(event.target.files.length > 5){
                fileErrorMessage.value = 'Too many files'
            }else{
                const files = event.target.files
                
                for(let i=0; i < files.length; i++){
                    const fileSize = ((files[i].size / 1024) / 1024).toFixed(4) //MB

                    if(fileSize > 1){
                        fileErrorMessage.value = 'File size too large'
                        break
                    }
                }

                if(!fileErrorMessage.length){
                   form_fields.files = event.target.files 
                }
            }
        }

        return {
            t,
            form_fields,
            fileErrorMessage,
            formPostStat,
            formPostStatMessage,
            formErrorExistMessage,
            checkFormFields,
            v$,
            formSubmit,
            getFile
        }
    }
}

export default contactForm;