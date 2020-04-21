<template>
  <div id="app">
    <keep-alive>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理"><Home/>
        </el-tab-pane>
        <el-tab-pane label="配置管理"><Mine/>
        </el-tab-pane>
        <el-tab-pane label="角色管理"><News/>
        </el-tab-pane>
      </el-tabs>
    </keep-alive>
  </div>
</template>

<script>
import News from './pages/News'
import Mine from './pages/Mine'
import Home from './pages/Home'

export default {
  name: 'App',
  components: {News, Mine, Home}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center
  }
</style>
