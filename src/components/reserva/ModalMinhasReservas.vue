<template>
  <!-- Modal MinhasReservas -->
  <div class="modal" tabindex="-1" id="modalMinhasReservas">
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
          <h4>Suas ultimas reservas, {{ userLoged }}</h4>
          <div class="ultimasReservas">
            <table class="tableReserva">
              <thead>
                <tr>
                  <th data-type="text-long">
                    Data Reserva <span class="resize-handle"></span>
                  </th>
                  <th data-type="text-long">
                    CheckIn <span class="resize-handle"></span>
                  </th>
                  <th data-type="text-long">
                    CheckOut <span class="resize-handle"></span>
                  </th>
                  <th data-type="numeric">
                    Qt Pessoas <span class="resize-handle"></span>
                  </th>
                  <th data-type="text-long">
                    Vlr Total <span class="resize-handle"></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="ultimasReservas"
                  v-for="item in reservas2"
                  :key="item"
                >
                  <td>{{ item.dtReserva }}</td>
                  <td>{{ item.dtCheckIn }}</td>
                  <td>{{ item.dtCheckOut }}</td>
                  <td>{{ item.qtPessoas }}</td>
                  <td>{{ item.vlrTotal }}</td>
                  <td><a class="links" href="">Comentário</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- FINAL DO CONTEÚDO -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Fechar
        </button>
      </div>
    </div>
  </div>
  <!-- Fim Modal MinhasReservas -->
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
      userLoged: localStorage.getItem("loged"),
    };
  },
  methods: {
    abreModal() {
      var modal = new bootstrap.Modal(
        document.querySelector("#modalMinhasReservas"),
        {
          keyboard: false,
        }
      );
      return modal;
    },
    
    // força refresh do componente...
    // https://michaelnthiessen.com/force-re-render/
    methodThatForcesUpdate() {
      // ...
      this.$forceUpdate(); // Notice we have to use a $ here
      // ...
    },
    
    alerta() {
      //
    },
  },
  computed: {
    reservas() {
      return this.$store.getters.reservas;
    },
    reservas2() {
      //let arrayReservas = [];
      //let arrayReservas = localStorage.getItem("Reserva_1");
      //console.log("ModalMinhasReservas computed reservas2", arrayReservas);
      //console.log("ModalMinhasReservas computed reservas2", arrayReservas[0]);
      //var msg = JSON.parse('{"canApprove": true,"hasDisplayed": false}');
      //alert(msg.canApprove);  //shows true.
      //var msg = JSON.parse('{"canApprove": "bosta","hasDisplayed": "merda"}');
      //var msg2=JSON.parse('{"dtReserva":"07/01/2023","codCliente":"fcervant@gmail.com","dtEntrada":"07/01/2023","dtSaida":"09/01/2023","qtPessoas":"2","tipoApto":"master","diarias":"2","vlrTotal":"R$ 2.400,00","vlrTotalcomDesconto":"R$ 2.400,00","cupom":"k155gcd"}');
      //var msg3=arrayReservas
      // var msg2=JSON.parse('{"dtReserva": "07/01/2023","codCliente": "fcervant@gmail.com"}');
      //console.log("ModalMinhasReservas computed reservas2 msg", msg.canApprove);
      //console.log("ModalMinhasReservas computed reservas2 msg2", msg2.codCliente);
      //console.log("ModalMinhasReservas computed reservas2 msg3", msg3,msg3.codCliente);
      // arrayReservas.push(localStorage.getItem("Reserva_2"));
      // console.log("ArrayReservas", arrayReservas);
      // let teste = JSON.stringify(localStorage.getItem("Reserva_1"))
      // console.log("Teste",teste)
      for (var i = 0; i < localStorage.length; i++) {
        // do something with localStorage.getItem(localStorage.key(i));
        // console.log("Reservas2 localStorage Key",localStorage.key(i))
        if (localStorage.key(i).includes("Reserva_")) {
          console.log(
            "Reservas 2 Computed modal - Reservas anteriores",
            localStorage.key(i),
            localStorage.getItem(localStorage.key(i))
          );
          // console.log("dtReserva",localStorage.getItem(localStorage.key(i)))
          // console.log("Array",JSON.stringify(localStorage.getItem(localStorage.key(i))).dtEntrada)
        }
      }

      // <td>{{ item.dtReserva }}</td>
      // <td>{{ item.dtCheckIn }}</td>
      // <td>{{ item.dtCheckOut }}</td>
      // <td>{{ item.qtPessoas }}</td>
      // <td>{{ item.vlrTotal }}</td>
      // dtReserva: item.dtReserva,
      // dtCheckIn: item.dtEntrada,
      // dtCheckOut: item.dtSaida,
      // qtPessoas: item.qtPessoas,
      // vlrTotal: item.vlrTotalcomDesconto,
      let arrayTeste = [
        {
          dtReserva: "04/01/2023",
          codCliente: "cod Cliente",
          dtCheckIn: "05/01/2023",
          dtCheckOut: "09/01/2023",
          qtPessoas: "2",
          tipoApto: "family",
          vlrTotal: "R$ 2.200,00",
        },
        {
          dtReserva: "05/01/2023",
          codCliente: "cod Cliente",
          dtCheckIn: "06/01/2023",
          dtCheckOut: "12/01/2023",
          qtPessoas: "2",
          tipoApto: "family",
          vlrTotal: "R$ 3.200,00",
        },
      ];
      return arrayTeste;
    },
  },
  mounted() {
    //
  },
};
</script>

<style scoped>
.modal-body {
  color: black;
}
.tableReserva * {
  box-sizing: border-box;
  font-size: 0.8rem;
}

.tableReserva html,
body {
  padding: 0;
  margin: 0;
}

.tableReserva body {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.tableReserva table {
  min-width: 100vw;
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  /* These are just initial values which are overriden using JavaScript when a column is resized */
  grid-template-columns:
    minmax(auto, auto)
    minmax(auto, auto)
    minmax(auto, auto)
    minmax(auto, auto)
    minmax(auto, auto);
}

.tableReserva th,
td {
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tableReserva th {
  position: sticky;
  top: 0;
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 0.8rem;
  color: white;
}

.tableReserva th:last-child {
  border: 0;
}

.tableReserva td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
}

.tableReserva tr:nth-child(even) td {
  background: #f8f6ff;
}

.tableReserva .links {
  text-decoration: none;
  color: black;
  padding: 0.4em;
}
</style>
