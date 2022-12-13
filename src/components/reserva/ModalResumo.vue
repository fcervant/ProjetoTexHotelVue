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
          <!-- inicio div Resumo -->
          <div id="bodyResumo">
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
          <!-- Fim body Resumo-->
          <!-- Inicio body confirma-->
          <div id="bodyConfirma">
            <h3>Confirme sua reserva</h3>
            <h2>Seu cupom de desconto: {{ cupomDesconto }}</h2>
            <div class="mt-2 pt-2 d-flex flex-start">
              <label for="">Aplicar Cupom de Desconto: </label>
              <input
                id="inputDesconto"
                class="w-50 inputPadrao bg-light px-3 text-uppercase fw-bold"
                type="text"
              />
              <button id="btnCupom" type="button" class="btn btn-secondary">
                Aplicar Cupom
              </button>
            </div>
            <hr />
            <p id="totalDesconto"></p>
            <hr />
          </div>
        </div>
        <!-- fim body confirma -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Fechar
        </button>
        <button type="button" id="btnConfirma" class="btn btn-secondary">
          Confirma!
        </button>
        <!-- <a data-dismiss="modal" data-toggle="modal" href="#modalConfirma"
          >Click</a
        > -->
      </div>
      <!-- fim modal -->
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const bootstrap = require("bootstrap");

import { preencheModalResumo } from "./FormReserva.vue";
import { cupomDesconto } from "./FormReserva.vue";

// gera cupom de desconto caso não exista nenhum. Se já houver a mensagem é que não podem ser gerados dois cupons no mesmo dia...
let msgCupomDesconto = "Lamento, um cupom de desconto já foi utilizado hoje...";
if (localStorage.getItem("cupomDesconto") != "") {
  localStorage.setItem("cupomDesconto", cupomDesconto());
  msgCupomDesconto = localStorage.getItem("cupomDesconto");
} else {
  localStorage.setItem("cupomDesconto", msgCupomDesconto);
}

var jQuery = require("jquery");
window.jQuery = jQuery;
window.$ = jQuery;

export default {
  name: "ModalResumo",
  props: {
    // properties que vem da view que irá chamar o componente...
    msg: String,
  },
  data() {
    return {
      // informações que podem ser utilizadas no template...
      cupomDesconto: localStorage.getItem("cupomDesconto"),
      totalGeralDesconto: localStorage.getItem("vlrTotalDesconto"),
    };
  },
  methods: {
    abreModal() {
      var modal = new bootstrap.Modal(document.querySelector("#modalResumo"), {
        keyboard: false,
      });
      return modal;
    },
  },
  computed: {
    //
  },
  mounted() {
    // atualiza dados da modalResumo
    preencheModalResumo();
  },
};

// // aplica cupom...
// window.$().ready(function () {
//   window.$("#btnCupom").click(function () {
//     let cupomEntry = window.$.document
//       .querySelector("#inputDesconto")
//       .value.toLowerCase();
//     let cupomStorage = localStorage.getItem("cupomDesconto");
//     let desconto = localStorage.getItem("valorTotalGeral") * 0.9;

//     // ternario
//     cupomEntry == cupomStorage
//       ? localStorage.setItem("vlrTotalDesconto", `R$ ${desconto.toFixed(2)}`)
//       : alert("Cupom inválido");
//   });
// });

window.$().ready(function () {
  // confirmação da reserva...
  window.$("#btnConfirma").click(function () {
    console.log("Cliquei na confirmação...");
    // window.$("#modalResumo").modal("hide");
    // window.$("#modalConfirma").modal("show");
    // let element = window.$.document.getElementById("bodyConfirma");
    // element.removeAttribute("hidden");
    // para esconder novamente a grade de confirmação...
    //element.setAttribute("hidden", "hidden");
  });
  // aplica cupom...
  window.$("#btnCupom").click(function () {
    let cupomEntry = document
      .querySelector("#inputDesconto")
      .value.toLowerCase();
    let cupomStorage = localStorage.getItem("cupomDesconto");
    let vlrTotalGeral = localStorage.getItem("valorTotalGeral").split("$");
    let desconto = parseFloat(vlrTotalGeral[1].replace(".", "")) * 0.9;
    // ternario
    cupomEntry == cupomStorage
      ? localStorage.setItem("vlrTotalDesconto", `R$ ${desconto.toFixed(2)}`)
      : alert("Cupom inválido");
    let msg = `Total Geral com Desconto....: R$ ${desconto.toFixed(2)}`;
    document.getElementById("totalDesconto").innerText = msg;
  });
});
</script>

<style scoped>
h3 {
  font-size: 20px;
  margin: 20px 0 0;
  color: red;
}

h2 {
  font-size: 15px;
  margin: 20px 0 0;
  color: black;
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
