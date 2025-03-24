<template>
  <section class="features section" id="features">
    <div class="container">
      <h2 class="section-title text-center">为什么选择AI学习中心？</h2>
      <p class="section-subtitle text-center">
        我们提供最全面、最实用的AI学习资源，帮助你快速掌握AI开发技能
      </p>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          title: '实用的AI开发教程',
          description: '从入门到精通的实用教程，手把手教你如何利用AI工具开发软件和网站',
          icon: 'el-icon-video-camera'
        },
        {
          title: '海量的学习资源',
          description: '精选的AI学习资源库，包括教程、文档、工具和最佳实践指南',
          icon: 'el-icon-collection'
        },
        {
          title: '专业的导师指导',
          description: '资深AI开发专家提供专业指导，解答疑问，分享经验',
          icon: 'el-icon-user'
        },
        {
          title: '活跃的学习社区',
          description: '加入我们的微信群，与志同道合的学习者交流，共同进步',
          icon: 'el-icon-chat-dot-round'
        },
        {
          title: '实战项目案例',
          description: '真实的AI项目案例分析，从需求到实现的全过程讲解',
          icon: 'el-icon-s-opportunity'
        },
        {
          title: '定期更新内容',
          description: '紧跟AI技术发展，定期更新最新的技术和应用案例',
          icon: 'el-icon-refresh'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  background-color: #f5f7fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .feature-icon {
      background-color: #409EFF;
      color: white;
    }
  }
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(64, 158, 255, 0.1);
  color: #409EFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s;
  
  i {
    font-size: 30px;
  }
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-text-color);
}

.feature-desc {
  color: var(--regular-text-color);
  line-height: 1.6;
}
</style> 