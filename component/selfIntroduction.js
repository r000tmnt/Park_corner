const selfIntroduction = {
    props: ['lang'],
    template: `
    <section class="bg-white" style="position: relative; height: 33vh;" id="self">

        <div class="row row-mobile">
            <div class="col-md-5 demo bg-cover" style="background-image: url('images/vadim-sherbakov-Hi9GSwWkCJk-unsplash.jpg'); position: absolute; top:0; bottom:0;"></div>
        </div>

        <div class="container">
            <div class="row justify-content-end">
                <div class="col-md-7 py-3 text" id="aboutMe">
                    <h3 class="mt-3">關於我</h3>
                    <p>半路覺醒成為獸控的阿宅，以畫筆表達對作品的喜好。曾經瘋了五年的忍者龜，對風格的影響顯而易見。
                    </p>

                    <div class="row mt-3 text">
                        <div class="col-md-6" id="whoamI">
                            <h4>作品參考:</h4>
                            <p><a class="refer" href="https://www.pixiv.net/users/3093390">Pixiv</a></p>
                            <p><a class="refer" href="https://www.furaffinity.net/user/r000tmnt/">Fur Affinity</a></p>
                        </div>
                        <div class="col-md-6">
                            <h4>聯絡方式: </h4>
                            <p>Email: <a class="refer" href="mailTo:rick.t.ryahoocomtw653@gmail.com">rick.t.ryahoocomtw653@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
    `,
    created(){
        console.log(this.$props)
    }
}

export default selfIntroduction;