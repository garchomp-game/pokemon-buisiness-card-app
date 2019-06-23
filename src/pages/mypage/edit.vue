<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="pop">戻る</v-ons-toolbar-button>
      </div>
      <div class="center">編集</div>
    </v-ons-toolbar>
    
    <v-ons-list>
      <v-ons-list-item>
        <v-ons-input placeholder="Trainer Name"></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input placeholder="Name" modifier="material"></v-ons-input>
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          <v-ons-select id="choose-sel">
            <option value=""></option>
            <option value="samisigari">さみしがり</option>
            <option value="ijippari">いじっぱり</option>
            <option value="yantya">やんちゃ</option>
          </v-ons-select>
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          <v-ons-input placeholder="Friend Code(Switch)" modifier="material"></v-ons-input>
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          <v-ons-input placeholder="Friend Code(Pokemon GO)" modifier="material"></v-ons-input>
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          <v-ons-input placeholder="Friend Code(3DS)" modifier="material"></v-ons-input>
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
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
