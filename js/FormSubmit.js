$(document).ready(function(){

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
            }
        });

    });
});