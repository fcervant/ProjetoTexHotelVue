<template>
  <div class="home">
    <HomeMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from '@/components/HomeMain.vue'

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