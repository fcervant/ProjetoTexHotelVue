<template>
    <div class="secR">
      <div>
        <FormReserva/>
      </div>
      <div class="flexR">
        <div>
          <PainelAcomodacoes/>
        </div>
        <div>
          <PainelReserva/>
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
.secR {
  margin-top: -1%;
}

.secR > div{
  max-width: 90%;
  margin: 2% 5%; 
}

.flexR{
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 5%;  
}

.flexR > div{
  flex: 1 1 420px;
  margin: 10px;
}

</style>
