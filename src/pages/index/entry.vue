<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <button @click="goTest">11111111111111</button>
    <Bar/>
    <Foo/>
  </div>
</template>

<script>
import { createLink } from '../../utils/index'
import Foo from '../../components/foo'
import Bar from './bar'
const navigator = weex.requireModule('navigator')

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    goTest () {
      const url = createLink('test', {
        param: 'abc'
      })
      navigator.push({
        url,
        animated: 'true'
      })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
