<<template>
  <div>{{ detail }}</div>
</template>

<script>
// import axios from 'axios'

export default {
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    // async asyncData(context) {
    //     const id = context.params.id;
    //     let { res } = await axios.get('http://api.douban.com/v2/movie/subject/1764796')
    //     return {
    //         detail: res
    //     }
    // }
}
</script>
