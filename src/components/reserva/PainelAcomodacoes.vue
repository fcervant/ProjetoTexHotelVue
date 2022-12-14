<template>
  <div class="PainelAcomodacoes">
    <h1>{{ msg }}</h1>
    <h2>Componente PainelAcomodacoes.vue</h2>
    <p>Teste PainelAcomodacoes</p>

    <h4>Escolha o quarto e demais opções.</h4>

    <!-- mostra painel a partir da store...-->
    <!-- a ordem é mostrar primeiro a acomodação selecionada IMPLEMENTAR!!! -->
    <div class="painelEsquerdo" v-for="item in acomodacoes" :key="item">
      <h2>{{ item.nome }}</h2>
      <div class="acomodacaoReserva">
        <img :src="item.imgURL" :alt="item.nome" />
        <p>{{ item.descricaoBreve }}</p>
      </div>
      <h3>R$ {{ item.vlrDiaria }}</h3>
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
  color: blue;
}

.acomodacaoReserva img {
  border: 2px solid #1c6ea4;
  box-shadow: 5px 5px 15px 5px #000000;
  width: 25%;
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
