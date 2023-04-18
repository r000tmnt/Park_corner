const { useI18n } = VueI18n

const carousel = {
    template: `
    <section class="Carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li
                v-for="i in carousel_images.length"
                :key="i" 
                data-target="#carouselExampleCaptions" 
                :data-slide-to="i-1" 
                :class="{ active: (i-1) === 0}"
                ></li>    
            </ol>
            <div class="carousel-inner">
                <div v-for="(img, index) in carousel_images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                    <div class="Previous_works bg-cover" :style="{'background-image': 'url('+ img +')'}"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ tm('types')[index] }}</h5>
                        <p>{{ tm('types_caption')[index] }}</p>
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
    setup() {
        const { tm } = useI18n()

        const carousel_images = [
            '../images/Garant_the_dragon_monk_character_sheet.jpg',
            '../images/Yourpage_banner.jpg',
            '../images/2020.jpg',
            '../images/Grant_blacki_deepred_dragon.jpg'
        ]

        return {
            carousel_images,
            tm
        }
    }
}

export default carousel;