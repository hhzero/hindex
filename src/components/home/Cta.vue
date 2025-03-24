<template>
  <section class="cta section" id="cta">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">加入我们的AI学习社区</h2>
        <p class="cta-text">
          扫描下方二维码添加微信，进入我们的学习交流群，获取更多专业指导和学习资源
        </p>
        <div class="cta-wechat">
          <div class="wechat-qr">
            <!-- 这里放微信二维码图片 -->
            <div class="qr-placeholder">
              <i class="el-icon-mobile-phone"></i>
            </div>
          </div>
          <div class="wechat-info">
            <h3 class="wechat-id">微信号: zhzren123</h3>
            <p class="wechat-tip">扫码或搜索微信号添加</p>
            <ul class="wechat-benefits">
              <li><i class="el-icon-check"></i> 获取最新AI技术资讯</li>
              <li><i class="el-icon-check"></i> 加入专业学习交流群</li>
              <li><i class="el-icon-check"></i> 免费领取AI学习资料</li>
              <li><i class="el-icon-check"></i> 参与线上技术分享活动</li>
            </ul>
          </div>
        </div>
        <el-button type="primary" size="large" class="cta-button">
          立即加入 <i class="el-icon-right"></i>
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta'
}
</script>

<style lang="scss" scoped>
.cta {
  background-color: #f5f7fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://via.placeholder.com/1600x900?text=背景') center/cover no-repeat;
    opacity: 0.05;
    z-index: 0;
  }
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--primary-text-color);
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: var(--regular-text-color);
}

.cta-wechat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.wechat-qr {
  width: 200px;
  height: 200px;
  margin-right: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .qr-placeholder {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
      font-size: 64px;
      color: #409EFF;
    }
  }
}

.wechat-info {
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
}

.wechat-id {
  font-size: 1.8rem;
  font-weight: 700;
  color: #409EFF;
  margin-bottom: 10px;
}

.wechat-tip {
  color: var(--secondary-text-color);
  margin-bottom: 20px;
}

.wechat-benefits {
  list-style: none;
  padding: 0;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: var(--regular-text-color);
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    i {
      color: #67C23A;
      margin-right: 10px;
      font-weight: bold;
    }
  }
}

.cta-button {
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 600;
}
</style> 