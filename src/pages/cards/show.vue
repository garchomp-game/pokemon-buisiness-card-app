<template lang="pug">
  v-ons-page
    Navigation(centerMessage='cards/show' @push="emitPush")
</template>
<script>
export default {
  data: () => ({

  }),
  methods: {
    pop () {
      this.$emit('pop')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
