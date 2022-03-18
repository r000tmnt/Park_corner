$(document).ready(function(){
    var modal = document.querySelector(".submit_modal");
    var loading = document.querySelector(".loading");
    var zh = $("#zh");

    
    function validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate(){//驗證信箱地址是否正確
        const email = $("#email").val();
        let valid = document.getElementById("valid");

        if(email.length < 1){ //空白的情況
            valid.innerHTML = `${(zh.is(".active"))? '此為避填欄位' : 'This field is require.'}`
            valid.style['color'] = 'red';
        }else{
            if(validateEmail(email)){
                valid.innerHTML = `${email}${(zh.is(".active"))? '是有效的地址' : ' is an email.'}`;

                valid.style['color'] = 'green';
                
            }else{
                valid.innerHTML = `${email}${(zh.is(".active"))? '為無效的地址' : ' is not an email.'}`;

                valid.style['color'] = 'red';
            }            
        }
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
                    if(zh.is(".active")){
                        alert("抱歉" + sFileName + "不符合接受的檔案類型, 允許的檔案為: " + allow_ext.join(","));
                    }else{
                        alert("Sorry!" + sFileName + "the allowed file types are: " + allow_ext.join(","));
                    }
                }
            }
        }
    };

    $("#file").change(checkEXT);

    $("#theForm").submit(function(event){
        event.preventDefault();//防止頁面跳轉
 
        if($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#phone").val()) === ""){
            if(zh.is(".active")){
                alert('請確實填寫表單');//檢查必填欄位是否空格
            }else{
                alert('Please fill the require field.');
            }
            return false;
            
        }else{
            modal.classList.add("fadeIN");
            modal.style['display'] = 'block';
            document.body.style.overflowY = 'hidden' // modal開啟時固定畫面
            $.ajax({
                type: 'post',
                url: './php/process.php',
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data){
                    // console.log(data);
                    generateModalContent('success')
                },
                error: function(){
                    generateModalContent('failed')
                }
            });
        }

        $("#animation").on("click", "#close", function(){
            modal.style['display'] = 'none';
            document.body.style.overflowY = 'scroll'
            $("#animation").html( //關閉modal後回到初始的樣子
                `<div class="outterCircle"><div class="innerCircle"></div></div><h3 class="loading">${(zh.is(".active"))? '上傳中...' : 'Uploading...'}</h3>`
            ); 
        })

    });

    function generateModalContent(result){ //傳送成功或失敗時顯示的樣式
        $("#animation").html( 
            `<i class="fas ${(result == 'success')? 'fa-check' : 'fa-times'}" style="font-size: 3rem; color: ${(result == 'success')? 'green' : 'red'}; text-align: center"></i><h3 class="loading">
            ${(result == 'success')? (zh.is(".active"))? '上傳成功!' : 'Upload successful!' :
            (zh.is(".active"))? '上傳失敗!' : 'Upload failed!' }</h3>`
        );

        $("#animation").append( //用來關閉modal的按鈕
            `<button id="close" type="button">${(zh.is(".active"))? '確定' : 'Confirm'}</button>`
        );
        
        loading.classList.add("popUP");
        $("#theForm")[0].reset();        
    }
});