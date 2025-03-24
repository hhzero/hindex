<template>
  <div class="resources-page">
    <section class="resource-hero">
      <div class="container">
        <h1 class="resource-title">AI学习资源中心</h1>
        <p class="resource-subtitle">
          收集和整理最实用的AI学习资源，助你快速掌握AI开发技能
        </p>
      </div>
    </section>
    
    <section class="resources-content section">
      <div class="container">
        <el-tabs v-model="activeTab" type="border-card" class="resource-tabs">
          <el-tab-pane v-for="category in categories" :key="category.id" :label="category.name" :name="category.id">
            <div class="resource-list">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" v-for="resource in getResourcesByCategory(category.id)" :key="resource.id">
                  <div class="resource-card">
                    <div class="resource-card-body">
                      <div class="resource-icon">
                        <i :class="getResourceTypeIcon(resource.type)"></i>
                      </div>
                      <h3 class="resource-card-title">{{ resource.title }}</h3>
                      <p class="resource-card-desc">{{ resource.description }}</p>
                      <div class="resource-tags">
                        <el-tag size="small" type="primary">{{ getResourceTypeName(resource.type) }}</el-tag>
                        <el-tag size="small" type="info">{{ resource.level }}</el-tag>
                      </div>
                      <div class="resource-actions">
                        <el-button type="primary" size="small" @click="viewResource(resource)">查看资源</el-button>
                        <el-button type="text" size="small" @click="bookmarkResource(resource)">
                          <i class="el-icon-star-off"></i> 收藏
                        </el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
    
    <section class="weekly-picks section">
      <div class="container">
        <h2 class="section-title text-center">每周精选</h2>
        <p class="section-subtitle text-center">
          我们每周精选最热门、最有价值的AI学习资源
        </p>
        
        <el-carousel :interval="4000" type="card" height="300px" class="picks-carousel">
          <el-carousel-item v-for="pick in weeklyPicks" :key="pick.id">
            <div class="pick-card">
              <div class="pick-image">
                <img :src="pick.image" :alt="pick.title">
              </div>
              <div class="pick-content">
                <h3 class="pick-title">{{ pick.title }}</h3>
                <p class="pick-desc">{{ pick.description }}</p>
                <el-button type="primary" size="small">了解详情</el-button>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    
    <section class="resource-cta section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-content">
            <h2 class="cta-title">寻找更多资源？</h2>
            <p class="cta-text">
              加入我们的社区，获取最新AI学习资源和交流机会。添加微信号：zhzren123
            </p>
            <el-button type="primary" size="large" class="cta-button">
              加入社区 <i class="el-icon-arrow-right"></i>
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Resources',
  data() {
    return {
      activeTab: 'all',
      categories: [
        { id: 'all', name: '全部资源' },
        { id: 'tools', name: 'AI工具' },
        { id: 'courses', name: '在线课程' },
        { id: 'books', name: '电子书籍' },
        { id: 'videos', name: '视频教程' },
        { id: 'articles', name: '技术文章' }
      ],
      resources: [
        {
          id: 1,
          title: 'ChatGPT开发指南',
          description: '全面介绍ChatGPT API的使用方法和开发技巧',
          type: 'ebook',
          level: '初级到中级',
          category: ['all', 'books'],
          url: '#'
        },
        {
          id: 2,
          title: 'AI网站开发工具集',
          description: '收集最实用的AI驱动的网站开发工具和资源',
          type: 'tool',
          level: '所有级别',
          category: ['all', 'tools'],
          url: '#'
        },
        {
          id: 3,
          title: 'AI辅助编程视频教程',
          description: '通过实例讲解如何利用AI工具加速编程过程',
          type: 'video',
          level: '中级',
          category: ['all', 'videos'],
          url: '#'
        },
        {
          id: 4,
          title: '从零开始的AI应用开发',
          description: '适合初学者的AI应用开发入门课程',
          type: 'course',
          level: '初级',
          category: ['all', 'courses'],
          url: '#'
        },
        {
          id: 5,
          title: 'AI开发最佳实践指南',
          description: '专业开发者分享的AI开发经验和最佳实践',
          type: 'article',
          level: '高级',
          category: ['all', 'articles'],
          url: '#'
        },
        {
          id: 6,
          title: '生成式AI在软件开发中的应用',
          description: '探索生成式AI如何革新软件开发流程',
          type: 'ebook',
          level: '中级到高级',
          category: ['all', 'books'],
          url: '#'
        },
        {
          id: 7,
          title: 'AI绘画工具大全',
          description: '评测市面上主流的AI绘画工具及其特点',
          type: 'tool',
          level: '所有级别',
          category: ['all', 'tools'],
          url: '#'
        },
        {
          id: 8,
          title: 'AI驱动的Web应用实战',
          description: '手把手教你构建AI驱动的现代Web应用',
          type: 'course',
          level: '中级',
          category: ['all', 'courses'],
          url: '#'
        },
        {
          id: 9,
          title: 'AI模型训练与部署教程',
          description: '详细讲解AI模型的训练、调优和部署流程',
          type: 'video',
          level: '高级',
          category: ['all', 'videos'],
          url: '#'
        }
      ],
      weeklyPicks: [
        {
          id: 1,
          title: 'AI开发者2024技能图谱',
          description: '最新的AI开发者技能路线图，帮助你规划学习路径',
          image: 'https://via.placeholder.com/600x300?text=技能图谱'
        },
        {
          id: 2,
          title: 'ChatGPT高级提示词工程',
          description: '掌握提示词工程，让ChatGPT成为你的得力助手',
          image: 'https://via.placeholder.com/600x300?text=提示词工程'
        },
        {
          id: 3,
          title: '2024年最值得学习的AI技术',
          description: '探索2024年AI领域最热门的技术趋势',
          image: 'https://via.placeholder.com/600x300?text=AI趋势'
        }
      ]
    }
  },
  methods: {
    getResourcesByCategory(categoryId) {
      return this.resources.filter(resource => resource.category.includes(categoryId))
    },
    getResourceTypeIcon(type) {
      const icons = {
        'ebook': 'el-icon-reading',
        'tool': 'el-icon-s-tools',
        'video': 'el-icon-video-camera',
        'course': 'el-icon-s-management',
        'article': 'el-icon-document'
      }
      return icons[type] || 'el-icon-document'
    },
    getResourceTypeName(type) {
      const names = {
        'ebook': '电子书',
        'tool': '工具',
        'video': '视频',
        'course': '课程',
        'article': '文章'
      }
      return names[type] || '其他'
    },
    viewResource(resource) {
      console.log('查看资源:', resource)
      // 实现查看资源的逻辑
    },
    bookmarkResource(resource) {
      console.log('收藏资源:', resource)
      // 实现收藏资源的逻辑
    }
  }
}
</script>

<style lang="scss" scoped>
.resource-hero {
  background-color: #67C23A;
  padding: 60px 0;
  color: white;
  
  .resource-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .resource-subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    opacity: 0.9;
  }
}

.resources-content {
  background-color: #f5f7fa;
}

.resource-tabs {
  margin-top: 20px;
}

.resource-list {
  padding: 20px 0;
}

.resource-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 100%;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}

.resource-card-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.resource-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(103, 194, 58, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
  i {
    font-size: 24px;
    color: #67C23A;
  }
}

.resource-card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--primary-text-color);
}

.resource-card-desc {
  color: var(--regular-text-color);
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
}

.resource-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.resource-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weekly-picks {
  background-color: white;
}

.picks-carousel {
  margin-top: 40px;
}

.pick-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.pick-image {
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.pick-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  .pick-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--primary-text-color);
  }
  
  .pick-desc {
    color: var(--regular-text-color);
    line-height: 1.5;
    margin-bottom: 15px;
    flex: 1;
  }
}

.resource-cta {
  background-color: #f5f7fa;
}

.cta-box {
  background-color: #409EFF;
  border-radius: 10px;
  padding: 40px;
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.cta-text {
  font-size: 1.1rem;
  margin-bottom: 25px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background-color: white;
  color: #409EFF;
  font-weight: 600;
  padding: 12px 30px;
}
</style> 