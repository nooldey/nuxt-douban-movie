<template>
    <ul>
        <li v-for="n in news" :key="n.reply_count">
            <nuxt-link :to="'/item/'+n.news_id">
                <h3>{{ n.title }}</h3>
            </nuxt-link>
            <p>
                来源：{{ n.source }}
                回复：{{ n.reply_count }}
                编辑时间：{{ n.edit_time }}
            </p>
            <article>{{ n.digest }}</article>
            <img :src="n.top_image">
        </li>
    </ul>
</template>

<script>
import axios from 'axios'

export default {

    asyncData() {
        return axios.post('http://api.dagoogle.cn/news/get-news', {
            tableNum: 1,
            pagesize: 10
        }).then((res) => {
            return {
                news: res.data.data
            }
        })
    }
}
</script>
