const carousel = {
    template: `
    <section class="Carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="Previous_works bg-cover" style="background-image: url('../images/Garant_the_dragon_monk_character_sheet.jpg');"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>角色設計</h5>
                        <p>幫助你完善自創的角色形象</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="Previous_works bg-cover" style="background-image: url('../images/Yourpage_banner.jpg');"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>個人委託</h5>
                        <p>縮短您心中的想像與現實的距離</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="Previous_works bg-cover" style="background-image: url('../images/2020.jpg');"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>封面設計</h5>
                        <p>一眼感受到畫面的敘事性</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="Previous_works bg-cover" style="background-image: url('../images/Grant_blacki_deepred_dragon.jpg');"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>合作出版</h5>
                        <p>集合眾人的力量</p>
                    </div>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    `,    
    props: ['lang'],
    setup(props) {
        console.log(props)
    }
}

export default carousel;