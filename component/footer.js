const footer = {
    template: `
    <footer class="bg-dark">
        <div class="container py-4">
            <div class="outterLinks">
                <a class="link" href="https://www.pixiv.net/users/3093390">
                <img src="images/pixiv_icon.ico" alt="Not found"></a>
                
                <a class="link" href="https://www.furaffinity.net/user/r000tmnt/">
                    <img src="images/fa_logo.png" alt="Not found">
                </a>

                <a class="link" href="https://twitter.com/r000tmnt">
                    <img src="images/twitter_icon.png" alt="Not found">
                </a>
                
            </div>

            <div class="text-center py-3">Park Corner &copy;Copyright 2020 - {{year}}</div>
        </div>
    </footer>
    `,
    setup() {
        const year = new Date().getFullYear()

        return {
            year
        }
    }
}

export default footer;