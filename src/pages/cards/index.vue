<template lang="pug">
  v-ons-page
    Navigation(centerMessage='トレーナーカードリスト' :pageStatus="cardIndex" @push="emitPush")
</template>
<script>
export default {
  data: () => ({
    pageStatus: "1"
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
