<template lang="pug">
  v-ons-page
    Navigation(centerMessage='トレーナーカードリスト' :pageStatus="pageStatus" @push="emitPush")
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'mypageEdit'
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
