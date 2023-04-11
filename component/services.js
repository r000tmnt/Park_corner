const services = {
  props: ['lang'],
  template: `
  <section id="Short_info">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4 py-3 explain">
          <i class="fas fa-handshake fa-6x text-white py-2"></i>
          <h5>互助合作</h5>
          <p>縮短想像與現實的距離，尋求雙方滿意的成品。</p>
        </div>
        <div class="col-sm-12 col-md-4 py-3 explain">
          <i class="fas fa-user-clock fa-6x text-white py-2"></i>
          <h5>時間掌控</h5>
          <p>不開天窗是接案人的職責，定期與委託人確認進度。</p>
        </div>
        <div class="col-sm-12 col-md-4 py-3 explain">
          <i class="fas fa-palette fa-6x text-white py-2"></i>
          <h5>多樣變化</h5>
          <p>簡單留白，賽璐璐或是油彩厚塗? 風格是可以切換的。</p>
        </div>
      </div>
    </div>
  </section>
  `,
  created(){
    console.log(this.$props)
  }
}

export default services;