$(document).ready(function(){
    $("#theForm").submit(function(event){
        event.preventDefault();//防止頁面跳轉

        //取表單各欄位的值(測試中)
        var username = document.getElementById("username").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;

        var checkBoxes = $(".Checkbox:checked").map(function(){//取有選取的checkbox
            return this.value;
        }).get().join(",");

        var text = $("#detail").val();

        $.post("php/process.php", {username: username, phone: phone, email: email, checkBoxes: checkBoxes, detail: text}, function(data){
            console.log(data);
        })
    });
});