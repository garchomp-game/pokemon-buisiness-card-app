<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .left
        v-ons-toolbar-button(@click="pop") 戻る
      .center Setting
</template>
<script>
export default {
  name: '',
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
