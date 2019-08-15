<template lang="pug">
  v-ons-page
    Navigation(centerMessage='編集' :pageStatus="pageStatus")
    v-ons-list
      v-ons-list-item
        v-ons-row
          v-ons-col 入力欄
          v-ons-col(width="120px")
            span 公開/非公開
            br
            span 切り替え
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
          select.select-input#choose-sel.custom-left-input
            option(value='' style="display: none;") gender
            option(value='♂') ♂
            option(value='♀') ♀
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          select.select-input#choose-sel.custom-left-input
            option(value='' style="display: none;") personality
            option(v-for="(item, key) in personality" :value="key") {{ item }}
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
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='TwitterID', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(placeholder='PixivID', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-button(modifier='large',@click="pushEdit") 完了
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'mypageEdit',
    personality: {
      'samisigari': 'さみしがり',
      'ijippari': 'いじっぱり',
      'yantya': 'やんちゃ',
      'yukan': 'ゆうかん',
      'zubutoi': 'ずぶとい',
      'wanpaku': 'わんぱく',
      'notenki': 'のうてんき',
      'nonki': 'のんき',
      'hikaeme': 'ひかえめ',
      'ottori': 'おっとり',
      'ukkariya': 'うっかりや',
      'reisei': 'れいせい',
      'odayaka': 'おだやか',
      'otonasi': 'おとなしい',
      'sintyo': 'しんちょう',
      'namaiki': 'なまいき',
      'okubyou': 'おくびょう',
      'sekkati': 'せっかち',
      'youki': 'ようき',
      'mujaki': 'むじゃき',
      'tereya': 'てれや',
      'ganbariya': 'がんばりや',
      'sunao': 'すなお',
      'kimagure': 'きまぐれ',
      'majime': 'まじめ'
    },
    trainer_name: '',
    name: '',
    gender: '',
    personal: '',
    friendcode_switch: '',
    friendcode_pokemongo: '',
    friendcode_3ds: '',
    twitter_id: '',
    pixiv_id: ''
  })
}
</script>
<style lang="sass" scoped>
.custom-left
  float: left
  width: 70vw
  &-input
    width: 80%
.custom-right
  float: right
  width: 20vw
</style>
