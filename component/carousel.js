const { useI18n } = VueI18n

const carousel = {
    template: `
    <section class="Carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button 
                type="button" 
                v-for="i in carousel_images.length"
                :key="i" 
                :data-bs-slide-to="i-1"
                data-bs-target="#carouselExampleCaptions" 
                class="border-0 rounded-circle mx-2"
                :class="{ active: (i-1) === 0}"
                style="width: 10px; height: 10px; margin-top: -25px"            
                ></button>
            </div>
            <div class="carousel-inner">
                    <div v-for="(img, index) in carousel_images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                        <img :src="img" class="d-block w-100" alt="banner" style="height: 500px; object-fit: cover" >
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ tm('types')[index] }}</h5>
                            <p>{{ tm('types_caption')[index] }}</p>
                        </div>
                    </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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