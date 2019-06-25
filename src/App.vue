
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
import Login from './Login'
export default {
  data () {
    return {
      pageStack: [Home]
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.pageStack.push(Login)
      }
    })
  },
  components: {
    Navigation,
    Login
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
