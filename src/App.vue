<template>
  <div>
    <!--Banner-->
    <!-- <BannerComponent/> -->
    <!--Header-->
    <HeaderComponent/>
    <!--Footer-->
    <div class="banner">
      <img alt="" src="./assets/BANNER-CASANAPRAIA.png">
    </div>
    <router-view />
    <footer class="footer">
      <div class="redessociaisfooter">
        <a href="https://github.com/AlmirRLima/grupo03" target="_blank">
          <img src="./assets/github.png" alt="Logo do github"></a>
        <a href="https://chat.whatsapp.com/KthRdCQBgphIxusvtrUFs7" target="_blank">
          <img src="./assets/whatsapp.png" alt="Logo do whatsapp"></a>
        <router-link to="/Contato" class="links">
          <h3>Fale conosco</h3>
        </router-link>
      </div>
      <div class="logodireitosreservados">
        <img src="./assets/logo_hotel.png" alt="Logo">
        <p>
          Todos os direitos reservados: HOTEL CASA NA PRAIA
        </p>
        <a class="links" href="#inicio">Voltar ao topo</a>
      </div>
      <div class="menufooter">
        <h3>LINKS ÚTEIS</h3>
        <router-link class="links" to="/">Home</router-link>
        <router-link to="/Acomodacoes" class="links">Acomodações</router-link>
        <router-link class="links" to="/Reservas">Reservas</router-link>
      </div>

    </footer>
  </div>
</template>

<script>
// import BannerComponent from './components/banner/BannerComponent.vue';
import HeaderComponent from "./components/header/HeaderComponent.vue";

export default {
  name: 'AppVue',
  components: {
    HeaderComponent,
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

.footer {
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer .redessociaisfooter img {
  width: 3em;
  height: 3em;
}

footer .logodireitosreservados img {
  width: 7em;
  height: 7em;
}

.redessociaisfooter {
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.menufooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
}

.logodireitosreservados {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.direitosreservadosfooter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.links {
  text-decoration: none;
  color: black;
  padding: 0.4em;
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
