<template lang="pug">
  v-ons-page
    Navigation(centerMessage='トレーナーカードリスト')
    v-ons-list
      v-ons-list-header ヘッダー
      v-ons-list-item コンテンツ
</template>
qrcode(
  value="Hello, World!"
  :options="{ width: 200 }"
)
<script>
export default {
  name: 'cardsTrade',
  data: () => ({
    value: ''
  })
}
</script>
<style lang="scss" scoped>
</style>
