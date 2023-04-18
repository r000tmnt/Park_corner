const { useI18n } = VueI18n

const services = {
  template: `
  <section id="Short_info">
    <div class="container">
      <div class="row">
        <div v-for="(icon, index) in service_icons" :key="icon" class="col-sm-12 col-md-4 py-3 explain">
          <i class="fas fa-6x text-white py-2" :class="icon"></i>
          <h5>{{ tm('service')[index] }}</h5>
          <p>{{ tm('serviceDesc')[index] }}</p>
        </div>
      </div>
    </div>
  </section>
  `,  
  setup(){
    const { tm } = useI18n()

    const service_icons = [
      'fa-handshake',
      'fa-user-clock',
      'fa-palette'
    ]

    return {
      service_icons,
      tm
    }
  }
}

export default services;