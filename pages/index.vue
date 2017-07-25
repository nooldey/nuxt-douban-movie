<template>
  <div v-if="film">
    <p>热门电影榜</p>
    <dl>
      <dt>概览</dt>
      <dd>总数：{{ film.total }}</dd>
      <dd>当前页：{{ film.start }}</dd>
      <dd>当前页总数：{{ film.count }}</dd>
    </dl>
    <ul>
      <li v-for="item in film.subjects" :key="item.id">
        <h3>{{ item.title }}（原标题：{{ item.original_title }}）</h3>
        <dl>
          <dd>最高评分：{{ item.rating.max }}</dd>
          <dd>最低评分：{{ item.rating.min }}</dd>
          <dd>平均得分：{{ item.rating.average }}</dd>
          <dd>星级：{{ item.rating.stars/10 }}</dd>
          <dd>收藏人数：{{ item.collect_count }}</dd>
        </dl>
        <img :src="item.images.large">
        <p>导演：
          <template v-for="d in item.directors">{{ d.name }}</template>
        </p>
        <p> 类型：
          <template v-for="g in item.genres">{{ g }}&nbsp;</template>
        </p>
        <p>分类：{{ item.subtype }}</p>
        <p>年代：{{ item.year }}</p>
        <nuxt-link :to="'/movies/'+item.id">查看详情</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData(context) {
    let { res } = await axios.get('http://api.douban.com/v2/movie/in_theaters')
    return {
      film: res
    }
  },
  data() {
    return {
      film: {}
    }
  },
  // fetch () {},
  head() {
    return {
      title: "豆瓣电影排行版",
      meta: [
        { hid: 'keywords', name: 'keywords', content: '豆瓣电影排行版' }
      ]
    }
  },
  // layout() {},
  // transition() {},
  // scrollToTop() {},
  // validate() {},
  // middleware() {}
}
</script>
