<template>
  <div>
    <van-nav-bar fixed>
      <template #left>
        <img class="logo" src="@/assets/logo.png" alt="">
      </template>
      <template #right>
         <van-icon name="search" size="0.48rem" color="#fff" />
      </template>
    </van-nav-bar>
  <div class="main">
  <!-- 频道部分 -->
    <van-tabs v-model="active" animated  sticky
      offset-top="1.226667rem">
    <van-tab v-for="obj in userchannelList" :key="obj.id" :title="obj.name" animated>
      <ArticleList :list="articleList"></ArticleList>
    </van-tab>
    </van-tabs>
  </div>

  </div>
</template>

<script>
import { getUserChannelsAPI, getAllArticleListAPI } from '@/api'
import ArticleList from './components/ArticleList.vue'
export default {
  name: 'Home',
  components: {
    ArticleList
  },
  data () {
    return {
      active: 0,
      userchannelList: [],
      articleList: []
    }
  },
  async created () {
    const res = await getUserChannelsAPI()
    console.log(res)
    this.userchannelList = res.data.data.channels

    const res2 = await getAllArticleListAPI({
      channel_id: 0,
      timestamp: (new Date()).getTime()
    })
    console.log(res2)
    this.articleList = res2.data.data.results
  }
}
</script>

<style scoped lang="less">
.logo {
    width: 100px;
    height: 30px;
}
.main {
  padding-top: 46px;
}
</style>
