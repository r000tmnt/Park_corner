import languages from './language.js'

window.onload = function(){
    var currentType = 'monochrome' //當前顯示的風格類型
    var artNav = document.querySelectorAll('.artStyle') //風格切換的按鈕
    var imgHolder = document.getElementById('currentImage') //當前顯示的圖片
    var thumbnails = document.getElementById('thumbnails') //縮圖的容器
    var desc = document.getElementById('desc') // 說明文字的容器

    var artStyle = { //可切換檢視的類型
        'monochrome': {images: ['images/Ride_on_the_top.jpg'], desc: ['頭像: NT 300', '半身: NT 450', '全身: NT 800']},
        'fullColor': {images: ['images/Cook_too_much.jpg'], desc: ['頭像: NT 500', '半身: NT 750', '全身: NT 1200']},
        'fullShading': {images: ['images/Fundoshi_no_hi_2021.jpg'], desc: ['頭像: NT 800', '半身: NT 1200', '全身: NT 1800']}
    }

    for(let i=0; i < artNav.length; i++){ //給按鈕綁上點擊事件
        artNav[i].addEventListener('click', function(){
            switchType(artNav[i].getAttribute('data-style'))
        })
    }    

    applyImages()
    applyText()
    
    function applyImages(){ //改變參考圖
        console.log(currentType)
        imgHolder.src = artStyle[currentType].images[0]

        for(let i=0; i < artStyle[currentType].images.length; i++){
            let thumbnail = document.createElement('img')
            thumbnail.setAttribute('data', i)
            thumbnail.classList.add('clickable')
            thumbnail.src = artStyle[currentType].images[i]
            thumbnails.appendChild(thumbnail)
        }   
    }

    function applyText(){ //改變文字內容
        for(let i=0; i < artStyle[currentType].desc.length; i++){
            let price = document.createElement('li')
            price.innerText = artStyle[currentType].desc[i]
            desc.appendChild(price)
        }
    }

    function switchType(type){ //切換檢視的類型
        currentType = type
        clearContent()

        for(let i=0; i < artNav.length; i++){
            if(artNav[i].getAttribute('data-style') == type){
                artNav[i].classList.add('active')
            }else{
                artNav[i].classList.remove('active')
            }
        }
        applyImages()
        applyText()        
    }

    function clearContent(){ //清空縮圖和文字內容
        $('#thumbnails').empty()
        $('#desc').empty()
    }
}