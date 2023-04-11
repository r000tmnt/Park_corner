const contactForm = {
    props: ['lang'],
    template: `
    <section id="contact" style="position: relative; margin-bottom: 3vh;">
        <div class="container">
            <div class="row">

                <div class="col-md-4">
                    <form id="theForm" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="">*姓名: </label>
                            <input type="text" id="name" name="name" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">電話: </label>
                            <input type="text" id="phone" name="phone" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">*Email: </label>
                            <input type="email" id="email" name="email" class="form-control">
                            <p id="valid"></p>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="OC" name="checkbox[]" class="form-check-input Checkbox" value="OC" checked>
                            <label>角色設計</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="personal" name="checkbox[]" class="form-check-input Checkbox" value="personal">
                            <label>個人委託</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="profile" name="checkbox[]" class="form-check-input Checkbox" value="profile">
                            <label>大頭貼</label>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" id="cover" name="checkbox[]" class="form-check-input Checkbox" value="cover">
                            <label>書籍封面</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="other" name="checkbox[]" class="form-check-input Checkbox" value="other">
                            <label>其他</label>
                        </div>

                        <div class="form-check">
                            <label>參考附件</label>
                            <label>*可多選</label>
                            <input type="file" name="files[]" id="file" multiple>
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="detail">*詳細說明：</label>
                            <textarea id="detail" name="detail"></textarea>
                        </div>

                        <div class="text-right">
                            <input type="button" class="btn btn-secondary" value="取消">
                            <input type="submit" class="btn btn-primary submitBtn" name="submit" value="確認">
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
                            <h3 class="loading">上傳中...</h3>
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>

        <div class="row form-decoration justify-content-end">
            <div id="Pic" class="col-md-7 bg-cover" style="background-image: url('images/makson-serpa-7KAInrNdG0U-unsplash.jpg'); top:0; bottom:0; position: absolute; height: 80vh"></div>
        </div>
    </section>
    `,
    created(){
        console.log(this.$props)
    }
}

export default contactForm;