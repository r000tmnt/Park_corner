const footer = {
    template: `
    <footer class="bg-dark">
        <div class="container text-center py-3">
            <small>Credits to Fontawesome, Iconduck and LeviSnoot for icons</small>
            <p class="mt-2">Park Corner &copy;Copyright 2020 - {{year}}</p>
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