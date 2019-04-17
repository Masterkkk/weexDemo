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
        <div class="home-advertisement mt30" v-for="(item,index) in adverList" :key="index">
          <adver-card
            :adverItem="item">

          </adver-card>
        </div>
      </div>

      <!-- 第二个页面内容-->
      <div class="item-container white-page" :style="contentStyle">
        <div class="sec-page_head">
          <div class="clinic-info">
            <text class="clinic-name">{{clinicInfo.name}}</text>
            <wxc-cell 
              :cell-style="infoStyle"
              :has-arrow="false"
              :has-top-border="false"
              :has-bottom-border="false"
              :auto-accessible="false">
              <image :src="addressIcon" slot="label" style="width:35px;height:35px"></image>
              <text class="address" slot="title">{{clinicInfo.address}}</text>
            </wxc-cell>
            <div class="doc-list">
              <div class="doc-list_item" v-for="(item,index) in clinicInfo.docList" :key="index">
                <image :src="item.img" style="width:104px;height:104px;border-radius:8px;"></image>
                <text class="doc-name">{{item.name}}</text>
              </div>
            </div>
            <div class="report-content">
              <text class="report-title">报告处理</text>
              <div class="report-item">
                <div class="report-item_transport">
                  <image :src="reportIcon.car" style="width:64px;height:64px"></image>
                  <text class="report-item_title">运输中</text>
                </div>
                <div class="report-item_microscope">
                  <image :src="reportIcon.microscope" style="width:64px;height:64px"></image>
                  <text class="report-item_title">检验中</text>
                </div>
                <div class="report-item_print">
                  <image :src="reportIcon.print" style="width:64px;height:64px"></image>
                  <text class="report-item_title">报告</text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sec-page_content">
          <text style="fontSize: 26px;color: #7D7D91;margin-bottom: 21px;">顾客</text>
          <wxc-cell 
            v-for="(item,index) in customer"
            :key="index"
            :cell-style="infoStyle"
            :has-arrow="true"
            :has-top-border="false"
            :has-bottom-border="false"
            :auto-accessible="false">
            <image :src="item.img" slot="label" style="width:100px;height:100px;border-radius:10px"></image>
            <text class="customer-name" slot="title">{{item.name}}</text>
          </wxc-cell>
        </div>
      </div>

      <!-- 第三个页面内容-->
      <div class="item-container white-page" :style="contentStyle">
        <page-third></page-third>
      </div>

      <!-- 第四个页面内容-->
      <div class="item-container white-page" :style="contentStyle">
        <wxc-minibar 
          title="我的"
          background-color="#ffffff"
          text-color="#333333"
          left-button=""
          @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
          @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
        <!-- 我的头部 -->
        <div class="my-head row">
          <image :src="myInfo.img" style="width:210px;height:210px;border-radius:15px"></image>
          <div class="my-head_info">
            <text style="font-size:26px;color:#7D7D91">医生</text>
            <text style="font-size:26px;color:#7D7D91;margin-top:60px">{{myInfo.address}}</text>
          </div>
        </div>
        <!-- 余额积分显示区 -->
        <div class="my-balance">
          <text style="font-size:30px;color:#0FD1C2;padding-left:50px;padding-bottom:15px;border-bottom:1px solid #E6EBF5;">会员信息</text>
          <div class="my-balance_info row align-center">
            <div class="my-balance_point fx1 align-center">
              <text class="my-balance_title">积分</text>
              <div class="my-point_content row align-center">
                <image :src="balanceIcon" style="width:32px;height:32px;margin-right:20px"></image>
                <text class="my-balance_num" style="margin-right:15px">{{myInfo.point}}</text>
                <wxc-button 
                  text="去赚积分"
                  type="white"
                  :btnStyle="pointStyle"
                  :textStyle="pointText"
                  @wxcButtonClicked="getMorePoint" size="small"></wxc-button>
              </div>
            </div>
            <div class="my-balance_count fx1 align-center">
              <text class="my-balance_title">余额</text>
              <div class="my-balance_content row align-center">
                <image :src="balanceIcon2" style="width:32px;height:32px;margin-right:20px"></image>
                <text class="my-balance_num">{{myInfo.balance}}</text>
              </div>
            </div>
          </div>
        </div>
        <!-- 订单区域 -->
        <div class="my-orders">
          <div class="my-order_title row">
            <text>我的订单</text>
            <text>查看全部订单</text>
          </div>
          <div class="my-order_content row align-center">
            <div class="my-order_item1 fx1 align-center">
              <image :src="orderIcon.walletIcon" style="width:47px;height:41px"></image>
              <text class="my-order_item_title">待付款</text>
            </div>
            <div class="my-order_item2 fx1 align-center">
              <image :src="orderIcon.shoppingIcon" style="width:47px;height:41px"></image>
              <text class="my-order_item_title">待发货</text>
            </div>
            <div class="my-order_item3 fx1 align-center">
              <image :src="orderIcon.courierIcon" style="width:47px;height:41px"></image>
              <text class="my-order_item_title">待收货</text>
            </div>
            <div class="my-order_item4 fx1 align-center">
              <image :src="orderIcon.packageIcon" style="width:47px;height:41px"></image>
              <text class="my-order_item_title">已完成</text>
            </div>            
          </div>
        </div>
      </div>
    </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcCell, WxcTabBar, Utils, WxcMinibar, WxcButton } from 'weex-ui';
import { createLink, getImg } from '../../utils/index'
import AdverCard from '../../components/advertisement'
import PageThird from './pageThird'
const navigator = weex.requireModule('navigator')

export default {
  name: 'App',
  components: {
    WxcTabBar,
    WxcCell,
    AdverCard,
    WxcMinibar,
    WxcButton,
    PageThird
  },
  data () {
    return {
      testIcon: getImg('icon_boss.png'),
      headIcon: getImg('user_icon.png'),
      iconMsg: getImg('show_msg.png'),
      addressIcon: getImg('address.png'),
      balanceIcon: getImg('balance_icon.png'),
      balanceIcon2: getImg('balance_icon2.png'),
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
      reportIcon: {
        car: getImg('car.png'),
        microscope: getImg('microscope.png'),
        print: getImg('print.png')
      },
      orderIcon: {
        walletIcon: getImg('wallet.png'),
        shoppingIcon: getImg('shopping_cart.png'),
        courierIcon: getImg('courier.png'),
        packageIcon: getImg('package.png'),
      },
      adverList: [
        {
          imgUrl: 'http://static.ydcss.com/uploads/ydui/3.jpg',
          title: '增值服务服务',
          content: '更优质·更安心',
          peopleNum: '666'
        },{
          imgUrl: 'http://static.ydcss.com/uploads/ydui/3.jpg',
          title: '增值服务服务',
          content: '更优质·更安心',
          peopleNum: '666'
        }
      ],
      cellStyle: {
        height: '100px'
      },
      footStyle: {
        backgroundColor: '#EFF5FF',
        height: '64px',
        width: '664px'
      },
      infoStyle: {
        background: 'none',
        paddingLeft: '0',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      pointStyle: {
        borderColor: '#FFB400',
        borderWidth: '1px',
        width: '140px'
      },
      pointText: {
        color: '#FFB400'
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
          title: '娱乐',
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
        iconWidth: 40,
        iconHeight: 40,
        width: 160,
        height: 100,
        fontSize: 21,
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
      clinicInfo: {
        name: '皮皮诊所',
        address: '厦门湖里区',
        docList: [{
          img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
          name: '皮皮'
        },{
          img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
          name: '皮皮'
        },{
          img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
          name: '皮皮'
        },{
          img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
          name: '皮皮'
        }]
      },
      customer: [{
        img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
        name: '瓜皮'
      },{
        img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
        name: '皮皮虾'
      }],
      myInfo: {
        img: 'https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg',
        name: '皮皮',
        balance: '666',
        point: '123',
        address: '厦门湖里区',
      }
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
    },
    // 头部导航左边按钮点击
    minibarLeftButtonClick(){
      console.log('点击左边按钮');
    },
    // 头部导航右边按钮点击
    minibarRightButtonClick(){
      console.log('点击右边按钮');
    },
    // 赚积分
    getMorePoint(){
      console.log('赚积分');
    }
  }
}
</script>

<style lang='sass' scoped>
  $pageColor: #ffffff
  $footColor: #5387D9
  #home
    background-color: #F8F8F8
    .row
      flex-direction: row
    .align-center
      align-items: center
    .fx1
      flex: 1
    .white-page
      background-color: #ffffff
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
    
    .sec-page_head
      position: relative
      height: 500px
      background: linear-gradient(180deg,rgba(67,130,154,1) 0%,rgba(130,174,186,1) 100%)
      .clinic-info
        padding-left: 50px
        padding-top: 50px
        .clinic-name
          font-size: 44px
          color: #ffffff
          font-weight: bold
        .address
          font-size: 26px
          color: #ffffff
          margin-left: 5px
        .doc-list
          flex-direction: row
          overflow: scroll
          margin-top: 40px
          .doc-list_item
            flex-direction: row
            align-items: center
            margin-right: 30px
            .doc-name
              font-size: 26px
              color: #ffffff
              margin-left: 20px
        .report-content
          position: absolute
          bottom: -340px
          left: 30px
          background-color: #ffffff
          width: 690px
          height: 276px
          border-radius: 15px
          border: 1px solid rgba(20,32,64,0.1)
          .report-title
            height: 60px
            font-size: 26px
            color: #7D7D91
            margin-top: 20px
            padding-left: 20px
            border-bottom: 1px solid #D6DAE3
          .report-item
            flex-direction: row
            align-items: center
            justify-content: space-around
            height: 200px
            .report-item_transport,.report-item_microscope,.report-item_print
              flex: 1
              align-items: center
            .report-item_title
              font-size: 26px
              color: #7D7D91
              margin-top: 10px
    .sec-page_content
      padding-top: 176px    
      padding-left: 50px
      .customer-name
        margin-left: 21px
        font-size: 30px
    .my-head
      padding-left: 50px
      padding-top: 30px
      padding-bottom: 30px
      .my-head_info
        margin-left: 30px
    .my-balance
      .my-balance_title
        font-size: 26px
        color: #2E2E40
        text-align: center
        margin-bottom: 20px
      .my-balance_num
        font-size: 70px
        font-weight: bold
      .my-balance_info
        height: 250px
        justify-content: space-around
    .my-orders
      margin: 0 30px 
      border: 1px solid rgba(20,32,64,0.07)
      border-radius: 18px
      .my-order_title
        padding: 18px
        border-bottom: 1px solid #D6DAE3
        justify-content: space-between
        p
          font-size: 26px 
          color: #7D7D91
      .my-order_content
        height: 195px
        .my-order_item_title
          font-size: 30px 
          color: #7D7D91
          margin-top: 14px
</style>
