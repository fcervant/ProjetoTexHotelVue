<template>
  <div class="conteudo">
    <AcomodacoesMain/>
  </div>
</template>
  
<script>
// @ is an alias to /src
import AcomodacoesMain from '@/components/acomodacoes/AcomodacoesMain.vue';

export default {
  name: 'AcomodacoesView',
  components: {
        AcomodacoesMain
  }
}
  
</script>

<style scoped>
.conteudo{
  margin-top: -1%;
}

</style>