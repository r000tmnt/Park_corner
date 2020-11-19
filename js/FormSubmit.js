$(document).ready(function(){
    var modal = document.querySelector(".submit_modal");
    var loading = document.querySelector(".loading");
    
    //用來關閉modal的按鈕
    var closeBtn = '<button id="close" type="button">確定</button>';
    //傳送成功時顯示的樣式
    var success = '<i class="fas fa-check" style="font-size: 3rem; color: green; margin-left: 30%"></i><h3 class="loading">上傳成功!</h3>';
    //傳送失敗時顯示的樣式
    var failed = '<i class="fas fa-times" style="font-size: 3rem; color: red; margin-left: 30%"></i><h3 class="loading">上傳失敗!</h3>';
    //關閉modal後回到初始的樣子
    var recover = '<div class="outterCircle"><div class="innerCircle"></div></div><h3 class="loading">上傳中...</h3>';

    
    function validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate(){//驗證信箱地址是否正確
        const email = $("#email").val();
        let valid = document.getElementById("valid");

        if(validateEmail(email)){
            valid.innerHTML = email + "是有效的地址";
            valid.style['color'] = 'green';
        }else{
            valid.innerHTML = email + "為無效的地址";
            valid.style['color'] = 'red';
        }
        return false;
    }

    $("#email").change(validate);

    var allow_ext = ["pdf", "doc", "docx", "jpg", "png", "jpeg", "gif"];
    function checkEXT(inputFiles){//檢查夾帶的檔案類型
        if(inputFiles.type == "file"){
            var sFileName = inputFiles.value;
            if(sFileName.length > 0){
                var blnValid = false;
                for(var i=0; i < allow_ext.length; i++){
                    var sCurExtendion = allow_ext[i];
                    if(sFileName.substr(sFileName.length - sCurExtendion.length, sCurExtendion.length).toLowerCase() == sCurExtendion.toLowerCase()){
                        blnValid = true;
                        break;
                    }
                }
                if(!blnValid){
                    alert("抱歉" + sFileName + "不符合接受的檔案類型, 允許的檔案為: " + allow_ext.join(","));
                }
            }
        }
    };

    $("#file").change(checkEXT);

    $("#theForm").submit(function(event){
        event.preventDefault();//防止頁面跳轉
 
        if($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#phone").val()) === ""){
            alert('請確實填寫表單');//檢查必填欄位是否空格
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