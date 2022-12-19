<template>
  <div class="PainelReserva">
    <p>{{ msg }}</p>
    <p>Componente PainelReserva.vue</p>
    <ModalServicos />
    <ModalResumo />
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
          <button type="button" class="btn" id="btnResumo">Confirmar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ModalServicos from "./ModalServicos";
import ModalResumo from "./ModalResumo";

export default {
  name: "PainelReserva",
  components: { ModalServicos, ModalResumo },
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

.btn {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

#btnResumo {
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
