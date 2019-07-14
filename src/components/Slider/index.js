export default {
  name: 'Slider',
  data () {
    return {
      modalFlg: false,
      size: 60
    }
  },
  computed: {
    sliderStyle() {
      return {
        marginLeft: `-${this.size}vw`
      }
    }
  },
  props: {
    header: {
      type: String,
      require: false,
      default: 'メニューページ'
    },
    sliderData: {
      type: Array,
      require: true,
      default: []
    }
  },
  methods: {
    jumpPage(page) {
      if (page == 'Logout') {
        this.$emit('logout')
        this.size = 60
        return
      }
      this.pushPage(page)
    },
    openModal() {
      this.size = 0
    },
    closeModal() {
      this.size = 60
    }
  }
}
