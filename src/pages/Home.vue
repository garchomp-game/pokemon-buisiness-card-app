<template lang="pug">
v-ons-page
  v-ons-card
    .title home
    v-ons-list
      v-ons-list-item
        v-ons-button(@click="showCardsIndex") CardsIndex
      v-ons-list-item
        v-ons-button(@click="showCardsShow") CardsShow
      v-ons-list-item
        v-ons-button(@click="showMypageIndex") MypageIndex
      v-ons-list-item
        v-ons-button(@click="showMypageEdit") MypageEdit
      v-ons-list-item
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
