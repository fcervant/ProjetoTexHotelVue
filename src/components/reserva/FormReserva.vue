<!--  npm install bootstrap -->
<!--  npm install bootstrap -->

<template>
  <div class="FormReserva">
    <h1>{{ msg }}</h1>
    <h2>Componente FormReserva.vue</h2>
    <p>Teste</p>
    <h1>Minha Reserva</h1>
    <br />
    <h3>Forneça a data de entrada, saída e quantidade de pessoas.</h3>
    <br />
    <p id="msgAlerta">msgAlerta</p>
    <div class="minhaReserva form">
      <label for="dtEntrada">Entrada</label>
      <input type="date" id="dtEntrada" name="dtEntrada" value="2022-11-16" />
      <label for="dtSaida">Saida</label>
      <input type="date" id="dtSaida" name="dtSaida" value="2022-11-30" />
      <label for="qtPessoas">Quantidade Pessoas</label>
      <input type="number" id="qtPessoas" name="qtPessoas" value="1" />
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
  mounted() {
    //
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
    dateEndAux;

  // let servicosEscolhidos = [];

  // verifica dados input
  dtEntrada = document.querySelector("#dtEntrada").value;
  dtSaida = document.querySelector("#dtSaida").value;
  qtPessoas = document.querySelector("#qtPessoas");
  tipoApto = document.querySelector('input[name = "tipoApto"]:checked').value;

  // inicializa localStorage - datas
  dateStartAux = dtEntrada.split("-");
  dateStart = new Date(dateStartAux[0], dateStartAux[1] - 1, dateStartAux[2]);
  localStorage.setItem("dtEntrada", dateStart);
  dateEndAux = dtSaida.split("-");
  dateEnd = new Date(dateEndAux[0], dateEndAux[1] - 1, dateEndAux[2]);
  localStorage.setItem("dtSaida", dateEnd);
  difDates = Math.ceil(dateEnd - dateStart) / (1000 * 60 * 60 * 24);
  localStorage.setItem("difDates", difDates);

  // inicializa localStorage - outros dados
  localStorage.setItem("qtPessoas", qtPessoas.value);
  localStorage.setItem("tipoApto", tipoApto);

  // atualiza dados na tela
  document.getElementById("dtCheckin").innerHTML = `<b> ${formatDate(
    localStorage.getItem("dtEntrada")
  )} </b>`;
  document.getElementById("dtCheckout").innerHTML = `<b> ${formatDate(
    localStorage.getItem("dtSaida")
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
  arrayStr = array01.toString();
  localStorage.setItem(
    `testeArray${index}`,
    "[{'dtEntrada':'01/12/2022','qtPessoas':5}]"
  );
  index++;
  localStorage.setItem(`testeArray${index}`, arrayStr);

  console.log(
    "atualizaLocalStorage...",
    dtEntrada,
    dtSaida,
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

  if (dtEntrada == "" || dtSaida == "" || dtSaida <= dtEntrada) {
    msgReturn = [false, "Datas de entrada e/ou saída inválidas"];
  }

  if (qtPessoas == 0) {
    msgReturn = [false, "Quantidade de pessoas inválido"];
  }

  if (tipoApto == "") {
    msgReturn = [false, "Tipo de apartamento não selecionado"];
  }

  console.log("CheckInfo...", dtEntrada, dtSaida, qtPessoas, tipoApto);
  return msgReturn;
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
    console.log("Valor Servicço currency", currencyFormat(vlrTotalServico));
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
  //const para = document.createElement("p");
  //const br = document.createElement("br");

  const divServicos = document.getElementById("servicos");
  const divDiarias = document.getElementById("diarias");
  const divTotal = document.getElementById("total");

  let servicosEscolhidos = "";
  localStorage.getItem("servicosEscolhidos") !== ""
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
