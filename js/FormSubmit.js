$(document).ready(function(){
    var modal = document.querySelector(".submit_modal");
    var loading = document.querySelector(".loading");
    var closeBtn = '<button id="close" type="button">確定</button>';

    var success = '<i class="fas fa-check" style="font-size: 3rem; color: green; margin-left: 30%"></i><h3 class="loading">上傳成功!</h3>';

    var failed = '<i class="fas fa-times" style="font-size: 3rem; color: red; margin-left: 30%"></i><h3 class="loading">上傳失敗!</h3>';

    var recover = '<div class="outterCircle"><div class="innerCircle"></div></div><h3 class="loading">上傳中...</h3>';

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
                    $("#animation").html(success);
                    $("#animation").append(closeBtn);
                    loading.classList.add("popUP");
                    $("#theForm")[0].reset();
                },
                error: function(){
                    $("#animation").html(failed);
                    $("#animation").append(closeBtn);
                    loading.classList.add("popUP");
                    $("#theForm")[0].reset();
                }
            });
        }

        $("#animation").on("click", "#close", function(){
            modal.style['display'] = 'none';
            $("#animation").html(recover);
        })

    });
});