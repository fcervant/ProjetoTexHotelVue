<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->
<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->

<template>
  <div class="reservas">
    <div class="">
      <div>
        <FormReserva />
      </div>
      <hr />
    </div>
    <div id="painelEsquerdo" class="row justify-content-left">
      <div class="col-7">
        <PainelAcomodacoes />
      </div>
      <div class="col-3">
        <PainelReserva />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import FormReserva from "/src/components/reserva/FormReserva.vue";
import PainelAcomodacoes from "/src/components/reserva/PainelAcomodacoes.vue";
import PainelReserva from "/src/components/reserva/PainelReserva.vue";
//import ModalResumo from "/src/components/reserva/ModalResumo.vue";
//import ModalConfirma from "/src/components/reserva/ModalConfirma.vue";

export default {
  name: "ReservasView",
  data() {
    // data
    return {
      // return
    };
  },
  components: {
    FormReserva,
    PainelReserva,
    PainelAcomodacoes,
  },
};
</script>

<style scoped>
.reservas {
  background-color: #112434;
  color: white;
}
.reservas p {
  color: white;
}
.reservas h1 {
  color: white;
  margin: 5px 5px 5px 5px;
}

#painelEsquerdo {
  border: solid 2px;
  margin: 1%;
}
</style>
