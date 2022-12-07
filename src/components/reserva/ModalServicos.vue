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
          <!-- INÍCIO DO CONTEÚDO -->
          <h3>Selecione mais serviços!</h3>
          <div>
            <hr />
            <input
              type="checkbox"
              id="servico1"
              name="servico1"
              value="cafeQuarto"
            />
            <label for="servico1"> Cafe da Manhã no Quarto - R$ 100,00</label
            ><br />

            <input type="checkbox" id="servico2" name="servico2" value="5g" />
            <label for="servico2"> Internet 5G - R$ 50,00 </label><br />
            
            <input
              type="checkbox"
              id="servico3"
              name="servico3"
              value="massagem"
            />
            <label for="servico3"> Massagem Terapéutica - R$ 150,00 </label
            ><br />
            
            <input
              type="checkbox"
              id="servico4"
              name="servico4"
              value="children"
            />
            <label for="servico4"> Serviços ChildrenCare - R$ 200,00</label
            ><br />
            
            <input type="checkbox" id="servico5" name="servico5" value="pet" />
            <label for="servico5"> Serviços PetCare - R$ 100,00 </label>
            <br />
            <p></p>
            <p></p>
            <p></p>
            <hr />
            <p>
              Valores cobrados por diária - consulte nosso site para mais
              informações
            </p>
          </div>
          <!-- FINAL DO CONTEÚDO -->
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
  },
  mounted() {
    // this.abreModal().show();

    // deve ter outro jeito melhor de fazer isso...
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
