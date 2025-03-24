<template>
  <section class="testimonials section" id="testimonials">
    <div class="container">
      <h2 class="section-title text-center">学员心声</h2>
      <p class="section-subtitle text-center">
        听听我们的学员如何通过AI学习中心提升开发技能，加速职业发展
      </p>
      
      <el-carousel :interval="5000" type="card" height="400px" class="testimonial-carousel">
        <el-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="testimonial-quote">
                <i class="el-icon-chat-line-round"></i>
              </div>
              <p class="testimonial-text">{{ testimonial.content }}</p>
              <div class="testimonial-rating">
                <i class="el-icon-star-on" v-for="i in 5" :key="i"></i>
              </div>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
              </div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-title">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          content: '通过AI学习中心的课程，我学会了如何使用ChatGPT和其他AI工具来加速我的开发流程。现在我能够在几小时内完成之前需要几天的工作，效率提高了好几倍！',
          name: '张明',
          title: '前端开发工程师',
          avatar: 'https://via.placeholder.com/60x60?text=张'
        },
        {
          content: '作为一名产品经理，我一直在寻找能够帮助我提高工作效率的工具。AI学习中心教会了我如何利用AI来进行市场分析、用户研究和产品规划，这些技能现在已经成为我日常工作的重要组成部分。',
          name: '李娜',
          title: '产品经理',
          avatar: 'https://via.placeholder.com/60x60?text=李'
        },
        {
          content: '我之前对编程一窍不通，但通过AI学习中心的课程，我学会了如何使用AI工具来创建自己的网站。整个过程非常简单，课程讲解得很详细，现在我已经成功搭建了自己的个人博客和电商网站！',
          name: '王强',
          title: '创业者',
          avatar: 'https://via.placeholder.com/60x60?text=王'
        },
        {
          content: '作为一名设计师，我发现AI工具可以大大提高我的创作效率。AI学习中心的课程帮助我掌握了使用AI生成设计素材和创意的技巧，现在我的设计过程更加流畅和高效。',
          name: '赵雪',
          title: 'UI/UX设计师',
          avatar: 'https://via.placeholder.com/60x60?text=赵'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.testimonial-carousel {
  margin-top: 60px;
}

.testimonial-card {
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-content {
  margin-bottom: 30px;
}

.testimonial-quote {
  width: 50px;
  height: 50px;
  background-color: #409EFF;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 24px;
  }
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--regular-text-color);
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-rating {
  display: flex;
  gap: 5px;
  
  i {
    color: #FFBA00;
    font-size: 18px;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 5px;
}

.author-title {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 