$(document).ready(function(){
    var modal = document.querySelector(".submit_modal");
    var circle = document.querySelector(".outterCircle");
    var loading = document.querySelector(".loading");
    var closeBtn = document.getElementById("close");

    function validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate(){
        const $valid = $(".valid");
        const email = $("#email").val();
        $valid.text("");

        if(validateEmail(email)){
            $valid.text(email + "是有效的地址");
            $valid.css("color", "green");
        }else{
            $valid.text(email + "為無效的地址");
            $valid.css("color", "red");
        }
        return false;
    }

    closeBtn.addEventListener("click", function(){
        modal.style['display'] = 'none';
    });

    // var form = document.getElementById("theForm");
    //     console.log(form);

    $("#theForm").submit(function(event){
        event.preventDefault();//防止頁面跳轉
        // var formData = {
        //     'name': $("#name").val(),
        //     'phone': $("#phone").val(),
        //     'email': $("#email").val(),
        //     'type': $('input[type=checkbox]').val(),
        //     'references': $("#file").val(),
        //     'detail': $("#detail").val()
        // };

        if($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#phone").val()) === ""){
            alert('請確實填寫表單')
            return false;
        }else{
            modal.classList.add("fadeIN");
            modal.style['display'] = 'block';

            $.ajax({
                type: 'post',
                url: './php/process.php',
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data){
                    console.log(data);
                    validate;
                    circle.classList.add("fadeOUT");
                    var success = '上傳成功!'
                    loading.innerHTML= success;
                    loading.classList.add("popUP");
                    $("#theForm")[0].reset();
                },
                error: function(){
                    var failed = '上傳失敗!'
                    loading.innerHTML= failed;
                    loading.classList.add("popUP");
                }
            });
        }

        

    });
});