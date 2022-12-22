<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->
<!-- utilizar como <base href="// /home/fernandorc/Documentos/aulaVUE/projeto_spa" -->

<template>
  <div class="reservas">
    <div class="">
      <div>
        <FormReserva />
      </div>
    </div>
    <div id="painelEsquerdo" class="row justify-content-left">
      <div class="col-7">
        <PainelAcomodacoes />
      </div>
      <div class="col-3">
        <PainelReserva />
      </div>
    </div>
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
      //return
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

#text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4em;
  color:black;
}
.reservas {
  background-color: #f3ede3;
  padding: 2vw;
}
.reservas h1 {
  
  margin: 5px 5px 5px 5px;
}

#painelEsquerdo {
 
  margin: 1%;
}
</style>
