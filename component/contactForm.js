const { ref, reactive } = Vue
const { useI18n } = VueI18n
const { useVuelidate } = Vuelidate
const { required, email, maxLength, numeric } = VuelidateValidators

console.log(VuelidateValidators)
// console.log(required)
// console.log(email)

const contactForm = {
    template: `
    <section id="contact" class="mb-5" style="position: relative;">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <form id="theForm" enctype="multipart/form-data">
                        <h1 class="section_title mb-4">{{ t('contact') }}</h1>

                        <div class="form-group">
                            <label for=""><span class="text-danger">*</span>{{ t('form_field_name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" v-model="v$.name.$model">

                            <div class="text-danger" v-for="error of v$.name.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="">{{ t('form_field_tel') }}</label>
                            <input type="text" id="phone" name="phone" class="form-control" v-model="v$.tel.$model">

                            <div class="text-danger" v-for="error of v$.tel.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for=""><span class="text-danger">*</span>{{ t('form_field_email') }}</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="v$.email.$model">

                            <div class="text-danger" v-for="error of v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>

                        <label><span class="text-danger">*</span>類型</label>

                        <div class="form-check">
                            <input type="checkbox" id="OC" name="checkbox[]" class="form-check-input Checkbox" value="OC" v-model="v$.type.$model">
                            <label>{{ t('form_field_character_design') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="personal" name="checkbox[]" class="form-check-input Checkbox" value="personal" v-model="v$.type.$model">
                            <label>{{ t('form_field_personal_commission') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="profile" name="checkbox[]" class="form-check-input Checkbox" value="profile" v-model="v$.type.$model">
                            <label>{{ t('form_field_profile_avatar') }}</label>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" id="cover" name="checkbox[]" class="form-check-input Checkbox" value="cover" v-model="v$.type.$model">
                            <label>{{ t('form_field_cover_art') }}</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="other" name="checkbox[]" class="form-check-input Checkbox" value="other" v-model="v$.type.$model">
                            <label>{{ t('form_field_other') }}</label>
                        </div>

                        <div class="text-danger" v-for="error of v$.type.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>

                        <div class="form-group">
                            <label>{{ t('form_field_reference') }}</label>
                            <input type="file" name="files[]" id="file" @change="getFile" multiple>

                            <div class="text-danger" v-if="fileErrorMessage.length">
                                {{ fileErrorMessage }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="detail"><span class="text-danger">*</span>{{ t('form_field_desc') }}</label>
                            <textarea id="detail" name="detail" v-model="v$.desc.$model"></textarea>

                            <div class="error text-danger" v-for="error of v$.desc.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" class="btn btn-primary submitBtn">{{ t('form_submit') }}</button>
                        </div>
                    </form> 
                </div>

                <!--loading animation-->
                <div class="row">
                    <div class="submit_modal" style="display: none;">
                        <div id="animation">
                            <div class="outterCircle">
                                <div class="innerCircle"></div>
                            </div>
                            <h3 class="loading">{{ t('upload') }}</h3>
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>

        <div class="row form-decoration justify-content-end">
            <div id="Pic" class="col-md-7 bg-cover" style="background-image: url('images/makson-serpa-7KAInrNdG0U-unsplash.jpg'); top: 0; bottom:0; position: absolute; height: 91vh"></div>
        </div>
    </section>
    `,    
    setup() {
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

        // 表單驗證規則
        const rules = {
            name: { required },
            tel: { numeric, maxLength: maxLength(12) },
            email: { required, email },
            type: { required },
            files: { maxLength: maxLength(5) },
            desc: { required }
        }

        // vuelidate 驗證設定
        const v$ = useVuelidate(rules, form_fields)

        console.log(v$)

        // i18n 翻譯功能
        const { t } = useI18n()

        /**
         * 提交表單
         */
        const formSubmit = () => {
            // call axios
            console.log('hello')
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
            v$,
            formSubmit,
            getFile
        }
    }
}

export default contactForm;