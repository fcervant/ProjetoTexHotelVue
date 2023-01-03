<template>
  <div class="secR">
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
import FormReserva from "@/components/reserva/FormReserva.vue";
import PainelAcomodacoes from "@/components/reserva/PainelAcomodacoes.vue";
import PainelReserva from "@/components/reserva/PainelReserva.vue";

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
@charset "UTF-8";

.secR {
  margin-top: -1%;
  background-color: #f4f2e7;
  background-image: linear-gradient(90deg, #f4f2e7 0%, #f7f4e9 46%, #efe5d5 100%);
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
