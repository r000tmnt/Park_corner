window.onload = function(){

    //Get all the require element
    var lang = document.querySelector(".lang");
    var dataReload = document.querySelectorAll(".changeLan")
    var about = document.getElementById("about");
    var dropDown = document.getElementById("navbarDropdown");
    var dropDown_items = document.getElementsByClassName("dropdown-item");
    var captions = document.getElementsByClassName("carousel-caption");
    var explain = $(".explain");
    var text = document.getElementById("aboutMe");
    var who = document.getElementById("whoamI");
    var contact = document.getElementById("contact");

    //Commission workflow
    var statePurpose = document.getElementById("statePurpose");
    var flow = statePurpose.querySelectorAll("li");
    var payment = document.getElementById("payment");
    var pay = payment.querySelectorAll("li");

    //Table
    var tableDesktop = document.getElementById("desktop");
    var thD = tableDesktop.querySelectorAll("th");
    var trD = tableDesktop.querySelectorAll("tr");
    var price = trD[2].querySelectorAll("td");
    var note = trD[3].querySelector("td").querySelectorAll("p");
    var tableMobile = document.getElementById("mobile");
    var thM =  tableMobile.querySelectorAll("th");
    var trM = tableMobile.querySelectorAll("tr");
    var refer = document.getElementById("reference");

    //Form
    var form = document.getElementById("theForm");
    var Flabel = form.querySelectorAll("label")
    var Fcheck = form.querySelectorAll(".form-check");
    console.log(Flabel);
    console.log(Fcheck);


    // Language translations
    var languages = {
        zh: {
            about: "關於我",
            catagory: "委託類別",
            types: ["角色設計", "個人委託", "封面繪製", "合作出版"],
            shortCaption: ["幫助你完善自創的角色形象", "縮短您心中的想像與現實的距離", "一眼感受到畫面的敘事性", "集合眾人的力量"],
            service: ["互助合作", "時間掌控", "多樣變化"],
            serDiscr: ["縮短想像與現實的距離，尋求雙方滿意的成品。", "不開天窗是接案人的職責，定期與委託人確認進度。", "簡單留白，賽璐璐或是油彩厚塗? 風格是可以切換的。"],
            AboutMe: ["半路覺醒成為獸控的阿宅，以畫筆表達對作品的喜好。<br>曾經瘋了五年的忍者龜，對風格的影響顯而易見。", "作品參考:", "聯絡方式:"],
            WorkFlows:["委託流程", "1.請聲明委託用途", "請以私訊或電子信件聯絡。 基本可用於個人收藏。", "上傳插畫至個人部落格(FB、Twiiter)請標註繪師名稱。", "尺寸預設為A4，300dpi。 若有其他尺寸需求請事先告知。", "繪師接受原創、二創和獸人或NSFW...等題材，但不接受血腥、過激的元素。 請提供參考圖或是內容描述(越詳盡越好)。", "2.付款相關", "作品最多可提出3次修改，超過視情況加收費用。", "委託金可以分兩次或一次付清。兩次分為草稿確認與完稿確認。 台灣國內請匯至指定銀行帳戶，海外委託請用Paypal付款。", "繪師有權將委託視為自己的作品之一，並發布於社群網站(如Pixix、Twitter)。 若不願公開請事先告知。", "一般公司商業委託，請另外來信詢價。"],
            table:["參考", "未列出格式不代表無法接受，可與繪師討論", "線搞", "賽璐璐", "油彩厚塗", "NT 300", "NT 1000", "NT 1700", "追加人物 NT 500(一個角色)", "加背景 NT 500~900(依複雜程度而定)", "委託約於一周內完成，繪師會與你保持聯絡追蹤進度"],
            Form:["*姓名: ", "電話: ", "*Email: ", "角色設計", "個人委託", "大頭貼", "書籍封面", "其他", "參考附件", "*可多選", "*詳細說明："]
        },
        eng: {
            about: "About me",
            catagory: "Catagories",
            types: ["Character design", "Personal commission", "Cover art", "Co-publishing"],
            shortCaption: ["Help you perfect the image of your own character", "Shorten the distance between imagination and reality", "The sence of narrative at a glance", "Togither, we can make things better"],
            service: ["Mutual interest", "Time management", "Variaty of style"],
            serDiscr: ["Seek the produt that will satisfy both side.", "Freelance is duty to not meet the deadline, contact regularly.", "Simplify, cel-shading or oil paint-ish? The style is your choice."],
            AboutMe: ["A nerd and a furry, often express his thoughts with brushes.<br>Used to be a fan of TMNT, the show has it's impact on the style.", "Works reference:", "Contact:"],
            WorkFlows:["Commission workflow", "1.State the purpose of the commission", "Please send the request by direct message or email. Basically, the commission work can be use for personal collection.", "Please tag the artist when you post the illustration on social media(FB, TWITTER...etc).", "The default size is A4 with 300dpi. Please state the number in cm or pixel if it is not A4.", "The artist accepts original ideas, deriviative work and furry. Themes with NSFW can be discuss, but not include gore.", "2.Payment", "The commission can be altered up to 3 times(Position, pose...etc). Extra fee will be charged if you wish to do more changes, the price depends on the complexity.", "The commission can be paid in full or split in two. Two means when the rough is confirm and when the work is complete.", "The artist will post the work on the social media. Please notify the artist if you don't want it open to public.", "For comerial cases, please make inquires with e-mail."],
            table:["References", "Formats not listed here can be discuss", "Line art", "Cel-shading", "Full-shading", "10 USD", "35 USD", "60 USD", "17 USD for additional character (per character)", "17 ~ 31 USD for additional background (depends on complexity)", "The commission is set to be finished in one week, the artist will contact the client ro check on the porgress"],
            Form:["*Name: ", "TEL: ", "*Email: ", "Character design", "Personal commission", "Profile pic", "Cover art", "Others", "Attachment", "*Multi-select", "*Description："]
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

            $("#workFlow").html(languages[attr].WorkFlows[0]);
            statePurpose.querySelector("h4").innerHTML = languages[attr].WorkFlows[1];
            payment.querySelector("h4").innerHTML = languages[attr].WorkFlows[6];

            refer.querySelector("h1").innerHTML = languages[attr].table[0];
            refer.querySelector("p").innerHTML = languages[attr].table[1];
            
            dropDown.innerHTML = languages[attr].catagory;      

            for(let i=0; i< flow.length; i++){
               flow[i].innerHTML = languages[attr].WorkFlows[i+2];

               pay[i].innerHTML = languages[attr].WorkFlows[i+7]
            }

            for(let i=0; i <= explain.length; i++){
                explain.eq(i).html( serIcon[i]+'<h5>'+languages[attr].service[i]+'</h5><p>'+languages[attr].serDiscr[i]+'</p>');
            }
            
            for(let i=0; i < dropDown_items.length; i++){
                dropDown_items[i].innerHTML = languages[attr].types[i];

                captions[i].innerHTML = '<h5>'+languages[attr].types[i]+'</h5><p>'+languages[attr].shortCaption[i]+'</p>'; 
            }

            for(let i=0; i < thD.length; i++){
                thD[i].innerHTML ='<h4>'+ languages[attr].table[i+2] + '</h4>';

                price[i].innerHTML = languages[attr].table[i+5];
                note[i].innerHTML = languages[attr].table[i+8];

                Flabel[i].innerHTML = languages[attr].Form[i];
            }

            for(let i=0; i < Flabel.length; i++){
                Flabel[i].innerHTML = languages[attr].Form[i];
            }
            
            form.querySelector(".text-right").innerHTML = ' <input type="button" class="btn btn-secondary" value="Cancel"><input type="submit" class="btn btn-primary submitBtn" name="submit" value="Submit" style="margin-left: 2%;">'
        });
    })
}