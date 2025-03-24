<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">AI学习中心</h3>
          <p class="footer-desc">帮助你掌握AI技术，开发软件和网站的最佳学习平台</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="el-icon-s-platform"></i></a>
            <a href="#" class="social-link"><i class="el-icon-s-promotion"></i></a>
            <a href="#" class="social-link"><i class="el-icon-s-cooperation"></i></a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/tutorials">教程</router-link></li>
            <li><router-link to="/resources">资源</router-link></li>
            <li><router-link to="/community">社区</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">学习资源</h4>
          <ul class="footer-links">
            <li><a href="#">初学者指南</a></li>
            <li><a href="#">视频教程</a></li>
            <li><a href="#">课程推荐</a></li>
            <li><a href="#">常见问题</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">联系我们</h4>
          <div class="contact-info">
            <p><i class="el-icon-chat-dot-square"></i> 微信号：zhzren123</p>
            <p><i class="el-icon-message"></i> 邮箱：contact@ailearning.com</p>
            <p><i class="el-icon-user"></i> 交流群：添加微信进群</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} AI学习中心. 保留所有权利.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f5f7fa;
  padding: 40px 0 20px;
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex: 0 0 50%;
    }
    
    @media (max-width: 576px) {
      flex: 0 0 100%;
    }
  }
  
  .footer-title {
    font-size: 1.5rem;
    color: #409EFF;
    margin-bottom: 15px;
  }
  
  .footer-subtitle {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #303133;
  }
  
  .footer-desc {
    color: #606266;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
    
    .social-link {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #409EFF;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s;
      
      &:hover {
        background-color: #66b1ff;
        transform: translateY(-3px);
      }
      
      i {
        font-size: 18px;
      }
    }
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: #606266;
        text-decoration: none;
        transition: color 0.2s;
        
        &:hover {
          color: #409EFF;
        }
      }
    }
  }
  
  .contact-info {
    p {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #606266;
      
      i {
        color: #409EFF;
        margin-right: 10px;
      }
    }
  }
  
  .footer-bottom {
    border-top: 1px solid #e4e7ed;
    padding-top: 20px;
    text-align: center;
    
    p {
      color: #909399;
      font-size: 14px;
    }
  }
}
</style> 