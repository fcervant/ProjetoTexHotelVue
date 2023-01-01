<template>
  <div class="PainelReserva">
    <!-- <p>{{ msg }}</p>
    <p>Componente PainelReserva.vue</p> -->
    <ModalServicos />
    <ModalResumo />
    <div class="resumo">
      <h3>Resumo da reserva</h3>
      <div class="gridReserva resumo form">
        <form action="">
          <h4>Apartamento:</h4>
          <span id="tipoAcomodacao">tipoApto</span>
          <br />
          <h4>Checkin:</h4>
          <p id="dtCheckin">dtCheckin</p>
          <br />
          <h4>Checkout:</h4>
          <p id="dtCheckout">dtCheckout</p>
          <br />
          <h4>Pessoas</h4>
          <p id="qtHospedes">qtHospedes</p>
          <br />
          <br />
          <span id="btnServicos">Adicionar mais serviços</span>
          <br />
          <br />
          <button type="button" class="button" id="btnResumoReserva">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
var jQuery = require("jquery");
window.jQuery = jQuery;
window.$ = jQuery;

import ModalServicos from "./ModalServicos";
import ModalResumo from "./ModalResumo";

import { confirmaReserva } from "./FormReserva.vue";
import { preencheModalResumo } from "./FormReserva.vue";

export default {
  name: "PainelReserva",
  components: { ModalServicos, ModalResumo },
  props: {
    msg: String,
  },
};

// confirmação da reserva e display da modal de confirmação
window.$().ready(function () {
  window.$("#btnResumoReserva").click(function () {
    let check = false;
    // executa function para checar dados da reserva...
    check = confirmaReserva();
    if (check) {
      window.$("#modalResumo").modal("show");
      preencheModalResumo();
    }
  });
});
</script>

<style scoped>
.resumo {
  border: 1px solid;
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
p,
a {
  color: #79382a;
}

.button {
  background: transparent;
  color: black;
  padding: 0.4em;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1.5em;
}

.button:hover {
  background: #112434;
  color: #fff;
  border-radius: 50px;
  padding: 0.4em;
}

.btn {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

btnResumo {
  background-color: white;
  border: none;
  color: blue;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
