<template>
  <div class="wrapper">
    <text class="message text" v-bind:style="{color: textColor}">你点击的按钮是：</text>
    <text class="message" v-bind:style="{color: textColor}">{{clickedBtn}}</text>
  </div>
</template>

<script>
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
const titleBar = weex.requireModule('titleBar')

export default {
  data () {
    return {
      clickedBtn: '',
      textColor: ''
    }
  },
  created () {
    if (titleBar) {
      titleBar.setTitle('按钮详情')
    }

    storage.getItem('clickedBtnName', (event) => {
      if (event.result === 'success') {
        this.clickedBtn = event.data
      } else {
        modal.toast({ message: '获取按钮名称FAIL', duration: 1 })
      }
    })
    storage.getItem('clickedBtnColor', (event) => {
      if (event.result === 'success') {
        this.textColor = event.data
      } else {
        modal.toast({ message: '获取按钮颜色FAIL', duration: 1 })
      }
    })
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.message {
  margin: 30px;
  font-size: 48px;
}
.text {
  font-size: 36px;
}
</style>
