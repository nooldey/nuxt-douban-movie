<template>
  <div>
      <h3>{{ news.title }}</h3>
      <p>
          来源：{{ news.source }}
          回复：{{ news.reply_count }}
          编辑时间：{{ n.edit_time }}
      </p>
      <img :src="news.top_image">
      <article v-html="news.content"></article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    validate({ req,params }) {
        return /^\d+$/.test(params.id)
    },
    asyncData({params}) {
        return axios.post('http://api.dagoogle.cn/news/single-news', {
            news_id: params.id,
            tableNum: 1
        }).then((res) => {
            return {
                news: res.data.data
            }
        })
    }
}
</script>
