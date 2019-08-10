<template lang="pug">
v-ons-page
  Navigation(centerMessage='Home')
  v-ons-list
    v-ons-list-header Trainer Name
    v-ons-list-item {{userList.trainerName}}
    v-ons-list-header Name
    v-ons-list-item {{userList.name}}
    v-ons-list-header Sex
    v-ons-list-item {{calcSex(userList.sex)}}
    v-ons-list-header Character
    v-ons-list-item {{calcCharacter(userList.character)}}
    v-ons-list-header FriendCode(PokemonGO)
    v-ons-list-item {{userList.frendCodePokemonGO}}
    v-ons-list-header FriendCode(Switch)
    v-ons-list-item {{userList.frendCodeSwitch}}
    v-ons-list-header FriendCode(3DS)
    v-ons-list-item {{userList.frendCode3DS}}
    v-ons-list-header TwitterID
    v-ons-list-item {{userList.twitterId}}
    v-ons-list-header PixivID
    v-ons-list-item {{userList.pixivId}}
  v-ons-list
    v-ons-list-item(v-for="(item, index) in testData", :key="index") {{ item.value }}
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import ConfigList from '../const.js'
export default {
  data () {
    return {
      testData: [],
      userList: {}
    }
  },
  async created () {
    const refTest = firebase.database().ref('UserData')
    refTest.limitToLast(10).on('child_added', async (snap) => {
      const data = await snap.val()
      console.log(data)
      this.userList = data
    })
  },
  methods: {
    calcSex (flg) {
      return ConfigList.sex[flg]
    },
    calcCharacter (flg) {
      return ConfigList.character[flg]
    },
    async childAdded (snap) {
      const data = await snap.val()
      const dataList = {
        key: snap.key,
        trainerName: data.trainerName,
        name: data.name,
        sex: data.sex,
        character: data.character,
        frendCodePokemonGO: data.frendCodePokemonGO,
        frendCodeSwitch: data.frendCodeSwitch,
        frendCode3DS: data.frendCode3DS,
        twitterId: data.twitterId,
        pixivId: data.pixivId
      }
      console.log(dataList)
      this.userList[0] = await dataList
      this.userList.splice()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
