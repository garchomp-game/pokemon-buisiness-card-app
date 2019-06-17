<template>
  <v-ons-page>
    <h1>cards/show</h1>
    <v-ons-button @click="pop">戻る</v-ons-button>
  </v-ons-page>
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
