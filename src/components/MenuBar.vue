<template lang="pug">
  div
    .text-xs-right
      v-menu(offset-y)
        template(v-slot:activator='{ on }')
          v-ons-icon(
            icon="ion-navicon, material:md-menu"
            size="20px"
            v-on="on"
          )
        v-list
          v-list-tile()
            v-list-tile-title(@click="logout") ログアウト
</template>
<script scoped>
export default {
  name: 'MenuBar',
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
