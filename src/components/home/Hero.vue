<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">用AI加速你的<span class="text-highlight">开发之旅</span></h1>
          <p class="hero-subtitle">
            学习如何利用人工智能技术开发软件和网站，提高10倍效率，让创意快速变为现实
          </p>
          <div class="hero-buttons">
            <el-button type="primary" size="large" class="start-button">
              开始学习 <i class="el-icon-arrow-right"></i>
            </el-button>
            <el-button size="large" class="join-button">
              加入社区 <i class="el-icon-s-custom"></i>
            </el-button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">1000+</span>
              <span class="stat-text">学习资源</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5000+</span>
              <span class="stat-text">活跃用户</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-text">实战项目</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://via.placeholder.com/600x400?text=AI学习中心" alt="AI学习中心" />
        </div>
      </div>
    </div>
    <div class="hero-bottom-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path fill="#f5f7fa" fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,42.7C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 80px 0 40px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--primary-text-color);
  
  .text-highlight {
    color: #409EFF;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(64, 158, 255, 0.2);
      z-index: -1;
    }
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--regular-text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 90%;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 2.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  .start-button {
    padding: 12px 24px;
    font-weight: 600;
  }
  
  .join-button {
    padding: 12px 24px;
    font-weight: 600;
  }
}

.hero-stats {
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    
    .stat-number {
      font-size: 1.8rem;
      font-weight: 700;
      color: #409EFF;
    }
    
    .stat-text {
      font-size: 0.9rem;
      color: var(--regular-text-color);
    }
  }
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-10px);
    }
  }
}

.hero-bottom-wave {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  
  svg {
    display: block;
    width: 100%;
    height: 50px;
  }
}
</style> 