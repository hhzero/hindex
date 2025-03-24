<template>
  <div class="home">
    <Hero />
    <Features />
    <Courses />
    <Testimonials />
    <Cta />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Features from '@/components/home/Features.vue'
import Courses from '@/components/home/Courses.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Cta from '@/components/home/Cta.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Features,
    Courses,
    Testimonials,
    Cta
  },
  mounted() {
    this.$store.dispatch('fetchCourses')
    this.$store.dispatch('fetchResources')
  }
}
</script> 