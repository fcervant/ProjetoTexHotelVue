<template>
  <div class="PainelReserva">
    <h1>{{ msg }}</h1>
    <h2>Componente PainelReserva.vue</h2>
    <p>Teste PainelReserva</p>
    <ModalServicos />
    <ModalConfirma />
    <div class="resumo">
      <h1>Resumo da reserva</h1>
      <div class="gridReserva resumo form">
        <form action="">
          <h3>Apartamento:</h3>
          <span id="tipoAcomodacao">tipoApto</span>
          <br />
          <h3>Checkin:</h3>
          <p id="dtCheckin">dtCheckin</p>
          <br />
          <h3>Checkout:</h3>
          <p id="dtCheckout">dtCheckout</p>
          <br />
          <h3>Pessoas</h3>
          <p id="qtHospedes">qtHospedes</p>
          <br />
          <br />
          <span id="btnServicos">Adicionar mais serviços</span>
          <br />
          <br />
          <button type="button" class="btn btnPadrao" id="btnResumo">
            Confirmar
          </button>
          <!-- <button type="button" class="btn btnPadrao" id="btnConfirma">
                  Confirmar
                </button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ModalServicos from "./ModalServicos";
import ModalConfirma from "./ModalConfirma";

export default {
  name: "PainelReserva",
  components: { ModalServicos, ModalConfirma },
  props: {
    msg: String,
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
  color: #79382a;
}
</style>
