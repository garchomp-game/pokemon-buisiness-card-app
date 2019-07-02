<template lang="pug">
  v-ons-page
    Navigation(centerMessage='Setting' :pageStatus="pageStatus" @push="emitPush")
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'settingIndex'
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
