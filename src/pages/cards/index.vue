<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="pop">戻る</v-ons-toolbar-button>
      </div>
      <div class="center">トレーナーカードリスト</div>
    </v-ons-toolbar>    
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
