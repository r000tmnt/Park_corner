const { useI18n } = VueI18n

const selfIntroduction = {
    template: `
    <section class="bg-white" style="position: relative; height: 33vh;" id="self">

        <div class="row row-mobile">
            <div class="col-md-5 demo bg-cover" style="background-image: url('images/vadim-sherbakov-Hi9GSwWkCJk-unsplash.jpg'); position: absolute; top:0; bottom:0;"></div>
        </div>

        <div class="container">
            <div class="row justify-content-end">
                <div class="col-md-7 py-3 text" id="aboutMe">
                    <h3 class="mt-3">{{ t('about') }}</h3>
                    <p>{{ t('AboutMe') }}</p>

                    <div class="row mt-3 text">
                        <div class="col-md-6" id="whoamI">
                            <h4>{{ t('link') }}:</h4>
                            <a class="link me-3" v-for="link in outerLinks" :href="link.url">
                                <img :src="link.icon" :alt="link.name" class="text-info" style="width: 7%">
                            </a>
                        </div>
                        <div class="col-md-6">
                            <h4>{{ t('email') }}: </h4>
                            <p>Email: <a class="refer" href="mailTo:rick.t.ryahoocomtw653@gmail.com">rick.t.ryahoocomtw653@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
    `,
    setup() {
        const { t } = useI18n()

        const outerLinks = [
            {
                name: 'Pixiv',
                icon: 'images/pixiv.svg',
                url: 'https://www.pixiv.net/users/3093390'
            },
            {
                name: 'Furaffinity',
                icon: 'images/furaffinity.svg',
                url: 'https://www.furaffinity.net/user/r000tmnt/'
            },
            {
                name: 'twitter',
                icon: 'images/twitter.svg',
                url: 'https://twitter.com/r000tmnt'
            },
            {
                name: 'Patreon',
                icon: 'images/patreon.svg',
                url: 'https://www.patreon.com/parkcorner'
            }
        ]

        return {
            t,
            outerLinks
        }
    }
}

export default selfIntroduction;