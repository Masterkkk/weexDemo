<template>
  <div id="home">
    <wxc-tab-bar 
      :tab-titles="tabTitles"
      :tab-styles="tabStyles"
      title-type="icon"
      @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 第一个页面内容-->
      <div class="item-container"><text>首页</text></div>

      <!-- 第二个页面内容-->
      <div class="item-container"><text>特别推荐</text></div>

      <!-- 第三个页面内容-->
      <div class="item-container"><text>消息中心</text></div>

      <!-- 第四个页面内容-->
      <div class="item-container">
        <text>我的主页</text>
        <image style="width:500px;height:500px" :src="testIcon"></image>
      </div>
    </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcTabBar, Utils } from 'weex-ui';
import { createLink, getImg } from '../../utils/index'
const navigator = weex.requireModule('navigator')

export default {
  name: 'App',
  components: {
    WxcTabBar
  },
  data () {
    return {
      testIcon: getImg('icon_boss.png'),
      contentStyle: {

      },
      tabTitles: [
        {
          title: '首页',
          icon: getImg('home.png'),
          activeIcon: getImg('home_active.png')
        },
        {
          title: '门诊',
          icon: getImg('clinic.png'),
          activeIcon: getImg('clinic_active.png')
        },
        {
          title: '商城',
          icon: getImg('shop.png'),
          activeIcon: getImg('shop_active.png'),
          badge: 5
        },
        {
          title: '我的',
          icon: getImg('my.png'),    //https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png
          activeIcon: getImg('my_active.png'),
          dot: true
        }
      ],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#959CA9',
        activeTitleColor: '#0FD1C2',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 141,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
      },
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
    },
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page;
      console.log(index);
    }
  }
}
</script>

<style lang='sass' scoped>
  $pageColor: #ffffff
  #home
    .item-container 
      width: 750px
      background-color: $pageColor
      align-items: center
      justify-content: center
</style>
