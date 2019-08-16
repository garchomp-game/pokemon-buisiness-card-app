<template lang="pug">
  v-ons-page(@init="initEvent")
    Navigation(centerMessage='編集' :pageStatus="pageStatus")
    v-ons-list
      v-ons-list-item
        v-ons-row
          v-ons-col 入力欄
          v-ons-col(width="120px")
            span 公開/非公開
            br
            span 切り替え
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="trainer_name" placeholder='Trainer Name')
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="name" placeholder='Name', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          select.select-input.custom-left-input(v-model="gender")
            option(value='' style="display: none;") gender
            option(value='♂') ♂
            option(value='♀') ♀
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          select.select-input.custom-left-input(v-model="personality")
            option(value='' style="display: none;") personality
            option(v-for="(item, key) in personality" :value="key") {{ item }}
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="friendcode_switch" placeholder='Friend Code(Switch)', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="friendcode_pokemongo" placeholder='Friend Code(Pokemon GO)', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="friendcode_3ds" placeholder='Friend Code(3DS)', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="twitter_id" placeholder='TwitterID', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-list-item
        .custom-left
          v-ons-input.custom-left-input(v-model="pixiv_id" placeholder='PixivID', modifier='material')
        .custom-right
          v-ons-switch
      v-ons-button(modifier='large',@click="pushEdit") 完了
</template>
<script>
import config from '../../const.js'
export default {
  data: () => ({
    pageStatus: 'mypageEdit',
    personality: {},
    trainer_name: '',
    name: '',
    gender: '',
    personal: '',
    character: '',
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
    },
    pushEdit () {
      var obj = {
        trainer_name: this.trainer_name,
        name: this.name,
        gender: this.gender,
        character: this.character,
        personal: this.personal,
        friendcode_switch: this.friendcode_switch,
        friendcode_pokemongo: this.friendcode_pokemongo,
        friendcode_3ds: this.friendcode_3ds,
        twitter_id: this.twitter_id,
        pixiv_id: this.pixiv_id
      }
      localStorage.profile = JSON.stringify(obj)
      console.log('pushEdit')
      this.push(this.pages['Home'])
    }
  }
}
</script>
<style lang="sass" scoped>
.custom-left
  float: left
  width: 70vw
  &-input
    width: 80%
.custom-right
  float: right
  width: 20vw
</style>
