export default {
  methods: {
    emitPush (component) {
      this.$emit('push', component)
    },
    emitPull () {
      this.$emit('pull')
    },
    emitReset () {
      this.$emit('reset')
    }
  }
}
