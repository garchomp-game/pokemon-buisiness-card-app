<template lang="pug">
.toolbar
  .toolbar__left
    v-ons-button(v-if="!hideBack" @click="pull" modifier="quiet") 戻る
  .toolbar__center {{ centerMessage }}
  .toolbar__right
    MenuBar(@logout="logout")
</template>
<script>
import MenuBar from './MenuBar'
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
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
