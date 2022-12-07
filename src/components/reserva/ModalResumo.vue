<template>
  <div class="ModalConfirma">
    <h1>{{ msg }}</h1>
    <h2>Componente ModalConfirma.vue</h2>
    <p>Teste ModalConfirma</p>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const bootstrap = require("bootstrap");

export default {
  name: "ModalConfirma",
  props: {
    // properties que vem da view que irá chamar o componente...
    msg: String,
  },
  data() {
    return {
      // informações que podem ser utilizadas no template...
    };
  },
  methods: {
    abreModal() {
      var modal = new bootstrap.Modal(
        document.querySelector("#modalConfirma"),
        {
          keyboard: false,
        }
      );
      return modal;
    },
  },
};
</script>

<style scoped>
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
p,
a {
  color: #2304ed;
}
</style>
