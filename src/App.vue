<template>
  <div>
    <!--Banner-->
    <!-- <BannerComponent/> -->
    <!--Header-->
    <HeaderComponent/>
    <div class="banner">
      <img alt="" src="./assets/BANNER-CASANAPRAIA.png">
    </div>
    <router-view />
    <div class="banner">
      <img alt="" src="./assets/footerborder.png">
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
// import BannerComponent from './components/banner/BannerComponent.vue';
import HeaderComponent from "./components/header/HeaderComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

export default {
  name: 'AppVue',
  components: {
    HeaderComponent,FooterComponent,
    // BannerComponent
  }
}

</script>

<style>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  overflow-x: hidden;
  background: #fff;
  min-height: 100vh;
}

.logo {
  color: #112434;
  font-weight: 700;
  font-size: 2em;
  text-decoration: none;
}

.hide {
  display: none;
}

.banner {
  width: 100%;
}

.banner img {
  display: block;
  object-fit: cover;
  width: 100%;
  object-position: center;
}
</style>
