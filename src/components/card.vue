<template>
  <div class="item-content">
    <div class="item-imgbox">
      <image class="item-img" :src="itemContent.attributes.posterImage.small" alt="" />
    </div>
    <div class="item-info">
      <div class="item-info-detail">
        <text class="title">{{getTitle(itemContent)}}</text>
      </div>
      <div>
        <text class="desc">{{getDesc(itemContent)}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['itemContent'],
    data(){
      return {

      }
    },
    methods: {
      getDesc: function(item) {
        console.log(item)
        if (item.attributes.synopsis) {
          return item.attributes.synopsis.trim();
        }
        return '...'
      },
      getTitle: function(item) {
        const titleObj = item.attributes.titles;
        if (titleObj) {
          return titleObj.en || titleObj.en_jp || titleObj.ja_jp;
        }
        return '...'
      }
    }
  }
</script>

<style lang='sass' scoped>
  $itemBgColor: #ffffff
  $itemDetailColor: #A2A2A2
  $titleColor: #2D2D2D
  $descColor: #999
  .item-content 
    flex-direction: row
    width: 710px
    background-color: $itemBgColor
  .item-imgbox 
    height: 180px
    width: 180px
    margin-right: 20px
  .item-img 
    width: 180px
    height: 180px
  .item-info 
    height: 180px
    width: 510px
    position: relative
  .item-info-detail 
    position: relative
    color: $itemDetailColor
  .title 
    lines: 1
    text-overflow: ellipsis
    font-size: 32px
    color: $titleColor
    line-height: 40px
  .desc 
    lines: 3
    text-overflow: ellipsis
    font-size: 32px
    color: $descColor
</style>