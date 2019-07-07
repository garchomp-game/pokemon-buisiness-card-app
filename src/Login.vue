<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .center ログイン画面
    v-ons-list
      v-ons-list-item
        v-ons-input(placeholder="メールアドレス" v-model="email")
      v-ons-list-item
        v-ons-input(
          placeholder='パスワード'
          v-model="password"
          type="password"
        )
    v-ons-button.button-custom-margin(@click="logIn") ログインする
    v-ons-button.button-custom-margin(@click="signUpPage") 新規登録する
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
        this.pagePop()
      })
      .catch(err => {
        console.log(err)
      })
    },
    signUpPage () {
      this.pushPage('SignUp')
    }
  }
}
</script>
<style lang="sass" scoped>
  .button-custom-margin
    margin-left: 20px
    margin-top: 10px
</style>
