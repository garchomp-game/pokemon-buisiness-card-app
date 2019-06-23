<template>
  <v-ons-page>
    <h1>mypage/edit</h1>
    <v-ons-button @click="pop">戻る</v-ons-button>
    <v-ons-list>
      <v-ons-list-item>
        <v-ons-input placeholder="Trainer Name"></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder="Name"></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder="Character"></v-ons-input>
      </v-ons-list-item>
    </v-ons-list>
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
