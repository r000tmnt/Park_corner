const commissionDetail = {
    template: `
    <section class="py-5" id="Commission_Detail">
        <div class="container">
            <h1 class="section_title mb-4">委託流程</h1>
            <div class="row">
                <div class="col-md-6">
                    <div id="statePurpose" class="d-flex">
                        <i class="fas fa-list-alt fa-4x text-success"></i>
                        <ul>
                            <h4>1.請聲明委託用途</h4>
                            <li>請以私訊或電子信件聯絡。 基本可用於個人收藏。</li>
                            <li>上傳插畫至個人部落格(FB、Twiiter)請標註繪師名稱。</li>
                            <li>尺寸預設為A4，300dpi。 若有其他尺寸需求請事先告知。</li>
                            <li>繪師接受原創、二創和獸人或NSFW...等題材，但不接受血腥、過激的元素。 請提供參考圖或是內容描述(越詳盡越好)。</li>
                        </ul>
                    </div>

                </div>
                <div class="col-md-6">
                    <div id="payment" class="d-flex">
                        <i class="fas fa-donate fa-4x text-success"></i>
                        <ul>
                            <h4>2.付款相關</h4>
                            <li>作品最多可提出3次修改，超過視情況加收費用。</li>
                            <li>委託金可以分兩次或一次付清。兩次分為草稿確認與完稿確認。 台灣國內請匯至指定銀行帳戶，海外委託請用Paypal付款。</li>
                            <li>繪師有權將委託視為自己的作品之一，並發布於社群網站(如Pixix、Twitter)。 若不願公開請事先告知。</li>
                            <li>一般公司商業委託，請另外來信詢價。</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    `,    
    props: ['lang'],
    setup(props) {
        console.log(props)
    }
}

export default commissionDetail;