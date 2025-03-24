<template>
  <div class="community-page">
    <section class="community-hero">
      <div class="container">
        <h1 class="community-title">AI学习社区</h1>
        <p class="community-subtitle">
          加入我们的AI学习社区，与志同道合的朋友交流学习，共同进步
        </p>
      </div>
    </section>
    
    <section class="community-content section">
      <div class="container">
        <el-row :gutter="30">
          <el-col :xs="24" :md="16">
            <div class="main-content">
              <div class="join-community">
                <h2 class="section-title">如何加入我们</h2>
                <p class="join-description">
                  我们拥有一个活跃的AI学习交流社区，汇集了各领域的AI爱好者和专业人士。无论你是初学者还是有经验的开发者，都能在这里找到属于自己的学习圈子。
                </p>
                
                <div class="join-steps">
                  <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h3 class="step-title">添加微信</h3>
                      <p class="step-desc">添加微信号 <strong>zhzren123</strong> 或扫描下方二维码</p>
                    </div>
                  </div>
                  
                  <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h3 class="step-title">备注"AI学习"</h3>
                      <p class="step-desc">添加时请备注"AI学习"，方便我们审核</p>
                    </div>
                  </div>
                  
                  <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h3 class="step-title">加入交流群</h3>
                      <p class="step-desc">通过审核后，我们会邀请你加入相应的学习交流群</p>
                    </div>
                  </div>
                </div>
                
                <div class="wechat-box">
                  <div class="qrcode-placeholder">
                    <i class="el-icon-mobile-phone"></i>
                    <p>微信号: zhzren123</p>
                  </div>
                  <div class="wechat-info">
                    <h3 class="wechat-title">加入社区获得</h3>
                    <ul class="benefit-list">
                      <li><i class="el-icon-check"></i> 每周精选AI学习资源</li>
                      <li><i class="el-icon-check"></i> AI技术分享和讨论</li>
                      <li><i class="el-icon-check"></i> 项目实战经验交流</li>
                      <li><i class="el-icon-check"></i> 专业导师在线答疑</li>
                      <li><i class="el-icon-check"></i> 学习伙伴互助督促</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="community-activities">
                <h2 class="section-title">社区活动</h2>
                <p class="activities-description">
                  我们定期举办各类线上活动，帮助社区成员更好地学习和交流
                </p>
                
                <div class="activity-list">
                  <div class="activity-card" v-for="activity in activities" :key="activity.id">
                    <div class="activity-time">
                      <span class="activity-date">{{ activity.date }}</span>
                      <span class="activity-status" :class="activity.status">{{ getStatusText(activity.status) }}</span>
                    </div>
                    <div class="activity-info">
                      <h3 class="activity-title">{{ activity.title }}</h3>
                      <p class="activity-desc">{{ activity.description }}</p>
                      <div class="activity-meta">
                        <span><i class="el-icon-user"></i> {{ activity.organizer }}</span>
                        <span><i class="el-icon-time"></i> {{ activity.time }}</span>
                      </div>
                      <el-button 
                        type="primary" 
                        size="small" 
                        :disabled="activity.status === 'past'"
                        class="activity-btn">
                        {{ activity.status === 'upcoming' ? '预约参加' : (activity.status === 'ongoing' ? '立即加入' : '查看回放') }}
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          
          <el-col :xs="24" :md="8">
            <div class="sidebar-content">
              <div class="community-stats">
                <h3 class="sidebar-title">社区数据</h3>
                <div class="stats-grid">
                  <div class="stat-item">
                    <div class="stat-value">5000+</div>
                    <div class="stat-name">社区成员</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">200+</div>
                    <div class="stat-name">学习小组</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">50+</div>
                    <div class="stat-name">行业导师</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">100+</div>
                    <div class="stat-name">线上活动</div>
                  </div>
                </div>
              </div>
              
              <div class="testimonials-box">
                <h3 class="sidebar-title">社区成员心声</h3>
                <el-carousel height="250px" indicator-position="none" :interval="5000" arrow="never">
                  <el-carousel-item v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="testimonial-item">
                      <p class="testimonial-content">{{ testimonial.content }}</p>
                      <div class="testimonial-author">
                        <div class="author-avatar">
                          <img :src="testimonial.avatar" :alt="testimonial.name">
                        </div>
                        <div class="author-info">
                          <div class="author-name">{{ testimonial.name }}</div>
                          <div class="author-title">{{ testimonial.title }}</div>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
              
              <div class="faq-box">
                <h3 class="sidebar-title">常见问题</h3>
                <el-collapse>
                  <el-collapse-item v-for="(faq, index) in faqs" :key="index" :title="faq.question">
                    <div>{{ faq.answer }}</div>
                  </el-collapse-item>
                </el-collapse>
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
  name: 'Community',
  data() {
    return {
      activities: [
        {
          id: 1,
          title: 'AI开发实战分享会',
          description: '资深AI开发专家分享AI应用开发的经验和最佳实践',
          date: '2024-03-25',
          time: '19:30-21:00',
          organizer: '张教授',
          status: 'upcoming'
        },
        {
          id: 2,
          title: 'ChatGPT提示词工程训练营',
          description: '学习如何设计高效的提示词，让ChatGPT成为你的专属助手',
          date: '2024-03-18',
          time: '20:00-21:30',
          organizer: '李老师',
          status: 'ongoing'
        },
        {
          id: 3,
          title: 'AI网站开发案例分析',
          description: '通过真实案例，深入分析AI驱动的网站开发流程和技巧',
          date: '2024-03-10',
          time: '19:00-20:30',
          organizer: '王工程师',
          status: 'past'
        }
      ],
      testimonials: [
        {
          id: 1,
          content: '加入AI学习社区是我今年做过的最正确的决定。在这里我不仅学到了很多实用的AI开发技能，还认识了一群志同道合的朋友。社区氛围非常好，大家互相学习、互相帮助。',
          name: '陈明',
          title: '前端工程师',
          avatar: 'https://via.placeholder.com/50x50?text=陈'
        },
        {
          id: 2,
          content: '作为一名AI初学者，我在社区里得到了很多指导和帮助。导师们都很耐心解答问题，学习资源也非常丰富。现在我已经能够独立开发一些AI应用了，感谢这个社区！',
          name: '林小华',
          title: '产品经理',
          avatar: 'https://via.placeholder.com/50x50?text=林'
        },
        {
          id: 3,
          content: '社区组织的线上活动非常实用，每次都能学到新知识。最喜欢的是实战项目分享环节，可以看到其他人是如何应用AI技术解决实际问题的，非常受启发。',
          name: '赵强',
          title: '创业者',
          avatar: 'https://via.placeholder.com/50x50?text=赵'
        }
      ],
      faqs: [
        {
          question: '加入社区需要付费吗？',
          answer: '基础的社区交流群是完全免费的。我们也提供一些付费的专业课程和辅导，但这些都是完全自愿的。'
        },
        {
          question: '我是完全的AI新手，适合加入吗？',
          answer: '非常适合！我们有专门的新手学习小组，会有经验丰富的社区成员帮助你入门。我们欢迎各个水平的AI爱好者加入。'
        },
        {
          question: '社区主要使用哪些交流工具？',
          answer: '我们主要通过微信群进行日常交流，使用腾讯会议进行线上活动，同时也有专门的学习资源共享平台。'
        },
        {
          question: '如何参与社区组织的线上活动？',
          answer: '所有的线上活动都会在社区群内提前通知，成员可以通过群公告了解活动详情并报名参加。'
        }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      const statusMap = {
        'upcoming': '即将开始',
        'ongoing': '进行中',
        'past': '已结束'
      }
      return statusMap[status] || '未知状态'
    }
  }
}
</script>

<style lang="scss" scoped>
.community-hero {
  background-color: #E6A23C;
  padding: 60px 0;
  color: white;
  
  .community-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .community-subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    opacity: 0.9;
  }
}

.community-content {
  background-color: #f5f7fa;
}

.main-content {
  > div {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-text-color);
}

.join-description, .activities-description {
  color: var(--regular-text-color);
  line-height: 1.6;
  margin-bottom: 30px;
}

.join-steps {
  margin-bottom: 30px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  
  .step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #E6A23C;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 15px;
    flex-shrink: 0;
  }
  
  .step-content {
    flex: 1;
  }
  
  .step-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--primary-text-color);
  }
  
  .step-desc {
    color: var(--regular-text-color);
  }
}

.wechat-box {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.qrcode-placeholder {
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  border: 1px solid #eee;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  i {
    font-size: 60px;
    color: #E6A23C;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: var(--regular-text-color);
  }
}

.wechat-info {
  flex: 1;
}

.wechat-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-text-color);
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: var(--regular-text-color);
    
    i {
      color: #67C23A;
      margin-right: 10px;
    }
  }
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.activity-card {
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
}

.activity-time {
  background-color: #409EFF;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  
  @media (max-width: 576px) {
    padding: 10px;
  }
}

.activity-date {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.activity-status {
  font-size: 0.9rem;
  padding: 3px 8px;
  border-radius: 12px;
  
  &.upcoming {
    background-color: #67C23A;
  }
  
  &.ongoing {
    background-color: #E6A23C;
  }
  
  &.past {
    background-color: #909399;
  }
}

.activity-info {
  padding: 20px;
  flex: 1;
}

.activity-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--primary-text-color);
}

.activity-desc {
  color: var(--regular-text-color);
  margin-bottom: 15px;
  line-height: 1.5;
}

.activity-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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

.sidebar-content {
  > div {
    background-color: white;
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}

.sidebar-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--primary-text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #409EFF;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #409EFF;
  margin-bottom: 5px;
}

.stat-name {
  font-size: 0.9rem;
  color: var(--regular-text-color);
}

.testimonial-item {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-content {
  font-style: italic;
  color: var(--regular-text-color);
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
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
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 5px;
}

.author-title {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
}
</style> 