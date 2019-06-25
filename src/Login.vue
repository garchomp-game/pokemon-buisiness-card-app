<template lang="pug">
  v-ons-page
    h1 login page
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    logIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(user)
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
