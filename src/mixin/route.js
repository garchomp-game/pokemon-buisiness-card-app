import CardsIndex from '../pages/cards/index'
import CardsShow from '../pages/cards/show'
import MypageEdit from '../pages/mypage/edit'
import SettingIndex from '../pages/setting/index'
import Home from '../pages/Home'
import SignUp from '../SignUp'
import Login from '../Login'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    pages: {
      'CardsIndex': CardsIndex,
      'CardsShow': CardsShow,
      'MypageEdit': MypageEdit,
      'SettingIndex': SettingIndex,
      'Home': Home,
      'SignUp': SignUp,
      'Login': Login
    }
  }),
  methods: {
    ...mapMutations('navigation', [
      'push',
      'pop'
    ]),
    pushPage (page) {
      this.push(this.pages[page])
    },
    pagePop () {
      this.pop()
    },
    pageReset () {
      this.reset()
    }
  }
}
