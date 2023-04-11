const footer = {
    data(){
        return {
            year: new Date().getFullYear()
        }
    },
    template: `
    <footer class="bg-dark">
        <div class="container">
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

            <div class="text-center py-3">Park Corner &copy;Copyright {{year}}</div>
        </div>
    </footer>
    `,
    created(){
        console.log(this)
    }
}

export default footer;