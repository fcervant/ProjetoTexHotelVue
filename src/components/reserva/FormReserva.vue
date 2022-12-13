<!--  npm install bootstrap -->
<!--  npm install bootstrap -->

<template>
  <div class="FormReserva">
    <!--<h1>{{ msg }}</h1>
    <h2>Componente FormReserva.vue</h2>
    <p>Teste</p> -->
    <h1>Minha Reserva</h1>
    <br />
    <h3>Forneça a data de entrada, saída e quantidade de pessoas.</h3>
    <br />
    <p id="msgAlerta">msgAlerta</p>
    <div class="minhaReserva form">
      <label for="dtEntrada">Entrada</label>
      <!-- <input type="date" id="dtEntrada" name="dtEntrada" value="2022-11-16" /> -->
      <input type="date" id="dtEntrada" name="dtEntrada" v-model="dtEntrada" />
      <label for="dtSaida">Saida</label>
      <input type="date" id="dtSaida" name="dtSaida" v-model="dtSaida" />
      <label for="qtPessoas">Quantidade Pessoas</label>
      <input type="number" id="qtPessoas" name="qtPessoas" value="1" />
      <!-- manter botão aqui para agilizar os testes...-->
      <button type="button" class="btn" id="btnResumo">Fechar reserva!</button>
      <button type="button" class="btn" id="btnConfirma">Modal Confirma</button>
    </div>
  </div>
</template>

<script>
var jQuery = require("jquery");
window.jQuery = jQuery;
window.$ = jQuery;

export default {
  name: "FormReserva",
  props: {
    msg: String,
  },
  data() {
    return {
      //
      // tipo: "pratosQuentes",
      dtEntrada: new Date().toISOString().substring(0, 10),
      dtSaida: new Date().toISOString().substring(0, 10),
      qtPessoas: 1,
    };
  },
  computed: {
    // produtos() {
    //   return this.$store.$state.produtos.pratosQuentes;
    // },
    // loja() {
    //   console.log(this.tipo);
    //   return this.$store.getters.loja(this.tipo);
    // },
  },
  mounted() {
    // força primeira atualização da localStorage
    atualizaLocalStorage();

    // jquery criado antes que identifica mudanças no form e atualiza localStorage e tela
    // deve ter um outro jeito em VUEX...
    window.$("#dtEntrada").change(function () {
      console.log("mudou dt entrada");
      atualizaLocalStorage();
    });

    window.$("#dtSaida").change(function () {
      console.log("mudou dt saida");
      atualizaLocalStorage();
    });

    window.$("#qtPessoas").change(function () {
      console.log("mudou qt pessoas");
      atualizaLocalStorage();
    });

    window.$("input[type=radio][name=tipoApto]").change(function () {
      if (this.value == "Master") {
        console.log("Selecionou Master");
      } else if (this.value == "Family") {
        console.log("Selecionou Family");
      } else {
        console.log("Selecionou Comfort");
      }
      atualizaLocalStorage();
    });

    // confirmação da reserva e display da modal de confirmação
    window.$().ready(function () {
      window.$("#btnResumo").click(function () {
        let check = false;
        // executa function para checar dados da reserva...
        check = confirmaReserva();
        // check = msgAula();
        console.log("btnResumo - Check ", check);

        if (check) {
          window.$("#modalResumo").modal("show");
          preencheModalResumo();
        }
      });
    });
    window.$().ready(function () {
      window.$("#btnServicos").click(function () {
        window.$("#modalServicos").modal("show");
      });
    });
    window.$().ready(function () {
      window.$("#btnConfirma").click(function () {
        window.$("#modalConfirma").modal("show");
      });
    });
  },
};

// verificar depois se estes scripts podem ser transferidos para a store...
// rotina para atualização dos dados na localStorage sempre que houver uma alteração nos campos do form / tipo de suite
export function atualizaLocalStorage() {
  // variaveis form Reservas
  let dtEntrada,
    dtSaida,
    qtPessoas,
    tipoApto,
    dateStart,
    dateEnd,
    dateStartAux,
    difDates,
    dateEndAux,
    dateReserva;

  // armazena a data atual como data do dia da reserva...
  dateReserva = formatDate(new Date());

  // limpa variavel de valor total com desconto...estava variavel só é gerada na confirmação
  localStorage.removeItem("vlrTotalDesconto");

  // verifica dados input
  dtEntrada = document.querySelector("#dtEntrada").value;
  dtSaida = document.querySelector("#dtSaida").value;
  qtPessoas = document.querySelector("#qtPessoas");
  tipoApto = document.querySelector('input[name = "tipoApto"]:checked').value;

  // inicializa localStorage - datas
  dateStartAux = dtEntrada.split("-");
  console.log("dataemtradaaux", dateStartAux);
  dateStart = new Date(dateStartAux[0], dateStartAux[1] - 1, dateStartAux[2]);
  localStorage.setItem("dtEntrada", formatDate(dateStart));
  dateEndAux = dtSaida.split("-");
  dateEnd = new Date(dateEndAux[0], dateEndAux[1] - 1, dateEndAux[2]);
  localStorage.setItem("dtSaida", formatDate(dateEnd));

  localStorage.setItem("dtReserva", dateReserva);

  difDates = Math.ceil(dateEnd - dateStart) / (1000 * 60 * 60 * 24);
  localStorage.setItem("difDates", difDates);

  // inicializa localStorage - outros dados
  localStorage.setItem("qtPessoas", qtPessoas.value);
  localStorage.setItem("tipoApto", tipoApto);

  // atualiza dados na tela
  document.getElementById("dtCheckin").innerHTML = `<b> ${localStorage.getItem(
    "dtEntrada"
  )} </b>`;
  document.getElementById("dtCheckout").innerHTML = `<b> ${localStorage.getItem(
    "dtSaida"
  )} </b>`;
  document.getElementById("qtHospedes").innerHTML = `<b> ${localStorage.getItem(
    "qtPessoas"
  )} </b>`;
  document.getElementById(
    "tipoAcomodacao"
  ).innerHTML = `<b> ${localStorage.getItem("tipoApto")} </b>`;

  // teste com localStorage...
  let index = 1;
  let a1 = "'dtEntrada':'01/12/2022'";
  let a2 = "'qtPessoas':'5'";
  let array01 = [];
  let arrayStr = "";
  array01 = "{[";
  array01 = array01 + a1;
  array01 = array01 + `,${a2}`;
  array01 = array01 + "]}";

  //array01.push(a1);
  //array01.push(a2);
  index++;
  localStorage.setItem(`testeArray${index}`, arrayStr);

  arrayStr = array01.toString();

  // cria dados na localStorage em uma unica variavel - "Reserva_dd/mm/aaaa"
  let ReservaAux = "[{";
  ReservaAux =
    ReservaAux +
    `"dtEntrada":"${formatDate(dateStart)}","dtSaida":"${formatDate(
      dateEnd
    )}","qtPessoas":"${
      qtPessoas.value
    }","difDates":"${difDates}","tipoApto":"${tipoApto}"}]`;

  console.log("localstorage dtReserva", `Reserva_${formatDate(dateReserva)}`);
  localStorage.setItem(`Reserva_${formatDate(dateReserva)}`, ReservaAux);
  console.log(
    "atualizaLocalStorage...",
    dtEntrada,
    dtSaida,
    dateReserva,
    qtPessoas,
    tipoApto,
    difDates
  );
  return true;
}

export function formatDate(inputDate) {
  let date, month, year;

  // sem converter de novo, dá erro...
  date = new Date(inputDate).getDate();
  month = new Date(inputDate).getMonth() + 1;
  year = new Date(inputDate).getFullYear();

  date = date.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");
  console.log(inputDate, `${date}/${month}/${year}`);
  return `${date}/${month}/${year}`;
}

export function checkInfo() {
  // recupera dados localStorage
  let msgReturn, dtEntrada, dtSaida, qtPessoas, tipoApto;
  msgReturn = [true, "Dados OK!"];
  dtEntrada = localStorage.getItem("dtEntrada");
  dtSaida = localStorage.getItem("dtSaida");
  qtPessoas = localStorage.getItem("qtPessoas");
  tipoApto = localStorage.getItem("tipoapto");

  if (checkData(dtEntrada) || checkData(dtSaida)) {
    msgReturn = [false, "Datas de entrada e/ou saída inválidas"];
  }
  let dataReserva = localStorage.getItem("dtReserva");

  if (
    processDate(dtEntrada) < processDate(dataReserva) ||
    dtEntrada == "" ||
    dtSaida == "" ||
    processDate(dtSaida) <= processDate(dtEntrada)
  ) {
    msgReturn = [false, "Datas de entrada e/ou saída inválidas"];
  }

  if (qtPessoas == 0) {
    msgReturn = [false, "Quantidade de pessoas inválido"];
  }

  if (tipoApto == "") {
    msgReturn = [false, "Tipo de apartamento não selecionado"];
  }

  console.log("CheckInfo...", dtEntrada, dtSaida, qtPessoas, tipoApto);
  console.log(
    "Datas: ",
    processDate(dtEntrada),
    new Date(),
    processDate(dtEntrada) < new Date()
  );
  console.log(checkData(dtEntrada), checkData(dtSaida));
  return msgReturn;
}

// processa data para efeito de comparação...
export function processDate(date) {
  var parts = date.split("/");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export function checkData(data) {
  return data instanceof Date && !isNaN(data);
}

export function confirmaReserva() {
  let validadorDados,
    dadosOk,
    qtdDiarias,
    vlrDiaria,
    valorTotalDiarias,
    servicosEscolhidos,
    valorTotalGeral,
    msgRetorno;

  // define dados dos quartos...
  const dadosQuartos = [
    { tipo: "master", diaria: 600, ocupacao: 6 },
    { tipo: "family", diaria: 400, ocupacao: 4 },
    { tipo: "comfort", diaria: 200, ocupacao: 1 },
  ];

  validadorDados = checkInfo();
  dadosOk = validadorDados[0];
  msgRetorno = validadorDados[1];

  // exibe mensagem de erro se necessário
  document.getElementById("msgAlerta").innerHTML = "";
  if (dadosOk == false) {
    document.getElementById("msgAlerta").innerHTML = `${msgRetorno}`;
    return false;
  }

  // preenche servicos na tela inicial
  // atualiza novamente a localStorage, a tela e prepara calculo
  atualizaLocalStorage();

  qtdDiarias = localStorage.getItem("difDates"); // recupera diferença dos dias da localStorage
  vlrDiaria = 0;

  //obter vlrDiaria do array de aptos
  dadosQuartos.some(function (entry) {
    if (entry.tipo == localStorage.getItem("tipoApto")) {
      vlrDiaria = entry.diaria;
    }
  });
  localStorage.setItem("valorDiaria", vlrDiaria);

  valorTotalDiarias =
    qtdDiarias * vlrDiaria * localStorage.getItem("qtPessoas");
  localStorage.setItem("valorTotalDiarias", currencyFormat(valorTotalDiarias));

  // calcula valor dos servicos, não dá pra persitir na localStorage pois não suporta arrays!
  let vlrTotalServico = 0;
  let linhaServico = "";
  //let i = 0;
  let vlrSomaServicos = 0;
  servicosEscolhidos = "";

  if (localStorage.getItem("servico1") == "true") {
    vlrTotalServico = 100 * qtdDiarias;
    vlrSomaServicos = vlrSomaServicos + vlrTotalServico;
    linhaServico = `Servico: Café manhã quarto. Valor dia : R$ 100,00 Total Período : ${currencyFormat(
      vlrTotalServico
    )}|`;
    console.log("Valor Serviço currency", currencyFormat(vlrTotalServico));
    servicosEscolhidos = servicosEscolhidos + linhaServico;
  }
  if (localStorage.getItem("servico2") == "true") {
    vlrTotalServico = 50 * qtdDiarias;
    vlrSomaServicos = vlrSomaServicos + vlrTotalServico;
    linhaServico = `Servico: Internet 5G. Valor dia : R$ 50,00 Total Período : ${currencyFormat(
      vlrTotalServico
    )}|`;
    servicosEscolhidos = servicosEscolhidos + linhaServico;
  }
  if (localStorage.getItem("servico3") == "true") {
    vlrTotalServico = 150 * qtdDiarias;
    vlrSomaServicos = vlrSomaServicos + vlrTotalServico;
    linhaServico = `Servico : Massagem terapéutica. Valor dia : R$ 150,00 Total Período : ${currencyFormat(
      vlrTotalServico
    )}|`;
    servicosEscolhidos = servicosEscolhidos + linhaServico;
  }
  if (localStorage.getItem("servico4") == "true") {
    vlrTotalServico = 200 * qtdDiarias;
    vlrSomaServicos = vlrSomaServicos + vlrTotalServico;
    linhaServico = `Servico : ChildrenCare. Valor dia : R$ 200,00 Total Período : ${currencyFormat(
      vlrTotalServico
    )}|`;
    servicosEscolhidos = servicosEscolhidos + linhaServico;
  }
  if (localStorage.getItem("servico5") == "true") {
    vlrTotalServico = 100 * qtdDiarias;
    vlrSomaServicos = vlrSomaServicos + vlrTotalServico;
    linhaServico = `Servico : PetCare. Valor dia : R$ 100,00 Total Período : ${currencyFormat(
      vlrTotalServico
    )}|`;
    servicosEscolhidos = servicosEscolhidos + linhaServico;
  }

  // console.log("servicosEscolhidos", servicosEscolhidos);
  // servicosEscolhidos.forEach((element) => {
  //   console.log(element);
  // });

  localStorage.setItem("servicosEscolhidos", servicosEscolhidos);
  localStorage.setItem("valorTotalServicos", currencyFormat(vlrSomaServicos));

  valorTotalGeral = vlrSomaServicos + valorTotalDiarias;

  localStorage.setItem("valorTotalGeral", currencyFormat(valorTotalGeral));
  console.log("confirmaReserva...");

  return true;
}

export function currencyFormat(strVlr) {
  // Intl.NumberFormat JavaScript has a number formatter (part of the Internationalization API).
  const options = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  const formatter = new Intl.NumberFormat("pt-BR", options);
  console.log(formatter.format(2500)); /* $2,500.00 */
  return formatter.format(strVlr); /* $2,500.00 */
}

export function preencheModalResumo() {
  const divServicos = document.getElementById("servicos");
  console.log("Entrei na preenche modal resumo.;;;", divServicos);
  const divDiarias = document.getElementById("diarias");
  console.log("Entrei na preenche modal resumo.;;;", divDiarias);
  const divTotal = document.getElementById("total");

  let servicosEscolhidos = "";
  localStorage.getItem("servicosEscolhidos") != null
    ? (servicosEscolhidos = localStorage
        .getItem("servicosEscolhidos")
        .split("|"))
    : "";

  // console.log("servicosEscolhidos", servicosEscolhidos);

  // limpa div para eliminar seleções anteriores...
  while (divServicos.hasChildNodes()) {
    divServicos.removeChild(divServicos.firstChild);
  }

  // limpa div para eliminar seleções anteriores...
  while (divDiarias.hasChildNodes()) {
    divDiarias.removeChild(divDiarias.firstChild);
  }

  // limpa div para eliminar seleções anteriores...
  while (divTotal.hasChildNodes()) {
    divTotal.removeChild(divTotal.firstChild);
  }

  // processo
  // cria elemento P
  let paraTexto = "";
  // atualiza div Diarias - apto selecionado, quantidade diarias, valor das diarias, nr de pessoas, valor total
  paraTexto =
    "Apto selecionado: " + localStorage.getItem("tipoApto") + "<br />";
  document.getElementById("diarias").appendChild(createPara(paraTexto));

  paraTexto =
    "Quantidade hospedes: " + localStorage.getItem("qtPessoas") + "<br />";
  document.getElementById("diarias").appendChild(createPara(paraTexto));

  paraTexto =
    "Quantidade diarias: " + localStorage.getItem("difDates") + "<br />";
  document.getElementById("diarias").appendChild(createPara(paraTexto));

  paraTexto =
    "Valor diaria: " +
    currencyFormat(localStorage.getItem("valorDiaria")) +
    "<br />";
  document.getElementById("diarias").appendChild(createPara(paraTexto));

  paraTexto =
    "Valor total diarias: " +
    localStorage.getItem("valorTotalDiarias") +
    "<br />";
  document.getElementById("diarias").appendChild(createPara(paraTexto));

  // atualiza div servicos se houver...
  if (servicosEscolhidos !== "") {
    servicosEscolhidos.forEach((element) => {
      paraTexto = element + "<br />";
      document.getElementById("servicos").appendChild(createPara(paraTexto));
    });
  } else {
    paraTexto = "<br />";
    document
      .getElementById("servicos")
      .appendChild(createPara("Sem serviços adicionais"));
  }

  // atualiza div total
  paraTexto =
    "Total diarias: " + localStorage.getItem("valorTotalDiarias") + "<br />";
  document.getElementById("total").appendChild(createPara(paraTexto));

  paraTexto =
    "Total servicos: " + localStorage.getItem("valorTotalServicos") + "<br />";
  document.getElementById("total").appendChild(createPara(paraTexto));

  paraTexto =
    "Total geral: " + localStorage.getItem("valorTotalGeral") + "<br />";
  document.getElementById("total").appendChild(createPara(paraTexto));

  console.log("preencheModal...");

  return true;
}

export function createPara(conteudo) {
  var para = document.createElement("p");
  para.innerHTML = conteudo;
  return para;
}

export function cupomDesconto() {
  let cupom = Math.random().toString(36).substring(2, 9);
  return cupom;
}

export function aplicaDesconto() {
  //
}

// document.querySelector("#cupom p").innerText = cupomDesconto();
// document.querySelector("#btnCupom").addEventListener("click", () => {
//   let desconto = resultado * 0.9;

//   // ternario
//   document.querySelector("#inputDesconto").value.toLowerCase() ==
//   document.querySelector("#cupom p").innerText
//     ? (document.querySelector(
//         "#totalCarrinho"
//       ).innerText = `R$ ${desconto.toFixed(2)}`)
//     : alert("Cupom inválido");
// });
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
a {
  color: #42b983;
}

.btn {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

#msgAlerta {
  color: red;
}
</style>

<!-- 
<template>
    <form>
        <input v-model="form.first_name"/>
        <input v-model="form.last_name"/>
        <input v-model="form.email"/>
    </form> 
</template>

<script>
    const defaultForm = {
        first_name: '',
        last_name: '',
        email: '',
    }  
    export default {
      data () {
        return {
            form: defaultForm
        }
      },
      computed: {
        hasChanged () {
          return Object.keys(this.form).some(field => this.form[field] !== defaultForm[field])
        }
      }
    }

   
</script> */ -->

<!-- parse a date in yyyy-mm-dd format
// export function parseDate(input) {
//   // input string como "Thu Dec 08 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)"
//   // var parts = input.match(/(\d+)/g);
//   var parts = input.split(" ");
//   // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
//   console.log(
//     "parseData",
//     input,
//     parts,
//     parts[0],
//     parts[1],
//     parts[2],
//     parts[3]
//   );
//   return new Date(parts[1], parts[2], parts[31]); // months are 0-based
// }
-->
