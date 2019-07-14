<template lang="pug">
.toolbar(style="height: 48px;")
  .toolbar__left
    Slider(
      :sliderData="sliderData"
      @logout="logout"
    )
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
import firebase from 'firebase/app'
import Slider from '@/components/Slider'
import 'firebase/auth'
export default {
  name: 'Navigator',
  data: () => ({
    currentPage: '',
    sliderData: [
      {
        page: 'MypageIndex',
        name: 'マイページ'
      },
      {
        page: 'MypageEdit',
        name: '編集'
      },
      {
        page: 'SettingIndex',
        name: '設定'
      },
      {
        page: 'Logout',
        name: 'ログアウト'
      }
    ]
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
    Slider
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
<style lang="sass" scoped>
</style>
