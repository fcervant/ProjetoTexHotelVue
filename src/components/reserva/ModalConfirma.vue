<template>
  <!-- Inicio Modal Resummo -->
  <div
    class="modal fade"
    id="modalResumo"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title"></h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- INÍCIO DO CONTEÚDO -->
          <h3>Veja o resumo de sua solicitação!</h3>
          <hr />
          <h2>Diárias</h2>
          <br />
          <div id="diarias">
            <p>...</p>
            <p></p>
          </div>
          <hr />
          <h2>Servicos Adicionais</h2>
          <br />
          <p></p>
          <div id="servicos">
            <p>...</p>
            <p></p>
          </div>
          <hr />
          <p>Total</p>
          <div id="total">
            <p>...</p>
            <p></p>
          </div>
          <hr />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Fim Modal Resumo-->
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { preencheModalResumo } from './FormReserva.vue';
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
  mounted() {
    // atualiza dados da modalConfirma
    preencheModalResumo();

  }
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
