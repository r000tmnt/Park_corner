const { useI18n } = VueI18n

const navbar = {
    template: `
    <section class="bg-dark">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand logo" href="#">
                    <img style="width: 100px" src="../images/ParkCorner_logo_white.png" alt="Not found">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav w-100 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" id="about" href="#self">{{ t('about') }}</a>
                        </li>
                        <li class="nav-item me-auto">
                            <a class="nav-link" id="form" href="#contact">{{ t('contact') }}</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-language fs-4"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" id="zh" class="dropdown-item ms-0" :class="{ current_lang: locale === 'zh_TW' }" @click.prevent="changeLanguage('zh-TW')">{{ t('zh_tw') }}</a>
                                </li>
                                <li>
                                    <a href="#" id="eng" class="dropdown-item ms-0" :class="{ current_lang: locale === 'eng' }" @click.prevent="changeLanguage('eng')">{{ t('eng') }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    `,    
    setup(props, { emit }) {

        const changeLanguage = (language) => {
            emit('changeLang', language)
        }

        const { t, locale } = useI18n()

        return {
            changeLanguage,
            t,
            locale
        }
    }
}

export default navbar;