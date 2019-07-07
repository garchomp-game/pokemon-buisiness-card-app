
<template lang="pug">
  v-ons-navigator(
    swipeable
    :page-stack="pageStack"
    @push="pageStack.push($event)"
    @pop="pageStack.pop()"
    @reset="reset"
  )
</template>
<script>
import Home from './pages/Home'
import Navigation from './components/Navigation'
import firebase from 'firebase/app'
import { mapState } from 'vuex'
export default {
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.pushPage('Login')
      }
    })
  },
  computed: mapState({
    pageStack: state => state.navigation.pageStack
  }),
  components: {
    Navigation
  },
  methods: {
    reset () {
      this.pageStack = []
      this.pageStack.push(Home)
    }
  }
}
</script>
<style lang="sass" media="screen">
  @import "./assets/sass/main.sass"
</style>
