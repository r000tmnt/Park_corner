const { ref, computed } = Vue;
const { useI18n } = VueI18n

const styleReferences = {
    template: `
    <section style="position: relative;">
        <div class="container">
            <div class="row">
                <div id="reference" class="col-md-12" style="z-index: 1;">
                    <h1 class="section_title mb-4">{{ t('reference') }}
                        <span style="font-size: 1rem">{{ t('reference_note') }}</span>
                    </h1>

                    <ul class="nav nav-tabs">
                        <li class="nav-item mr-1 border-bottom-0" v-for="(style, index) in reference_styles_images" :key="index">
                            <a class="nav-link" href="#" @click.prevent="changeReferenceStyle(index)" :class="{ active: currentStyle === style.name }" >
                                <span>{{ tm('reference_styles')[index] }}</span>
                            </a>
                        </li>                        
                    </ul>    
                    
                    <!-- Context of the style -->
                    <div class="card mb-4">
                        <div class="card-body row">
                            <div class="col-md-5">
                                <img class="img-fluid" style="width: 500px; height: 500px; object-fit: cover;" :src="current_reference_style.images[current_reference_style_images_index]" :alt="currentStyle">
                         
                                <div id="carouselExampleFade" class="carousel mt-4" style="width: 500px; height: 100px">
                                    <div class="carousel-inner">

                                        <div class="d-flex justify-content-start">
                                            <button 
                                            class="me-2 border-0 rounded bg-body" 
                                            v-for="(img, index) in current_reference_style.images" 
                                            :key="img"
                                            @click="changeReferenceImage(index)">
                                                <img :src="img" class="d-block img-thumbnail" :class="{'border-2': index === current_reference_style_images_index}" :alt="currentStyle" style="height: 100px">
                                            </button>                                                
                                        </div>                                    
   
                                    </div>

                                    <!-- 切換按鈕，未來有需要再作
                                        <button class="carousel-control-prev h-25" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                            <span class="carousel-control-next-icon h-25" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>                                    
                                    -->

                                </div>

                            </div>
                            <div class="ref-desc col-md-7">
                                <h5 class="card-title">簡介:</h5>
                                <p style="white-space: break-spaces">
                                    {{ tm('reference_caption')[getReferenceStyleIndex] }}
                                </p>

                                <h5 class="card-title">舉例:</h5>
                                <p style="white-space: break-spaces">
                                    {{ tm('reference_example')[getReferenceStyleIndex] }}
                                </p>

                                <h5 class="card-title">備註:</h5>
                                <p style="white-space: break-spaces">
                                    {{ t('reference_ps') }}
                                </p>
                                
                                <!--
                                <span class="card-text fs-3 text-warning float-end">{{ tm('reference_prices')[getReferenceStyleIndex] }}</span>   
                                -->                           
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
    `,
    props: ['styles'],
    setup(props) {
        const { t, tm } = useI18n()

        // default to first one
        const currentStyle = ref(props.styles[0])

        console.log(props.styles)
        
        const reference_styles_images = {}

        for(let i=0; i < Object.keys(props.styles).length; i++){

            reference_styles_images[i] = {
                name: props.styles[i],
                images: [
                    'images/Commission_Demo-Lineart01.jpg',
                    'images/Commission_Demo-celShading.jpg',
                    'images/Commission_Demo-FullShading.jpg'
                ]
            }

        }

        console.log(reference_styles_images)

        const current_reference_style_images_index = ref(0)
        const current_reference_style = reference_styles_images[`${current_reference_style_images_index.value}`]
        console.log(current_reference_style)

        const changeReferenceImage = (index) => {
            current_reference_style_images_index.value = index
        }

        const changeReferenceStyle = (index) => {
            currentStyle.value = props.styles[index]
            current_reference_style_images_index.value = 0
        }

        const getReferenceStyleIndex = computed(() => {
            return Object.keys(props.styles).findIndex((key) => props.styles[key] === currentStyle.value)
        })

        return {
            currentStyle,
            current_reference_style,
            current_reference_style_images_index,
            reference_styles_images,
            changeReferenceImage,
            changeReferenceStyle,
            getReferenceStyleIndex,
            t,
            tm
        }
    }    
}

export default styleReferences;