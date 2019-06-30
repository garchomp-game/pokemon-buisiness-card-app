<template lang="pug">
.toolbar
  .toolbar__left
    Slide(width="150")
      span(@click="showMypageEdit") マイページ
      span(@click="showSettingIndex") 設定
      span(@click="logout") ログアウト
  .toolbar__center {{ centerMessage }}
  .toolbar__right
    v-ons-toolbar-button(@click="showCardsIndex")
      i.fas.fa-clipboard-list(style="color: black; font-size: 24px;")
</template>
<script>
import MenuBar from './MenuBar'
import CardsIndex from '../pages/cards/index'
import MypageEdit from '../pages/mypage/edit'
import SettingIndex from '../pages/setting/index'
import { Slide } from 'vue-burger-menu'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'Navigator',
  data: () => ({
    currentPage: ''
  }),
  props: {
    hideBack: {
      type: Boolean,
      default: false
    },
    centerMessage: {
      type: String,
      default: 'ようこそ掲示板へ！'
    }
  },
  components: {
    MenuBar,
    Slide
  },
  methods: {
    pull () {
      this.$emit('pull')
    },
    async logout () {
      await firebase.auth().signOut()
      await this.$emit('reset')
    },
    showCardsIndex () {
      this.$emit('push', CardsIndex)
    },
    showMypageEdit () {
      this.$emit('push', MypageEdit)
    },
    showSettingIndex () {
      this.$emit('push', SettingIndex)
    },
    showPullDown () {
      console.log('pull down')
    },
    splitterOpen () {
      console.log('open pulldown')
    }
  }
}
</script>
<style>
.bm-burger-button {
   width: 24px;
   height: 20px;
   left: 12px;
   top: 12px;
 }
</style>
<style lang="sass" scoped>
</style>
