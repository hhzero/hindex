<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="about-title">关于我们</h1>
        <p class="about-subtitle">
          了解AI学习中心的故事、使命和价值观
        </p>
      </div>
    </section>
    
    <section class="about-content section">
      <div class="container">
        <el-row :gutter="30">
          <el-col :md="16" :sm="24">
            <div class="about-main">
              <div class="about-section">
                <h2 class="section-title">我们的故事</h2>
                <div class="about-text">
                  <p>
                    AI学习中心成立于2023年，是一个致力于普及AI开发知识和技能的学习平台。我们的创始团队由一群热爱AI技术的工程师、教育工作者和产品设计师组成，他们发现随着AI技术的迅速发展，越来越多的人希望学习如何利用AI工具进行软件和网站开发，但市场上缺乏系统、易懂的学习资源。
                  </p>
                  <p>
                    基于这一发现，我们创建了AI学习中心，旨在为所有对AI开发感兴趣的人提供高质量的学习资源和交流平台，无论他们是完全的新手还是有经验的开发者，都能在这里找到适合自己的学习路径。
                  </p>
                </div>
              </div>
              
              <div class="about-section">
                <h2 class="section-title">我们的使命</h2>
                <div class="mission-box">
                  <div class="mission-icon">
                    <i class="el-icon-s-flag"></i>
                  </div>
                  <div class="mission-text">
                    <p>
                      让每个人都能轻松掌握AI开发技能，利用人工智能的力量创造价值，
                      推动AI技术的普及和应用。
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="about-section">
                <h2 class="section-title">我们的价值观</h2>
                <div class="values-grid">
                  <div class="value-card">
                    <div class="value-icon">
                      <i class="el-icon-s-opportunity"></i>
                    </div>
                    <h3 class="value-title">创新</h3>
                    <p class="value-desc">
                      拥抱最新的AI技术和教学方法，不断探索更有效的学习体验。
                    </p>
                  </div>
                  
                  <div class="value-card">
                    <div class="value-icon">
                      <i class="el-icon-s-custom"></i>
                    </div>
                    <h3 class="value-title">开放</h3>
                    <p class="value-desc">
                      建立开放包容的学习环境，欢迎各种背景的学习者加入。
                    </p>
                  </div>
                  
                  <div class="value-card">
                    <div class="value-icon">
                      <i class="el-icon-s-cooperation"></i>
                    </div>
                    <h3 class="value-title">协作</h3>
                    <p class="value-desc">
                      促进学习者之间的互助和分享，共同成长。
                    </p>
                  </div>
                  
                  <div class="value-card">
                    <div class="value-icon">
                      <i class="el-icon-s-management"></i>
                    </div>
                    <h3 class="value-title">实用</h3>
                    <p class="value-desc">
                      注重实际应用，提供真正有价值的学习内容和资源。
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="about-section">
                <h2 class="section-title">我们提供什么</h2>
                <div class="services-list">
                  <div class="service-item">
                    <div class="service-icon">
                      <i class="el-icon-s-home"></i>
                    </div>
                    <div class="service-content">
                      <h3 class="service-title">AI开发教程</h3>
                      <p class="service-desc">
                        从入门到进阶的系统教程，涵盖AI网站开发、软件开发、ChatGPT应用等多个领域。
                      </p>
                    </div>
                  </div>
                  
                  <div class="service-item">
                    <div class="service-icon">
                      <i class="el-icon-s-grid"></i>
                    </div>
                    <div class="service-content">
                      <h3 class="service-title">学习资源</h3>
                      <p class="service-desc">
                        精选的AI学习资源，包括电子书、视频教程、工具推荐和技术文章。
                      </p>
                    </div>
                  </div>
                  
                  <div class="service-item">
                    <div class="service-icon">
                      <i class="el-icon-s-promotion"></i>
                    </div>
                    <div class="service-content">
                      <h3 class="service-title">交流社区</h3>
                      <p class="service-desc">
                        活跃的学习交流群，与志同道合的学习者分享经验，互相帮助。
                      </p>
                    </div>
                  </div>
                  
                  <div class="service-item">
                    <div class="service-icon">
                      <i class="el-icon-s-marketing"></i>
                    </div>
                    <div class="service-content">
                      <h3 class="service-title">线上活动</h3>
                      <p class="service-desc">
                        定期举办线上分享会、研讨会和实战工作坊，深入学习AI开发技能。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          
          <el-col :md="8" :sm="24">
            <div class="about-sidebar">
              <div class="contact-box">
                <h3 class="sidebar-title">联系我们</h3>
                <div class="contact-info">
                  <div class="contact-item">
                    <i class="el-icon-chat-dot-square"></i>
                    <div class="contact-detail">
                      <span class="contact-label">微信</span>
                      <span class="contact-value">zhzren123</span>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <i class="el-icon-message"></i>
                    <div class="contact-detail">
                      <span class="contact-label">邮箱</span>
                      <span class="contact-value">contact@ailearning.com</span>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <i class="el-icon-s-platform"></i>
                    <div class="contact-detail">
                      <span class="contact-label">官方网站</span>
                      <span class="contact-value">www.ailearning.com</span>
                    </div>
                  </div>
                </div>
                
                <div class="contact-qrcode">
                  <div class="qrcode-placeholder">
                    <i class="el-icon-mobile-phone"></i>
                    <p>扫码添加微信</p>
                  </div>
                </div>
                
                <div class="contact-buttons">
                  <el-button type="primary" icon="el-icon-chat-dot-round">添加微信</el-button>
                  <el-button icon="el-icon-message">发送邮件</el-button>
                </div>
              </div>
              
              <div class="team-box">
                <h3 class="sidebar-title">核心团队</h3>
                <div class="team-list">
                  <div class="team-member">
                    <div class="member-avatar">
                      <img src="https://via.placeholder.com/100x100?text=张" alt="张教授">
                    </div>
                    <div class="member-info">
                      <h4 class="member-name">张教授</h4>
                      <p class="member-title">创始人 & AI教育专家</p>
                      <p class="member-desc">
                        资深AI研究者，拥有10年教学经验，致力于将复杂的AI概念简化并普及
                      </p>
                    </div>
                  </div>
                  
                  <div class="team-member">
                    <div class="member-avatar">
                      <img src="https://via.placeholder.com/100x100?text=李" alt="李工程师">
                    </div>
                    <div class="member-info">
                      <h4 class="member-name">李工程师</h4>
                      <p class="member-title">技术总监</p>
                      <p class="member-desc">
                        全栈开发工程师，AI应用专家，曾参与多个大型AI项目的开发
                      </p>
                    </div>
                  </div>
                  
                  <div class="team-member">
                    <div class="member-avatar">
                      <img src="https://via.placeholder.com/100x100?text=王" alt="王设计师">
                    </div>
                    <div class="member-info">
                      <h4 class="member-name">王设计师</h4>
                      <p class="member-title">产品设计负责人</p>
                      <p class="member-desc">
                        用户体验专家，专注于设计直观易用的学习产品和界面
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    
    <section class="join-team section">
      <div class="container">
        <div class="join-box">
          <h2 class="join-title">加入我们</h2>
          <p class="join-text">
            我们正在寻找对AI教育充满热情的合作伙伴，一起推动AI技术的普及和应用。如果你对我们的使命感兴趣，欢迎联系我们！
          </p>
          <el-button type="primary" size="large" class="join-button">
            联系我们 <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about-hero {
  background-color: #F56C6C;
  padding: 60px 0;
  color: white;
  
  .about-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .about-subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    opacity: 0.9;
  }
}

.about-content {
  background-color: #f5f7fa;
}

.about-main {
  .about-section {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--primary-text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #F56C6C;
  }
}

.about-text {
  color: var(--regular-text-color);
  line-height: 1.8;
  
  p {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.mission-box {
  display: flex;
  align-items: center;
  background-color: rgba(245, 108, 108, 0.1);
  border-radius: 8px;
  padding: 25px;
  
  .mission-icon {
    width: 60px;
    height: 60px;
    background-color: #F56C6C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    
    i {
      font-size: 30px;
      color: white;
    }
  }
  
  .mission-text {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.6;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.value-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  
  .value-icon {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    i {
      font-size: 30px;
      color: #F56C6C;
    }
  }
  
  .value-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--primary-text-color);
  }
  
  .value-desc {
    color: var(--regular-text-color);
    line-height: 1.6;
  }
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item {
  display: flex;
  align-items: flex-start;
  
  .service-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(245, 108, 108, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    
    i {
      font-size: 24px;
      color: #F56C6C;
    }
  }
  
  .service-content {
    flex: 1;
  }
  
  .service-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--primary-text-color);
  }
  
  .service-desc {
    color: var(--regular-text-color);
    line-height: 1.6;
  }
}

.about-sidebar {
  > div {
    background-color: white;
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}

.sidebar-title {
  font-size: 1.4rem;
  margin-bottom: 25px;
  color: var(--primary-text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #F56C6C;
  }
}

.contact-info {
  margin-bottom: 25px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  i {
    font-size: 24px;
    color: #F56C6C;
    margin-right: 15px;
  }
  
  .contact-detail {
    display: flex;
    flex-direction: column;
  }
  
  .contact-label {
    font-size: 0.9rem;
    color: var(--secondary-text-color);
    margin-bottom: 3px;
  }
  
  .contact-value {
    font-weight: 500;
    color: var(--primary-text-color);
  }
}

.contact-qrcode {
  margin-bottom: 25px;
  
  .qrcode-placeholder {
    width: 180px;
    height: 180px;
    background-color: #f9f9f9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 1px dashed #ddd;
    
    i {
      font-size: 60px;
      color: #F56C6C;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 14px;
      color: var(--secondary-text-color);
    }
  }
}

.contact-buttons {
  display: flex;
  gap: 15px;
}

.team-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.team-member {
  display: flex;
  align-items: flex-start;
  
  .member-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .member-info {
    flex: 1;
  }
  
  .member-name {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--primary-text-color);
  }
  
  .member-title {
    font-size: 0.9rem;
    color: #F56C6C;
    margin-bottom: 10px;
  }
  
  .member-desc {
    font-size: 0.9rem;
    color: var(--regular-text-color);
    line-height: 1.6;
  }
}

.join-team {
  background-color: white;
}

.join-box {
  background-color: #F56C6C;
  border-radius: 10px;
  padding: 40px;
  color: white;
  text-align: center;
  
  .join-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .join-text {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .join-button {
    background-color: white;
    color: #F56C6C;
    border-color: white;
    font-weight: 600;
    padding: 12px 30px;
  }
}
</style> 