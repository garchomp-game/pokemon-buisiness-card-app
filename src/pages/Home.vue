<template lang="pug">
v-ons-page
  v-ons-toolbar
    .left
      v-ons-toolbar-button(@click="showSettingIndex" icon="md-settings") 設定
    .center Home
    .right
      v-ons-toolbar-button(@click="showMypageEdit") 編集
  v-ons-list
    v-ons-list-header Trainer Name
    v-ons-list-item めきは
    v-ons-list-header Name
    v-ons-list-item 
    v-ons-list-header Character
    v-ons-list-item のんびり
    v-ons-list-header FriendCode(PokemonGO)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(Switch)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(3DS)
    v-ons-list-item 1111-2222-3333-4444
  v-ons-card
    .title home
    v-ons-list
      v-ons-list-item
        v-ons-button(@click="showCardsIndex") CardsIndex
      v-ons-list-item
        v-ons-button(@click="showCardsShow") CardsShow
      v-ons-list-item
        v-ons-button(@click="showMypageIndex") MypageIndex
      //v-ons-list-item
        v-ons-button(@click="showMypageEdit") MypageEdit
      //v-ons-list-item
        v-ons-button(@click="showSettingIndex") SettingIndex
</template>

<script>
import CardsIndex from './cards/index'
import CardsShow from './cards/show'
import MypageIndex from './mypage/index'
import MypageEdit from './mypage/edit'
import SettingIndex from './setting/index'

export default {
  methods: {
    showCardsIndex () {
      this.$emit('push', CardsIndex)
    },
    showCardsShow () {
      this.$emit('push', CardsShow)
    },
    showMypageIndex () {
      this.$emit('push', MypageIndex)
    },
    showMypageEdit () {
      this.$emit('push', MypageEdit)
    },
    showSettingIndex () {
      this.$emit('push', SettingIndex)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
