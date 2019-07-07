<template lang="pug">
v-ons-page
  Navigation(centerMessage='Home')
  v-ons-list
    v-ons-list-header Trainer Name
    v-ons-list-item めきは
    v-ons-list-header Name
    v-ons-list-item
    v-ons-list-header Sex
    v-ons-list-item ♂
    v-ons-list-header Character
    v-ons-list-item のんびり
    v-ons-list-header FriendCode(PokemonGO)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(Switch)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header FriendCode(3DS)
    v-ons-list-item 1111-2222-3333-4444
    v-ons-list-header TwitterID
    v-ons-list-item
    v-ons-list-header PixivID
    v-ons-list-item
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
export default {
}
</script>

<style lang="css" scoped>
</style>
