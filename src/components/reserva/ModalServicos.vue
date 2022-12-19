<template>
  <!-- Modal Servicos -->
  <div class="modal" tabindex="-1" id="modalServicos">
    <div class="modal-dialog modal-lg">
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
          <!-- INÍCIO DO CONTEÚDO ajustado para trazer da store...-->
          <h3>Selecione mais serviços!</h3>
          <hr />
          <div class="painelServicos" v-for="item in servicos" :key="item">
            <input
              type="checkbox"
              v-model="checked"
              :id="item.id"
              :name="item.name"
              :value="item.label"
            />
            <label>{{ item.descricao }} - R$ {{ item.vlrDiaria }} </label>
            <br />
          </div>
          <hr />
          <p>
            Valores cobrados por diária - consulte nosso site para mais
            informações
          </p>
        </div>
        <button class="btn btn-secondary" @click="confirmaServicos">
          Confirma Serviços
        </button>
        <!-- FINAL DO CONTEÚDO -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Fechar
        </button>
      </div>
    </div>
  </div>
  <!-- Fim Modal Servicos -->
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const bootstrap = require("bootstrap");

var jQuery = require("jquery");
window.jQuery = jQuery;
window.$ = jQuery;

export default {
  name: "ModalView",
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
        document.querySelector("#modalServicos"),
        {
          keyboard: false,
        }
      );
      return modal;
    },
    alerta() {
      //
    },
    confirmaServicos() {
      alert("Serviços adicionais incluídos! Obrigado!");
      window.$("#modalServicos").modal("hide");
    },
  },
  computed: {
    servicos() {
      return this.$store.getters.servicos;
    },
  },
  mounted() {
    // this.abreModal().show();

    // deve ter outro jeito melhor de fazer isso...
    // cria array para controle de servicos
    // let arrayServicos = JSON.stringify(this.servicos);
    console.log("Servicos da store...", this.servicos);
    
    // para entender melhor o comportamento de json - string - array...
    // let arrayServicos = JSON.stringify(this.servicos);
    // localStorage.setItem("testeServicos", JSON.stringify(this.servicos));
    // console.log("arrayServico", arrayServicos);
    // let objJson = JSON.parse(arrayServicos);
    // console.log("objJson", objJson);
    // console.log("objJson", objJson[0].id);
    // for (let i = 0; i < this.servicos.length; i++) {
    //   console.log(this.servicos[i].id);
    //   let servico = `"${this.servicos[i].id}"`;
    //   console.log(servico)
    //   console.log(window.$(#servico).is(":checked"))
      
    // }

    window.$("#servico1").click(function () {
      if (window.$("#servico1").is(":checked")) {
        localStorage.setItem("servico1", true);
      } // checked
      else {
        localStorage.setItem("servico1", false);
      } // unchecked
    });
    window.$("#servico2").click(function () {
      if (window.$("#servico2").is(":checked")) {
        localStorage.setItem("servico2", true);
      } // checked
      else {
        localStorage.setItem("servico2", false);
      } // unchecked
    });
    window.$("#servico3").click(function () {
      if (window.$("#servico3").is(":checked")) {
        localStorage.setItem("servico3", true);
      } // checked
      else {
        localStorage.setItem("servico3", false);
      } // unchecked
    });
    window.$("#servico4").click(function () {
      if (window.$("#servico4").is(":checked")) {
        localStorage.setItem("servico4", true);
      } // checked
      else {
        localStorage.setItem("servico4", false);
      } // unchecked
    });
    window.$("#servico5").click(function () {
      if (window.$("#servico5").is(":checked")) {
        localStorage.setItem("servico5", true);
      } // checked
      else {
        localStorage.setItem("servico5", false);
      } // unchecked
    });
  },
};
</script>

<style scoped>
.modal-body {
  color: black;
}
</style>
