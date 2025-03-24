<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span class="logo-text">AI学习中心</span>
          </router-link>
        </div>
        <div class="nav-menu">
          <el-menu mode="horizontal" :router="true" default-active="/">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/tutorials">教程</el-menu-item>
            <el-menu-item index="/resources">资源</el-menu-item>
            <el-menu-item index="/community">社区</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-menu>
        </div>
        <div class="header-right">
          <el-button type="primary" round>加入社区</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  
  .container {
    height: 100%;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: #409EFF;
      margin-left: 8px;
    }
  }
  
  .nav-menu {
    flex: 1;
    display: flex;
    justify-content: center;
    
    .el-menu {
      border-bottom: none;
    }
    
    .el-menu-item {
      font-size: 16px;
    }
  }
  
  .header-right {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none !important;
  }
}
</style> 