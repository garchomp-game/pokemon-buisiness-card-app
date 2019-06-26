<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .center ログイン画面
    v-ons-list
      v-ons-list-item
        v-ons-input(placeholder="email" v-model="email")
      v-ons-list-item
        v-ons-input(
          placeholder='password'
          v-model="password"
          type="password"
        )
    v-ons-button(@click="logIn")
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
        this.$emit('pop')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
