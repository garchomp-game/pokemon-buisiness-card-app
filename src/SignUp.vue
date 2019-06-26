<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .center 登録画面
    v-ons-list
      v-ons-list-item
        v-ons-input(placeholder="メールアドレス" v-model="email")
      v-ons-list-item
        v-ons-input(
          placeholder='パスワード'
          v-model="password"
          type="password"
        )
    v-ons-button(@click="singUp") 新規登録
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'SignUp',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    singUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.$emit('reset')
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
