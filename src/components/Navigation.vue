<template lang="pug">
.toolbar
  .toolbar__left
    Slide(width="150")
      span(@click="showMypageIndex") マイページ
      span(@click="showMypageEdit") 編集
      span(@click="showSettingIndex") 設定
      span(@click="logout") ログアウト
  .toolbar__center {{ pageStatus }}
  //編集ページ、カードリストページからpageStatusという変数を受け取り、
  //中身をキーにして処理を分けたい（menubar右を「戻る」ボタンにしたい）
  //なのに各ページからの変数が取得できない。。。
  .toolbar__right
    v-ons-toolbar-button(
      v-if="pageStatus=='mypageEdit'"
      @click="showMypageIndex"
    ) MyPageEdit
    v-ons-toolbar-button(
      v-else-if="pageStatus=='cardIndex'"
      @click="showMypageIndex"
    ) CardIndex
    v-ons-toolbar-button(
      v-else
      @click="showCardsIndex"
    ) {{ pageStatus }}
      //i.fas.fa-clipboard-list(style="color: black; font-size: 24px;")
</template>
<script>
import MenuBar from './MenuBar'
import CardsIndex from '../pages/cards/index'
import MypageIndex from '../pages/Home'
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
    },
    pageStatus: {
      type: String,
      default: 'pageStatus'
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
    showMypageIndex () {
      this.$emit('push', MypageIndex)
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
