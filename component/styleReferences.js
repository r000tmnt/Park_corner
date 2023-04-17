const styleReferences = {
    template: `
    <section style="position: relative;">
        <div class="container">
            <div class="row">
                <div id="reference" class="col-md-12" style="z-index: 1;">
                    <h1 class="section_title mb-4">參考
                        <span style="font-size: 1rem">*未列出格式不代表無法接受，可與繪師討論</span>
                    </h1>

                    <table id="desktop" class="table desktop"> 
                        <thead>
                            <tr>
                                <th><h4>線搞</h4></th>
                                <th><h4>賽璐璐</h4></th>
                                <th><h4>油彩厚塗</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-Lineart01.jpg');"></p>
                                </td>
                                <td>
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-celShading.jpg');"></p>
                                </td>
                                <td>
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-FullShading.jpg');"></p>
                                </td>
                            </tr>

                            <tr>
                                <td>NT 300</td>
                                <td>NT 1000</td>
                                <td>NT 1700</td>
                            </tr>  
                            
                            <tr>
                                <td colspan="3">
                                    <p>追加人物 NT 500(一個角色)</p>
                                    <p>加背景 NT 500~900(依複雜程度而定)</p>
                                    <p>委託約於一周內完成，繪師會與你保持聯絡追蹤進度</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!--Table for mobile-->
                    <table id="mobile" class="table mobile"> 
                        <tbody>
                            <tr>
                                <td>線搞</td>
                                <td data-th="線搞">
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-Lineart01.jpg');"></p>
                                </td>
                                <td>NT 300</td>
                            </tr>

                            <tr>
                                <td>賽璐璐</td>
                                <td data-th="賽璐璐">
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-celShading.jpg');"></p>
                                </td>
                                <td>NT 1000</td>
                            </tr>  
                            
                            <tr>
                                <td>油彩厚塗</td>
                                <td data-th="油彩厚塗">
                                    <p class="demo bg-cover" style="background-image: url('images/Commission_Demo-FullShading.jpg');"></p>
                                </td>
                                <td>NT 1500</td>
                            </tr>
                        </tbody>  
                        
                        <tfoot>
                            <tr>
                                <td colspan="3">
                                    <p>追加人物 NT 500(一個角色)</p>
                                    <p>加背景 NT 500~900(依複雜程度而定)</p>
                                    <p>委託約於一周內完成，繪師會與你保持聯絡追蹤進度</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    
                </div>
            </div>
        </div>

    </section>
    `,    
    props: ['lang'],
    setup(props) {
        console.log(props)
        
        const reference_styles_images = [
            'images/Commission_Demo-Lineart01.jpg',
            'images/Commission_Demo-celShading.jpg',
            'images/Commission_Demo-FullShading.jpg'

        ]
        return {
            reference_styles_images
        }
    }    
}

export default styleReferences;