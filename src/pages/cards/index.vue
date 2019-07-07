<template lang="pug">
  v-ons-page
    Navigation(centerMessage='トレーナーカードリスト' :pageStatus="pageStatus")
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'cardIndex'
  })
}
</script>
<style lang="scss" scoped>
</style>
