<template>
  <div id="app">
    <el-container>
      <el-header height="60px">
        <app-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="120px">
        <app-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Sans SC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
}

.el-footer {
  padding: 20px 0;
  background-color: #f5f7fa;
}

.el-main {
  padding: 0;
  min-height: calc(100vh - 180px);
}
</style> 