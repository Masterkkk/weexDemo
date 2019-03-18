<template>
  <div class="button-wrapper">
      <text v-for="button in buttons"
            :key="button.color"
            v-bind:style="{backgroundColor: button.color}"
            class="button"
            @click="handleClickBtn(button)">{{button.name}}</text>
  </div>
</template>
<script>
import { createLink } from '../../utils/index'

const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')

export default {
  data () {
    return {
      buttons: [
        {
          color: '#FF6138',
          name: 'star'
        },
        {
          color: '#79BD8F',
          name: 'detail'
        }
      ]
    }
  },
  methods: {
    handleClickBtn (button) {
      console.log('page', button.name)
      storage.setItem('clickedBtnName', button.name, () => {})
      storage.setItem('clickedBtnColor', button.color, () => {})
      this.jump(button.name)
    },
    jump (pageName) {
      const url = createLink(pageName, {
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
.button {
  margin: 0 20px 20px;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
}
.button-wrapper {
  margin: 50px 0;
  width: 420px;
}
</style>
