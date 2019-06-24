<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .left
        v-ons-toolbar-button(@click='pop') 戻る
      .center 編集
    v-ons-list
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='Trainer Name')
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='Name', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-switch
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-select#choose-sel.custom-left-input
            option(value='')
            option(value='samisigari') さみしがり
            option(value='ijippari') いじっぱり
            option(value='yantya') やんちゃ
            option(value='yukan') ゆうかん
            option(value='zubutoi') ずぶとい
            option(value='wanpaku') わんぱく
            option(value='notenki') のうてんき
            option(value='nonki') のんき
            option(value='hikaeme') ひかえめ
            option(value='ottori') おっとり
            option(value='ukkariya') うっかりや
            option(value='reisei') れいせい
            option(value='odayaka') おだやか
            option(value='otonasi') おとなしい
            option(value='sintyo') しんちょう
            option(value='namaiki') なまいき
            option(value='okubyou') おくびょう
            option(value='sekkati') せっかち
            option(value='youki') ようき
            option(value='mujaki') むじゃき
            option(value='tereya') てれや
            option(value='ganbariya') がんばりや
            option(value='sunao') すなお
            option(value='kimagure') きまぐれ
            option(value='majime') まじめ
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='Friend Code(Switch)', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='Friend Code(Pokemon GO)', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='Friend Code(3DS)', modifier='material')
        .custom-right
          v-ons-switch
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
<style lang="sass" scoped>
.custom-left
  float: left
  width: 70vw
  .custom-left-input
    width: 80%
.custom-right
  float: right
  width: 20vw
</style>
