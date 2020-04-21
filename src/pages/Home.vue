<template>
  <div id="home">
    <h1>我是主页 </h1>
    <el-button>{{info}}</el-button>
  </div>
</template>

<script>
import StudyHttps from '../components/StudyHttps'

export default {
  name: 'home',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    StudyHttps.getHome()
      .then(response => {
        console.log(response)
        this.info = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
