<template>
  <div id="pageThird">
    <scroller class="scroller">
      <div class="item" v-for="item in items" :key="item.id">
        <item-card :itemContent="item"></item-card>
      </div>
      <div class="loadingbox">
        <image class="loading" src="https://img.alicdn.com/tfs/TB1CWnby7yWBuNjy0FpXXassXXa-32-32.gif" />
      </div>
    </scroller>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom') || {};
  const stream = weex.requireModule('stream') || {};
  const modal = weex.requireModule('modal') || {};
  const API = 'https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&sort=-userCount&page%5Blimit%5D=20'
  import itemCard from '@/components/card'
  export default {
    components: {
      itemCard
    },
    data(){
      return {
        items: [],
        firstId: 1
      }
    },
    created: function() {
      const self = this;
      stream.fetch({
        method: 'GET',
        url: API,
        type:'json'
      }, function(res) {
        console.log(res)
        if(!res.ok){
          modal.toast({
            message: 'Network Error!',
            duration: 3
          });
        }else{
          self.firstId = res.data.data[0].id;
          self.items = self.items.concat(res.data.data);
        }
      });
    },
    methods: {
      onloadmore: function (e) {
        const self = this;
        const offset = this.items.length;
        
        stream.fetch({
          method: 'GET',
          url: API + `&page%5Boffset%5D=${offset}`,
          type:'json'
        }, function(res) {
          if(!res.ok){
            modal.toast({
              message: 'Network Error!',
              duration: 3
            });
          }else{
            self.items = self.items.concat(res.data.data);
          }
        });
      },
    }
  }
</script>

<style lang='sass' scoped>
  #pageThird 
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
  .scroller 
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 9
  .page-title-box 
    padding: 20px
    border-bottom-width: 1px
    border-bottom-style: solid
    border-bottom-color: #efefef
  .page-title 
    text-align: center
    font-size: 60px
  .item 
    padding: 20px
    height: 220px
    border-bottom-width: 1px
    border-bottom-style: solid
    border-bottom-color: #efefef
  .detail-info 
    margin-top: 15px
  .up 
    width: 70px
    height: 70px
    position: fixed
    right: 20px
    bottom: 20px
    z-index: 999
  .img 
    width: 70px
    height: 70px
  .loadingbox 
    align-items: center
    padding: 20px
    height: 80px
  .loading 
    height: 40px
    width: 40px
</style>
