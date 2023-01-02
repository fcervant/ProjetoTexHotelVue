<template>
  <div class="home">
    <HomeMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from '@/components/home/HomeMain.vue'

export default {
  name: 'HomeView',
  components: {
    HomeMain
  }
}
</script>
<style scoped>
.home{
  margin-top: -1%;
}
</style>