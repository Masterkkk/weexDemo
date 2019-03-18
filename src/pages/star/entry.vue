<template>
  <div style="justify-content:center">
    <text class="label">Weex Star Count</text>
    <text class="count">{{count}}</text>
  </div>
</template>

<script>
const stream = weex.requireModule('stream')
export default {
  data () {
    return {
      count: 'fetching...'
    }
  },
  created () {
    stream.fetch({
      method: 'GET',
      type: 'json',
      url: 'https://api.github.com/repos/apache/incubator-weex'
    }, res => {
      if (res.ok) {
        this.count = res.data.stargazers_count
      } else {
        this.count = '- unknown -'
      }
    })
  }
}
</script>

<style scoped>
  .label {
    color: #666666;
    text-align: center;
    font-size: 60px;
  }
  .count {
    color: #41B883;
    text-align: center;
    font-size: 100px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
