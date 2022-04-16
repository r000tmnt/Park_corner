import languages from './language.js'

//Get all the require element
var lang = document.querySelector(".lang");
var dataReload = document.querySelectorAll(".changeLan")
var about = document.getElementById("about");
// var dropDown = document.getElementById("navbarDropdown");
var dropDown_items = document.getElementsByClassName("dropdown-item");
var captions = document.getElementsByClassName("carousel-caption");
var explain = $(".explain");
var text = document.getElementById("aboutMe");
var who = document.getElementById("whoamI");
var contact = document.getElementById("contact");
var loading = document.querySelector(".loading");

//Commission workflow
var statePurpose = document.getElementById("statePurpose");
var flow = statePurpose.querySelectorAll("li");
var payment = document.getElementById("payment");
var pay = payment.querySelectorAll("li");

//Table
// var tableDesktop = document.getElementById("desktop");
// var thD = tableDesktop.querySelectorAll("th");
// var trD = tableDesktop.querySelectorAll("tr");
// var price = trD[2].querySelectorAll("td");
// var note = trD[3].querySelector("td").querySelectorAll("p");
// var tableMobile = document.getElementById("mobile");
// var trM = tableMobile.querySelectorAll("tr");
// var refer = document.getElementById("reference");

//Form
var form = document.getElementById("theForm");
var Flabel = form.querySelectorAll("label")

// icons from fontAwesome
var serIcon = [' <i class="fas fa-handshake fa-6x text-white py-2"></i>', '<i class="fas fa-user-clock fa-6x text-white py-2"></i>', '<i class="fas fa-palette fa-6x text-white py-2"></i>']

//define language reload onclick function
dataReload.forEach(el => {
    el.addEventListener('click', () => {
        lang.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        const attr = el.getAttribute("language");
        about.innerHTML = languages[attr].about;
        
        text.querySelector("h3").innerHTML = languages[attr].about;
        text.querySelector("p").innerHTML = languages[attr].AboutMe[0];
        who.querySelector("h4").innerHTML = languages[attr].AboutMe[1];
        contact.querySelector("h4").innerHTML = languages[attr].AboutMe[2];

        $("#workFlow").html(languages[attr].WorkFlows[0]);
        statePurpose.querySelector("h4").innerHTML = languages[attr].WorkFlows[1];
        payment.querySelector("h4").innerHTML = languages[attr].WorkFlows[6];

        // refer.querySelector("h1").innerHTML = languages[attr].table[0];
        // refer.querySelector("p").innerHTML = languages[attr].table[1];
        
        // dropDown.innerHTML = languages[attr].catagory; 

        for(let i=0; i< flow.length; i++){
            flow[i].innerHTML = languages[attr].WorkFlows[i+2];

            pay[i].innerHTML = languages[attr].WorkFlows[i+7]
        }

        for(let i=0; i <= explain.length; i++){
            explain.eq(i).html( serIcon[i]+'<h5>'+languages[attr].service[i]+'</h5><p>'+languages[attr].serDiscr[i]+'</p>');
        }
        
        for(let i=0; i < captions.length; i++){
            // dropDown_items[i].innerHTML = languages[attr].types[i];

            captions[i].innerHTML = '<h5>'+languages[attr].types[i]+'</h5><p>'+languages[attr].shortCaption[i]+'</p>'; 
        }

        // for(let i=0; i < thD.length; i++){
        //     thD[i].innerHTML ='<h4>'+ languages[attr].table[i+2] + '</h4>';

        //     price[i].innerHTML = languages[attr].table[i+5];
        //     note[i].innerHTML = languages[attr].table[i+8];
        // }

        for(let i=0; i < Flabel.length; i++){
            Flabel[i].innerHTML = languages[attr].Form[i];
        }
        
        form.querySelector(".text-right").innerHTML = `<input type="button" class="btn btn-secondary" value="${(attr == 'zh')? '取消' : 'Cancel'}"><input type="submit" class="btn btn-primary submitBtn" name="submit" value="${(attr == 'eng')? 'Submit' : '送出'}" style="margin-left: 2%;">`;

        //Table_mobile
        // trM[0].innerHTML = '<td>'+ languages[attr].table[2] +'</td><td data-th="Monochrome"><img class="demo" src="images/Ride_on_the_top.jpg" alt="參考圖"></td><td>'+ languages[attr].table[5] +'</td>';

        // trM[1].innerHTML = '<td>'+ languages[attr].table[3] +'</td><td data-th="Full color"><img class="demo" src="images/Ride_on_the_top.jpg" alt="參考圖"></td><td>'+ languages[attr].table[6] +'</td>';

        // trM[2].innerHTML = '<td>'+ languages[attr].table[4] +'</td><td data-th="Full-Shading"><img class="demo" src="images/Fundoshi_no_hi_2021.jpg" alt="參考圖"></td><td>'+ languages[attr].table[7] +'</td>'

        // trM[3].innerHTML = ' <td>Notes</td><td><p>'+ languages[attr].table[8] +'</p><p>'+ languages[attr].table[9] +'</p><p>'+ languages[attr].table[10] +'</p></td>';

        if(attr == 'eng'){
            loading.innerHTML = "Uploading...";
        }else{
            loading.innerHTML = "上傳中...";
        }
    });
})

// window.onload = function(){

// }