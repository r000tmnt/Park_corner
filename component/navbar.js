const navbar = {
    template: `
    <section class="bg-dark">
        <div class="container">

        <div class="lang">
            <a href="#zh" id="zh" language="zh" class="changeLan active">中文</a>
            <a href="#eng" id="eng" class="changeLan" language="eng">English</a>
        </div>

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

        return {
            changeLanguage
        }
    }
}

export default navbar;