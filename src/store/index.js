import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    notifications: [],
    courses: [],
    resources: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addNotification(state, notification) {
      state.notifications.push(notification)
    },
    removeNotification(state, id) {
      state.notifications = state.notifications.filter(n => n.id !== id)
    },
    setCourses(state, courses) {
      state.courses = courses
    },
    setResources(state, resources) {
      state.resources = resources
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('setUser', null)
    },
    showNotification({ commit }, notification) {
      const id = Date.now()
      commit('addNotification', { id, ...notification })
      setTimeout(() => {
        commit('removeNotification', id)
      }, notification.timeout || 3000)
    },
    fetchCourses({ commit }) {
      // 这里模拟从API获取课程数据
      const courses = [
        {
          id: 1,
          title: 'AI驱动的网站开发入门',
          description: '从零开始，学习如何使用AI工具构建现代化网站',
          image: '/images/course-website.jpg',
          level: '初级',
          duration: '3小时',
          updated: '2023-12-01'
        },
        {
          id: 2,
          title: 'ChatGPT应用软件开发指南',
          description: '使用ChatGPT API开发智能应用程序的全流程指南',
          image: '/images/course-software.jpg',
          level: '中级',
          duration: '4小时',
          updated: '2023-12-10'
        },
        {
          id: 3,
          title: 'AI辅助编程进阶技巧',
          description: '掌握使用AI加速日常编程工作的高级技巧',
          image: '/images/course-coding.jpg',
          level: '高级',
          duration: '2.5小时',
          updated: '2023-12-15'
        }
      ]
      commit('setCourses', courses)
    },
    fetchResources({ commit }) {
      // 这里模拟从API获取资源数据
      const resources = [
        {
          id: 1,
          title: 'AI开发工具大全',
          description: '收集了当前最流行的AI开发工具和资源',
          url: '/resources/ai-tools',
          category: '工具'
        },
        {
          id: 2,
          title: 'AI编程最佳实践指南',
          description: '业内专家分享的AI编程经验和最佳实践',
          url: '/resources/best-practices',
          category: '指南'
        },
        {
          id: 3,
          title: 'AI学习路线图',
          description: '从新手到专家的AI学习完整路线图',
          url: '/resources/roadmap',
          category: '学习'
        }
      ]
      commit('setResources', resources)
    }
  },
  getters: {
    isLoggedIn: state => !!state.user,
    courseById: state => id => state.courses.find(course => course.id === id),
    resourceById: state => id => state.resources.find(resource => resource.id === id)
  }
}) 