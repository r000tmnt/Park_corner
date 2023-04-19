const { useI18n } = VueI18n

const commissionDetail = {
    template: `
    <header class="py-5" id="Commission_Detail">
        <div class="container">
            <h1 class="section_title mb-4">{{ t('workFlow') }}</h1>
            <div class="row">

                <div class="col-md-6" v-for="(step, index) in tm('workFlow_steps')" :key="step">

                    <div id="statePurpose" class="d-flex">
                        <i class="fas fa-4x text-success" :class="workFlow_icons[index]"></i>
                        <ul>
                            <h4>{{ step.title }}</h4>
                            <li v-for="desc in step.desc" :key="desc">{{ desc }}</li>
                        </ul>
                    </div>

                </div>   

            </div>
        </div>
    </header>
    `,
    setup() {
        const { t, tm } = useI18n()

        const workFlow_icons = [
            'fa-list-alt',
            'fa-donate'
        ]

        return {
            workFlow_icons,
            t,
            tm
        }
    }
}

export default commissionDetail;