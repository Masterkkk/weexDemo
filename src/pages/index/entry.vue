<template>
  <div id="home">
    <wxc-tab-bar 
      :tab-titles="tabTitles"
      :tab-styles="tabStyles"
      title-type="icon"
      @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 第一个页面内容-->
      <div class="item-container" :style="contentStyle">
        <!-- 首页头部区域 -->
        <div class="home-head mb17">
          <div class="home-head-sec1">
            <div class="home-head-icon">
              <image :src="headIcon" style="width:180px;height:180px"></image>
              <text class="name">奥利</text>
            </div>
            <div class="home-head-name">
              <div>
                <wxc-cell 
                  title="奥利，早上好"
                  desc="很荣幸为您服务"
                  :has-arrow="true"
                  @wxcCellClicked="wxcCellClicked"
                  :cell-style="cellStyle"
                  :has-top-border="false"
                  :has-bottom-border="false"></wxc-cell>
              </div>
              <div class="head-icon-group">
                <div class="head-contact head-icon">
                  <image :src="iconGroup.iconPhone" style="width:56px;height:56px"></image>
                  <text class="info-text">联系我</text>
                </div>
                <div class="head-service-phone head-icon">
                  <image :src="iconGroup.iconService" style="width:56px;height:56px"></image>
                  <text class="info-text">400热线</text>
                </div>
                <div class="head-service-online head-icon">
                  <image :src="iconGroup.iconMessage" style="width:56px;height:56px"></image>
                  <text class="info-text">线上客服</text>
                </div>
              </div>
            </div>
          </div>
          <div class="home-head-sec1_foot">
            <wxc-cell 
              :has-arrow="true"
              :cell-style="footStyle"
              @wxcCellClicked="wxcCellClicked"
              :has-top-border="false">
              <text slot="title" style="color: #5387D9">已收到您诊所的预约，我正火速赶来</text>
            </wxc-cell>
          </div>
        </div>
        <!-- 首页三块功能区 -->
        <div class="home-service mb17">
          <div class="home-service_content">
            <image :src="iconGroup2.iconWatch" style="width:102px;height:94px"></image>
            <text class="info-text">预约检验</text>
          </div>
          <div class="home-service_content">
            <image :src="iconGroup2.iconReport" style="width:102px;height:94px"></image>
            <text class="info-text">报告解读</text>
          </div>
          <div class="home-service_content">
            <image :src="iconGroup2.iconPay" style="width:102px;height:94px"></image>
            <text class="info-text">检验费支付</text>
          </div>
        </div>
        <!-- 首页消息通知区 -->
        <div class="home-message">
          <wxc-cell 
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked"
              :has-bottom-border="false"
              :has-top-border="false">
              <image :src="iconMsg" style="width:90px;height:80px" slot="label"></image>
              <div class="msg-list" slot="title">
                <div class="msg-item" v-for="(item,index) in msgList" :key="index">
                  <text class="msg-content">{{item.content}}</text><text class="msg-time">{{item.time}}</text>
                </div>
              </div>
            </wxc-cell>
        </div>
        <!-- 首页广告区 -->
        <div class="home-advertisement mt30">
          <adver-card>

          </adver-card>
          <adver-card>
            
          </adver-card>
        </div>
      </div>

      <!-- 第二个页面内容-->
      <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>

      <!-- 第三个页面内容-->
      <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

      <!-- 第四个页面内容-->
      <div class="item-container" :style="contentStyle">
        <text>我的主页</text>
        <image style="width:500px;height:500px" :src="testIcon"></image>
      </div>
    </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcCell, WxcTabBar, Utils } from 'weex-ui';
import { createLink, getImg } from '../../utils/index'
import AdverCard from '../../components/advertisement'
const navigator = weex.requireModule('navigator')

export default {
  name: 'App',
  components: {
    WxcTabBar,
    WxcCell,
    AdverCard
  },
  data () {
    return {
      testIcon: getImg('icon_boss.png'),
      headIcon: getImg('user_icon.png'),
      iconMsg: getImg('show_msg.png'),
      contentStyle: '',
      iconGroup: {
        iconPhone: getImg('phone.png'),
        iconService: getImg('service.png'),
        iconMessage: getImg('message.png'),
      },
      iconGroup2: {
        iconWatch: getImg('watch.png'),
        iconReport: getImg('report.png'),
        iconPay: getImg('pay.png')
      },
      cellStyle: {
        height: '100px'
      },
      footStyle: {
        backgroundColor: '#EFF5FF',
        height: '64px',
        width: '664px'
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
      msgList: [{
        content: '您的医师责任险购买成功',
        time: '10分钟前'
      },{
        content: '您的检测预约成功',
        time: '2天前'
      }],
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight();
    const { tabStyles } = this;
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
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
    },
    wxcCellClicked(){
      console.log('点击姓名')
    }
  }
}
</script>

<style lang='sass' scoped>
  $pageColor: #ffffff
  $footColor: #5387D9
  #home
    background-color: #F8F8F8
    .item-container 
      width: 750px
      overflow: scroll
      .mb17
        margin-bottom: 17px
      .mb30
        margin-bottom: 30px
      .mt30
        margin-top: 30px
      .home-head
        height: 441px
        background-color: $pageColor
      .home-head-sec1_foot
        margin: 42px auto
        .cell-content
          font-size: 20px
      .home-head-sec1
        width: 100%
        display: flex
        flex-direction: row
        justify-content: space-around
        padding-top: 50px
        .home-head-icon
          flex: 1
          align-items: center
          .name
            font-size: 46px
        .home-head-name
          flex: 2
        .head-icon-group
          margin-top: 42px
          display: flex
          flex-direction: row
          justify-content: space-around
          .info-text
            color: #A3A3A3
          div
            align-items: center
      .home-service
        height: 266px
        background-color: $pageColor
        display: flex
        flex-direction: row
        justify-content: space-around
        padding: 35px 10px 0
        .home-service_content
          padding-top: 32px
          align-items: center
          width: 215px
          height: 195px
          border-radius: 6px
          border: 1px solid rgba(83,135,217,0.2)
          .info-text
            color: #5387D9
      .home-message
        height: 133px
        background-color: $pageColor
        .cell-indent
          padding-bottom: 0
          padding-top: 22px
        .msg-item
          padding-left: 40px
          display: flex
          flex-direction: row
          font-size: 28px
          .msg-content
            margin-right: 19px
          .msg-time
            color: #999999
</style>
