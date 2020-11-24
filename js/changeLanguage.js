window.onload = function(){

    //Get all the require element
    var lang = document.querySelector(".lang");
    var dataReload = document.querySelectorAll("a")
    var about = document.getElementById("about");
    var dropDown = document.getElementById("navbarDropdown");
    var dropDown_items = document.getElementsByClassName("dropdown-item");
    var captions = document.getElementsByClassName("carousel-caption");
    var explain = $(".explain");
    var text = document.getElementById("aboutMe");
    var who = document.getElementById("whoamI");
    var contact = document.getElementById("contact");
    console.log(who);

    // Language translations
    var languages = {
        zh: {
            about: "關於我",
            catagory: "委託類別",
            types: ["角色設計", "個人委託", "封面繪製", "合作出版"],
            shortCaption: ["幫助你完善自創的角色形象", "縮短您心中的想像與現實的距離", "一眼感受到畫面的敘事性", "集合眾人的力量"],
            service: ["互助合作", "時間掌控", "多樣變化"],
            serDiscr: ["縮短想像與現實的距離，尋求雙方滿意的成品。", "不開天窗是接案人的職責，定期與委託人確認進度。", "簡單留白，賽璐璐或是油彩厚塗? 風格是可以切換的。"],
            AboutMe: ["半路覺醒成為獸控的阿宅，以畫筆表達對作品的喜好。<br>曾經瘋了五年的忍者龜，對風格的影響顯而易見。", "作品參考:", "聯絡方式:"] 
        },
        eng: {
            about: "About me",
            catagory: "Catagories",
            types: ["Character design", "Personal commission", "Cover art", "Co-publishing"],
            shortCaption: ["Help you perfect the image of your own character", "Shorten the distance between imagination and reality", "The sence of narrative at a glance", "Togither, we can make things better"],
            service: ["Mutual interest", "Time management", "Variaty of style"],
            serDiscr: ["Seek the produt that will satisfy both side.", "Freelance is duty to not meet the deadline, contact regularly.", "Simplify, cel-shading or oil paint-ish? The style is your choice."],
            AboutMe: ["A nerd and a furry, often express the thoughts with brushes.<br>Used to be a fan of TMNT, the show has it's impact on my style.", "Works reference:", "Contact:"] 
        }
    }

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

            dropDown.innerHTML = languages[attr].catagory;

            for(let i=0; i <= explain.length; i++){
                explain.eq(i).html( serIcon[i]+'<h5>'+languages[attr].service[i]+'</h5><p>'+languages[attr].serDiscr[i]+'</p>');
            }
            
            for(let i=0; i <= dropDown_items.length; i++){
                dropDown_items[i].innerHTML = languages[attr].types[i];

                captions[i].innerHTML = '<h5>'+languages[attr].types[i]+'</h5><p>'+languages[attr].shortCaption[i]+'</p>'; 
            }

            
        });
    })
}