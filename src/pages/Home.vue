<template lang="pug">
v-ons-page(@init="initEvent")
  Navigation(centerMessage='Home')
  v-ons-list
    v-ons-list-header Trainer Name
    v-ons-list-item {{ trainer_name }}
    v-ons-list-header Name
    v-ons-list-item {{ name }}
    v-ons-list-header Sex
    v-ons-list-item {{ gender }}
    v-ons-list-header Character
    v-ons-list-item {{ character}}
    v-ons-list-header FriendCode(PokemonGO)
    v-ons-list-item {{ friendcode_pokemongo}}
    v-ons-list-header FriendCode(Switch)
    v-ons-list-item {{ friendcode_switch }}
    v-ons-list-header FriendCode(3DS)
    v-ons-list-item {{ friendcode_3ds }}
    v-ons-list-header TwitterID
    v-ons-list-item {{ twitter_id }}
    v-ons-list-header PixivID
    v-ons-list-item {{ pixiv_id }}
  //- v-ons-card
    .title home
    //- v-ons-list
      v-ons-list-item
        v-ons-button(@click="pushPage('CardsIndex')") CardsIndex
      v-ons-list-item
        v-ons-button(@click="pushPage('CardsShow')") CardsShow
      v-ons-list-item
        v-ons-button(@click="pushPage('MypageIndex')") MypageIndex
      //- v-ons-list-item
        v-ons-button(@click="pushPage('MypageEdit')") MypageEdit
      //- v-ons-list-item
        v-ons-button(@click="pushPage('SettingIndex')") SettingIndex
</template>

<script>
import config from '../const.js'
export default {
  data: () => ({
    pageStatus: 'Home',
    personality: {},
    trainer_name: '',
    name: '',
    gender: '',
    character: '',
    personal: '',
    friendcode_switch: '',
    friendcode_pokemongo: '',
    friendcode_3ds: '',
    twitter_id: '',
    pixiv_id: ''
  }),
  methods: {
    async initEvent () {
      this.personality = config.personality
      const user = await JSON.parse(localStorage.profile)
      this.trainer_name = user.trainer_name
      this.name = user.name
      this.gender = user.gender
      this.character = user.character
      this.personal = user.personal
      this.friendcode_switch = user.friendcode_switch
      this.friendcode_pokemongo = user.friendcode_pokemongo
      this.friendcode_3ds = user.friendcode_3ds
      this.twitter_id = user.twitter_id
      this.pixiv_id = user.pixiv_id
    }
  }
}
</script>

<style lang="css" scoped>
</style>
