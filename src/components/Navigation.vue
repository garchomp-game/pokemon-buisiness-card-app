<template lang="pug">
.toolbar
  .toolbar__left
    v-ons-toolbar-button(@click="showSettingIndex" icon="md-settings") 設定
  .toolbar__center {{ centerMessage }}
  .toolbar__right
    v-ons-toolbar-button(@click="showMypageEdit" icon="ion-edit")
    v-ons-toolbar-button(@click="showCardsIndex" icon="ion-list") List
</template>
<script>
import MenuBar from './MenuBar'
import CardsIndex from '../pages/cards/index'
import MypageEdit from '../pages/mypage/edit'
import SettingIndex from '../pages/setting/index'
export default {
  name: 'Navigator',
  data: () => ({
    currentPage: '',
    pages: ['logout'],
    openSide: false
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
    MenuBar
  },
  computed: {
    loginFlg: function () {
      return this.$store.state.user.hasLogin
    }
  },
  methods: {
    pull () {
      this.$emit('pull')
    },
    logout () {
      this.$emit('logout')
    },
    showCardsIndex () {
      this.$emit('push', CardsIndex)
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
<style lang="sass" scoped>
</style>
