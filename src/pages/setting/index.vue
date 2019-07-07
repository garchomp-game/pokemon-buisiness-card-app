<template lang="pug">
  v-ons-page
    Navigation(centerMessage='Setting' :pageStatus="pageStatus")
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'settingIndex'
  })
}
</script>
<style lang="scss" scoped>
</style>
