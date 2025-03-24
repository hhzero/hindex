<template>
  <div class="tutorials">
    <section class="tutorial-hero">
      <div class="container">
        <h1 class="tutorial-title">AI开发教程</h1>
        <p class="tutorial-subtitle">
          通过我们的精选教程，学习如何使用AI工具开发网站和软件
        </p>
      </div>
    </section>
    
    <section class="tutorials-content section">
      <div class="container">
        <el-row :gutter="20">
          <el-col :lg="6" :md="8" :sm="24">
            <div class="tutorial-sidebar">
              <h3 class="sidebar-title">教程分类</h3>
              <el-menu 
                :default-active="activeCategory" 
                class="tutorial-menu"
                @select="handleCategorySelect">
                <el-menu-item v-for="(category, index) in categories" 
                  :key="index" 
                  :index="category.id.toString()">
                  <i :class="category.icon"></i>
                  <span slot="title">{{ category.name }}</span>
                </el-menu-item>
              </el-menu>
              
              <div class="filter-box">
                <h3 class="sidebar-title">难度级别</h3>
                <el-checkbox-group v-model="selectedLevels">
                  <el-checkbox v-for="level in levels" 
                    :key="level.id" 
                    :label="level.id">
                    {{ level.name }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </el-col>
          
          <el-col :lg="18" :md="16" :sm="24">
            <div class="tutorial-list">
              <el-input 
                placeholder="搜索教程..." 
                v-model="searchQuery" 
                prefix-icon="el-icon-search"
                clearable
                class="search-box mb-20">
              </el-input>
              
              <div class="tutorial-grid">
                <div class="tutorial-card" v-for="tutorial in filteredTutorials" :key="tutorial.id">
                  <div class="tutorial-img">
                    <img :src="tutorial.image" :alt="tutorial.title">
                    <div class="tutorial-level">{{ getLevelName(tutorial.level) }}</div>
                  </div>
                  <div class="tutorial-body">
                    <h3 class="tutorial-card-title">{{ tutorial.title }}</h3>
                    <p class="tutorial-card-desc">{{ tutorial.description }}</p>
                    <div class="tutorial-meta">
                      <span><i class="el-icon-user"></i> {{ tutorial.author }}</span>
                      <span><i class="el-icon-time"></i> {{ tutorial.duration }}</span>
                    </div>
                    <el-button type="primary">查看教程</el-button>
                  </div>
                </div>
              </div>
              
              <div class="pagination-container">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="100"
                  :page-size="10"
                  @current-change="handlePageChange">
                </el-pagination>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tutorials',
  data() {
    return {
      activeCategory: '1',
      searchQuery: '',
      selectedLevels: ['1', '2', '3'],
      categories: [
        { id: 1, name: '所有教程', icon: 'el-icon-document' },
        { id: 2, name: '网站开发', icon: 'el-icon-monitor' },
        { id: 3, name: '软件开发', icon: 'el-icon-s-platform' },
        { id: 4, name: 'ChatGPT应用', icon: 'el-icon-chat-dot-round' },
        { id: 5, name: 'AI绘画', icon: 'el-icon-picture' },
        { id: 6, name: '实战项目', icon: 'el-icon-s-opportunity' }
      ],
      levels: [
        { id: '1', name: '初级' },
        { id: '2', name: '中级' },
        { id: '3', name: '高级' }
      ],
      tutorials: [
        {
          id: 1,
          title: '使用AI构建响应式网站',
          description: '学习如何利用AI工具快速构建现代化响应式网站，无需深入掌握编程技能',
          image: 'https://via.placeholder.com/300x200?text=AI网站开发',
          author: '张教授',
          duration: '2小时',
          level: '1',
          category: 2
        },
        {
          id: 2,
          title: '利用ChatGPT开发智能问答系统',
          description: '从零开始，学习如何使用ChatGPT API开发一个智能问答系统',
          image: 'https://via.placeholder.com/300x200?text=ChatGPT',
          author: '李博士',
          duration: '3小时',
          level: '2',
          category: 4
        },
        {
          id: 3,
          title: 'AI驱动的移动应用开发',
          description: '探索如何使用AI工具加速移动应用的开发过程',
          image: 'https://via.placeholder.com/300x200?text=移动应用',
          author: '王工程师',
          duration: '4小时',
          level: '2',
          category: 3
        },
        {
          id: 4,
          title: 'AI图像生成与处理实战',
          description: '学习使用最新的AI图像生成工具创建和处理高质量图像',
          image: 'https://via.placeholder.com/300x200?text=AI绘画',
          author: '赵设计师',
          duration: '2.5小时',
          level: '1',
          category: 5
        },
        {
          id: 5,
          title: '从零搭建AI驱动的电商平台',
          description: '综合运用AI技术，构建一个功能完整的电商平台',
          image: 'https://via.placeholder.com/300x200?text=电商平台',
          author: '陈架构师',
          duration: '6小时',
          level: '3',
          category: 6
        },
        {
          id: 6,
          title: 'AI编程助手的高级应用',
          description: '深入探索如何使用AI编程助手提高代码质量和开发效率',
          image: 'https://via.placeholder.com/300x200?text=AI编程',
          author: '林开发',
          duration: '3.5小时',
          level: '3',
          category: 3
        }
      ]
    }
  },
  computed: {
    filteredTutorials() {
      return this.tutorials.filter(tutorial => {
        // 根据分类筛选
        const categoryMatch = this.activeCategory === '1' || tutorial.category.toString() === this.activeCategory
        
        // 根据难度级别筛选
        const levelMatch = this.selectedLevels.includes(tutorial.level)
        
        // 根据搜索关键词筛选
        const searchMatch = !this.searchQuery || 
          tutorial.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
          tutorial.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        
        return categoryMatch && levelMatch && searchMatch
      })
    }
  },
  methods: {
    handleCategorySelect(key) {
      this.activeCategory = key
    },
    handlePageChange(page) {
      console.log('Current page:', page)
      // 实现页码切换逻辑
    },
    getLevelName(levelId) {
      const level = this.levels.find(l => l.id === levelId)
      return level ? level.name : '未知'
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-hero {
  background-color: #409EFF;
  padding: 60px 0;
  color: white;
  
  .tutorial-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .tutorial-subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    opacity: 0.9;
  }
}

.tutorials-content {
  background-color: #f5f7fa;
}

.tutorial-sidebar {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  
  .sidebar-title {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: var(--primary-text-color);
  }
  
  .tutorial-menu {
    border-right: none;
    margin-bottom: 30px;
  }
  
  .filter-box {
    margin-top: 30px;
  }
}

.tutorial-list {
  .search-box {
    margin-bottom: 30px;
  }
}

.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.tutorial-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}

.tutorial-img {
  position: relative;
  
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }
  
  .tutorial-level {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
  }
}

.tutorial-body {
  padding: 20px;
}

.tutorial-card-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--primary-text-color);
  min-height: 40px;
}

.tutorial-card-desc {
  color: var(--regular-text-color);
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 70px;
}

.tutorial-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--secondary-text-color);
  
  span {
    display: flex;
    align-items: center;
    
    i {
      margin-right: 5px;
      color: #409EFF;
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .tutorial-sidebar {
    margin-bottom: 30px;
  }
}
</style> 