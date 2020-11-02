$(document).ready(function(){

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
                alert("表單送出成功，謝謝您的聯絡。")
                $("#theForm")[0].reset();
            },
            error: function(){
                alert("表單寄送失敗!")
            }
        });

    });
});