const { useI18n } = VueI18n

const navbar = {
    template: `
    <section class="bg-dark">
        <div class="container">

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand logo" href="#">
                    <img width="100px" src="../images/ParkCorner_logo_white.png" alt="Not found">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" id="about" href="#self">關於我</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" id="form" href="#contact">聯絡我</a>
                        </li>
                        
                    </ul>
                </div>

                <div class="dropdown">
                    <button class="btn text-white dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-language" style="font-size: 1.5rem"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a href="#" id="zh" class="dropdown-item" @click.prevent="changeLanguage('zh-TW')">{{ t('zh_tw') }}</a>
                        <a href="#" id="eng" class="dropdown-item" @click.prevent="changeLanguage('eng')">{{ t('eng') }}</a>
                    </div>
                </div>                  
            </nav>
        </div>
    </section>
    `,    
    props: ['lang'],
    setup(props , { emit }) {
        console.log(props)

        const changeLanguage = (language) => {
            console.log(language)
            emit('changeLang', language)
        }

        const { t } = useI18n()

        return {
            changeLanguage,
            t
        }
    }
}

export default navbar;