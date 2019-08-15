<template lang="pug">
v-ons-page
  Navigation(centerMessage='Home')
  v-ons-list
    v-ons-list-header Trainer Name
    v-ons-list-item {{ this.trainer_name }}
    v-ons-list-header Name
    v-ons-list-item
    v-ons-list-header Sex
    v-ons-list-item ♂
    v-ons-list-header Character
    v-ons-list-item のんびり
    v-ons-list-header FriendCode(PokemonGO)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(Switch)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(3DS)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header TwitterID
    v-ons-list-item
    v-ons-list-header PixivID
    v-ons-list-item
  //- v-ons-card
    .title home
    //- v-ons-list
      v-ons-list-item
        v-ons-button(@click="pushPage('CardsIndex')") CardsIndex
      v-ons-list-item
        v-ons-button(@click="pushPage('CardsShow')") CardsShow
      v-ons-list-item
        v-ons-button(@click="pushPage('MypageIndex')") MypageIndex
      //- v-ons-list-item
        v-ons-button(@click="pushPage('MypageEdit')") MypageEdit
      //- v-ons-list-item
        v-ons-button(@click="pushPage('SettingIndex')") SettingIndex
</template>

<script>
export default {
  data: () => ({
    pageStatus: 'Home',
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
  }),
  methods: {
    window: onload = function () {
      console.log('Home')
      // var KEY = 'personal'
      // var obj = JSON.parse(localStorage.getItem(KEY))
      this.trainer_name = 'onload'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
