<template lang="pug">
  v-ons-page
    Navigation(centerMessage='トレーナーカードリスト' :pageStatus="pageStatus")
    .title.cardsIndex__title トレーナーカード一覧
    v-ons-button(@click="pushPage('CardsTrade')") 名刺カード交換
    v-ons-card(
      v-for="(item, index) in cardsData"
      :key="index"
    )
      .title トレーナー名: {{ item.name }}
      .content
        v-ons-list
          v-ons-list-item 性別: {{ sex(item.sex) }}
          v-ons-list-item 性格: {{ character(item.character) }}
</template>
<script>
export default {
  data: () => ({
    pageStatus: 'cardIndex',
    cardsData: []
  }),
  async created () {
    // this.cardsData = await axios.get()
    this.cardsData = [
      {
        name: 'たく',
        sex: 1,
        character: 1
      }
    ]
  },
  methods: {
    sex (index) {
      let sexList = {
        1: '♂',
        2: '♀'
      }
      return sexList[index]
    },
    character (index) {
      let characterList = {
        1: '性格１'
      }
      return characterList[index]
    }
  }
}
</script>
<style lang="sass" scoped>
  .cardsIndex
    &__title
      font-weight: bold
      font-size: 24px
      text-align: center
</style>
