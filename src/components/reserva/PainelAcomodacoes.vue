<template>
  <div class="PainelAcomodacoes">
    <h1>{{ msg }}</h1>
    <h2>Componente PainelAcomodacoes.vue</h2>
    <p>Teste PainelAcomodacoes</p>
    <h4>Escolha o quarto e demais opções.</h4>

    <!-- mostra painel a partir da store...-->
    <div class="painelEsquerdo" v-for="item in acomodacoes" :key="item">
      <h2>{{ item.nome }}</h2>
      <div class="acomodacaoReserva">
        <img :src="item.imgURL" :alt="item.nome" />
        <p>{{ item.descricaoBreve }}</p>
      </div>
      <h3>R$ {{ item.vlrDiaria }},00</h3>
      <input
        type="radio"
        id="tipoApto"
        name="tipoApto"
        v-bind:value="item.id"
        checked
      />
      <label for="suiteMaster">Selecionar a suite {{ item.nome }}!</label><br />
      <hr />
    </div>
    <hr />
    <!-- 1a acomodacao
    <h2>Suite Master</h2>
    <div class="acomodacaoReserva">
      <img src="../../assets/images/reservas/room01_master.jpg" alt="Master" />
      <p>
        Cama estilo "queen-size" com 05 funções de massagem, uma TV 4K de 50"
        com programação livre (NetFlix, Prime e canais abertos). Sala com sofá
        grande e uma poltrona de leitura, e uma TV de 45", dispositivo Alexa,
        video-game (PS4 ou XBox) com jogos instalados. Mesa para notebook e
        cozinha funcional (mini-fogão elétrico, micro-ondas, cafeteira e
        utensílios básicos).
      </p>
    </div>
    <h3>R$ 600,00</h3>
    <input type="radio" id="tipoApto" name="tipoApto" value="Master" checked />
    <label for="suiteMaster">Selecionar a Suite Master</label><br />
    <p>Fora da div...</p>
    <hr />
    ---- Fim 1a acomodacao ---
    ---- 2a acomodacao ------
    <h2>Suite Family</h2>
    <div class="acomodacaoReserva">
      <img src="../../assets/images/reservas/room02_family.jpg" alt="Family" />
      <p>
        Quarto amplo com duas camas tamanho "king-size", para até 4 pessoas.
        Sala conjugada com TV de 50" e programação livre (NetFlix, Prime e
        canais abertos). Sofá cama , frigobar, pia e cafeteira.
      </p>
    </div>
    <h3>R$ 400,00</h3>
    <input type="radio" id="tipoApto" name="tipoApto" value="Family" />
    <label for="suiteFamily">Selecionar a Suite Family</label><br />
    <p>Fora da div...</p>
    <hr />
    --- Fim 2a acomodacao --
    --- 3a acomodacao ---
    <h2>Suite Comfort</h2>
    <div class="acomodacaoReserva">
      <img src="../../assets/images/reservas/room03_comfort.jpg" alt="Single" />
      <p>
        Cama confortável, TV a cabo e frigobar. Mesa de trabalho, internet e
        serviços adicionais sob consulta.
      </p>
    </div>
    <h3>R$ 200,00</h3>
    <input type="radio" id="tipoApto" name="tipoApto" value="Comfort" />
    <label for="suiteComfort">Selecionar a Suite Comfort</label><br />
    <p>Fora da div...</p>
    <hr />
    --- Fim 3a acomodacao -->
  </div>
</template>

<script>
export default {
  name: "PainelAcomodacoes",
  props: {
    msg: String,
  },
  computed: {
    acomodacoes() {
      return this.$store.getters.acomodacoes;
    },
  },
};
</script>

<style scoped>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.acomodacaoReserva {
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  max-width: 60%;
  padding: 0px;
  margin-top: 20px;
  grid-gap: 20px;
}
.acomodacaoReserva p {
  color: red;
}

.acomodacaoReserva img {
  border: 2px solid #1c6ea4;
  box-shadow: 5px 5px 15px 5px #000000;
  width: 50%;
  margin: 2px 5px 2px 5px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
</style>
