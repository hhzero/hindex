<template>
  <section class="courses section" id="courses">
    <div class="container">
      <h2 class="section-title text-center">精选AI开发课程</h2>
      <p class="section-subtitle text-center">
        从基础到进阶，系统学习AI开发技术，快速提升你的开发能力
      </p>
      
      <el-row :gutter="30" class="courses-row">
        <el-col :xs="24" :sm="12" :md="8" v-for="course in courses" :key="course.id">
          <div class="course-card">
            <div class="course-image">
              <img :src="course.image || 'https://via.placeholder.com/300x200?text=AI课程'" :alt="course.title" />
              <div class="course-level">{{ course.level }}</div>
            </div>
            <div class="course-content">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-desc">{{ course.description }}</p>
              <div class="course-meta">
                <span><i class="el-icon-time"></i> {{ course.duration }}</span>
                <span><i class="el-icon-refresh"></i> {{ course.updated }}</span>
              </div>
              <el-button type="primary" class="course-btn">查看详情</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      
      <div class="text-center mt-40">
        <el-button type="primary" plain size="large">查看全部课程 <i class="el-icon-arrow-right"></i></el-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Courses',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'AI驱动的网站开发入门',
          description: '从零开始，学习如何使用AI工具构建现代化网站',
          image: 'https://via.placeholder.com/300x200?text=AI网站开发',
          level: '初级',
          duration: '3小时',
          updated: '2023-12-01'
        },
        {
          id: 2,
          title: 'ChatGPT应用软件开发指南',
          description: '使用ChatGPT API开发智能应用程序的全流程指南',
          image: 'https://via.placeholder.com/300x200?text=ChatGPT开发',
          level: '中级',
          duration: '4小时',
          updated: '2023-12-10'
        },
        {
          id: 3,
          title: 'AI辅助编程进阶技巧',
          description: '掌握使用AI加速日常编程工作的高级技巧',
          image: 'https://via.placeholder.com/300x200?text=AI编程技巧',
          level: '高级',
          duration: '2.5小时',
          updated: '2023-12-15'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.courses {
  background-color: #fff;
}

.courses-row {
  margin-top: 50px;
}

.course-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}

.course-image {
  position: relative;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  
  .course-level {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
  }
}

.course-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--primary-text-color);
}

.course-desc {
  color: var(--regular-text-color);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.course-meta {
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

.course-btn {
  align-self: flex-start;
}

.mt-40 {
  margin-top: 40px;
}
</style> 