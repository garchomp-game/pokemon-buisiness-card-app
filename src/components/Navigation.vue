<template lang="pug">
.toolbar
  .toolbar__left
    Slide(width="150")
      span(@click="pushPage('MypageIndex')") マイページ
      span(@click="pushPage('MypageEdit')") 編集
      span(@click="pushPage('SettingIndex')") 設定
      span(@click="logout") ログアウト
  .toolbar__center {{ centerMessage }}
  //編集ページ、カードリストページからpageStatusという変数を受け取り、
  //中身をキーにして処理を分けたい（menubar右を「戻る」ボタンにしたい）
  //なのに各ページからの変数が取得できない。。。
  .toolbar__right
    v-ons-toolbar-button(
      v-if="pageStatus=='mypageEdit'"
      @click="pushPage('Home')"
    )
      i.fas.fa-undo-alt(style="color: black; font-size: 24px;")
    v-ons-toolbar-button(
      v-else-if="pageStatus=='cardIndex'"
      @click="pushPage('Home')"
    )
      i.fas.fa-undo-alt(style="color: black; font-size: 24px;")
    v-ons-toolbar-button(
      v-else-if="pageStatus=='settingIndex'"
      @click="pushPage('Home')"
    )
      i.fas.fa-undo-alt(style="color: black; font-size: 24px;")
    v-ons-toolbar-button(
      v-else
      @click="pushPage('CardsIndex')"
    )
      i.fas.fa-clipboard-list(style="color: black; font-size: 24px;")
</template>
<script>
import MenuBar from './MenuBar'
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
