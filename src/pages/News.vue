<template>
  <div id="news">
    <el-form class="edit-form" ref="loginForm" label-position="center">
      <el-form-item prop="itemInfo">
        <el-input type="text" auto-complete="off" placeholder="商品" v-model="itemInfo"></el-input>
        </el-form-item>
      <el-form-item prop="unitPrice">
        <el-input type="text" auto-complete="off" placeholder="价格" v-model="unitPrice"></el-input>
      </el-form-item>
      <el-form-item prop="zone">
        <el-input type="text" auto-complete="off" placeholder="描述" v-model="zone"></el-input>
      </el-form-item>
      <el-button type="success" icon="el-icon-check">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      itemInfo: '',
      unitPrice: null,
      zone: null
    }
  }
}
</script>

<style scoped>
  form.el-form.edit-form.el-form--label-center {
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%
  }
</style>
