<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->
<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->

<template>
  <div class="reservas">
    <h1>Teste - branch FCERVANT</h1>
  </div>
  <div>
    <FormReserva />
  </div>
  <hr />
  <div>
    <PainelAcomodacoes />
  </div>
  <hr />
  <div>
    <PainelReserva />
  </div>
  <hr />
  <div>
    <ModalConfirma />
  </div>
</template>

<script>
import FormReserva from "/src/components/reserva/FormReserva.vue";
import PainelAcomodacoes from "/src/components/reserva/PainelAcomodacoes.vue";
import PainelReserva from "/src/components/reserva/PainelReserva.vue";
import ModalConfirma from "/src/components/reserva/ModalConfirma.vue";

export default {
  name: "ReservasView",
  data() {
    // data
    return {
      // return
    };
  },
  components: { FormReserva, PainelReserva, PainelAcomodacoes, ModalConfirma },
};
</script>

<style scoped>
.reservas p {
  color: red;
}
.reservas h1 {
  color: brown;
  margin: 5px 5px 5px 5px;
}
</style>
