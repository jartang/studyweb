<template>
  <el-table :data="responseData" align="center">
    <el-table-column type="index" :index="indexMethod(1)" width="40"></el-table-column>
    <el-table-column :formatter="formatDate" prop="createDate" label="日期" width="120"></el-table-column>
    <el-table-column prop="userId" label="用户ID" width="100"></el-table-column>
    <el-table-column label="商品详情">
      <el-table-column prop="itemName" label="商品名称" width="130"></el-table-column>
      <el-table-column prop="unitPrice" label="商品单价" width="90"></el-table-column>
      <el-table-column prop="described" label="商品描述" width="150"></el-table-column>
    </el-table-column>
    <el-table-column label="操作" width="50">
      <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, responseData)" type="text" size="small">移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import StudyHttps from '../components/StudyHttps'

export default {
  methods: {
    deleteRow: (index, rows) => {
      rows.splice(index, 1)
    },
    indexMethod: index => {
      return index * 1
    },
    formatDate: (row, column) => {
      let date = new Date(parseInt(row.createDate))
      let Y = date.getFullYear() + '-'
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-'
      let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
      return Y + M + D
    }
  },
  data () {
    return {
      responseData: [],
      params: {
        appId: 1,
        appName: 'appName',
        functionCode: 'query-item-price',
        requestData: {},
        sign: 'demoData',
        timestamp: '2020-3-25 09:20:00'
      }
    }
  },
  mounted () {
    StudyHttps.getResponseDate(this.params)
      .then(response => {
        this.responseData = JSON.parse(response.data.responseData)
        console.log(this.responseData)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
