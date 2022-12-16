// artigo sobre imagens na store...
// https://stackoverflow.com/questions/53412106/linking-to-images-referenced-in-vuex-store-in-vue-js
//

import { createStore } from "vuex";

export default createStore({
  state: {
    // dados para servicos
    servicos: [
      {
        id: "servico1",
        nome: "servico1",
        label: "cafeQuarto",
        descricao: "Cafe da Manhã no Quarto",
        vlrDiaria: 100,
      },
      {
        id: "servico2",
        nome: "servico2",
        label: "5G",
        descricao: "Internet 5G",
        vlrDiaria: 50,
      },
      {
        id: "servico3",
        nome: "servico3",
        label: "massagem",
        descricao: "Massagem Terapéutica",
        vlrDiaria: 150,
      },
      {
        id: "servico4",
        nome: "servico4",
        label: "children",
        descricao: "Serviços ChildrenCare",
        vlrDiaria: 200,
      },
      {
        id: "servico5",
        nome: "servico5",
        label: "pet",
        descricao: "Serviços PetCare",
        vlrDiaria: 100,
      },
    ],

    // dados para acomodações
    acomodacoes: [
      {
        ordem: 1,
        id: "master",
        nome: "Master",
        descricaoLonga: "Descrição longa - Master",
        descricaoBreve:
          "Cama estilo queen-size com 05 funções de massagem, uma TV 4K de 50''com programação livre (NetFlix, Prime e canais abertos). Sala com sofá grande e uma poltrona de leitura, e uma TV de 45'', dispositivo Alexa, video-game (PS4 ou XBox) com jogos instalados. Mesa para notebook e cozinha funcional (mini-fogão elétrico, micro-ondas, cafeteira e utensílios básicos).",
        imgURL: require("/src/assets/images/reservas/room01_master.jpg"),
        qtPessoas: 6,
        vlrDiaria: 600,
      },
      {
        ordem: 2,
        id: "family",
        nome: "Family",
        descricaoLonga: "Descrição longa - Family",
        descricaoBreve:
          "Quarto amplo com duas camas tamanho king-size, para até 4 pessoas. Sala conjugada com TV de 50'' e programação livre (NetFlix, Prime e canais abertos). Sofá cama , frigobar, pia e cafeteira.",
        imgURL: require("/src/assets/images/reservas/room01_master.jpg"),
        qtPessoas: 6,
        vlrDiaria: 400,
      },
      {
        ordem: 3,
        id: "comfort",
        nome: "Comfort",
        descricaoLonga: "Descrição longa - Comfort",
        descricaoBreve:
          "Cama confortável, TV a cabo e frigobar. Mesa de trabalho, internet e serviços adicionais sob consulta.",
        imgURL: require("/src/assets/images/reservas/room01_master.jpg"),
        qtPessoas: 2,
        vlrDiaria: 200,
      },
    ],
  },

  getters: {
    // https://serversideup.net/sorting-in-vuejs-components-and-vuex-state/
    acomodacoes: (state) => {
      let quartos_hotel = state.acomodacoes.map((item) => {
        return {
          ordem: item.ordem,
          id: item.id,
          nome: item.nome,
          descricaoLonga: item.descricaoLonga,
          descricaoBreve: item.descricaoBreve,
          imgURL: item.imgURL,
          qtPessoas: item.qtPessoas,
          vlrDiaria: item.vlrDiaria.toFixed(2),
        };
      });
      return quartos_hotel;
    },
    servicos: (state) => {
      let servicos_hotel = state.servicos.map((item) => {
        return {
          id: item.id,
          nome: item.nome,
          label: item.label,
          descricao: item.descricao,
          vlrDiaria: item.vlrDiaria.toFixed(2),
        };
      });
      return servicos_hotel;
    },
  },
  mutations: {
    // methods - alteração dos dados - exemplo:
    // aplicaDesconto: (state, tipo) => {
    //   state.produtos[tipo].forEach((item) => {
    //     item.preco = (item.preco * 0.9).toFixed(2);
    //   });
    // },
    confirmaServicos: (state) => {
      console.log("Teste",state);
      // state.servicos.forEach((item) => {
      //   console.log(item.label);
      // });
    },
  },
  actions: {
    // yyy - confirmação das mutações - exemplo:
    // aplicaDesconto: (context, tipo) => {
    //   context.commit("aplicaDesconto", tipo);
    // },
    confirmaServicos: (context) => {
      context.commit("confirmaServicos");
    },
  },
  modules: {},
});

    //   // dados exemplo...
    //   produtos: {
    //     pratosQuentes: [
    //       { nome: "Lasanha", preco: 80 },
    //       { nome: "Feijoada", preco: 100 },
    //       { nome: "Salmão grelhado", preco: 140 },
    //       { nome: "File a Parmeggiana", preco: 240 },
    //     ],
    //     sobremesas: [
    //       { nome: "Quindim", preco: 20 },
    //       { nome: "Pudim", preco: 10 },
    //       { nome: "Sorvete", preco: 14 },
    //       { nome: "Bomba de Chocolate", preco: 16 },
    //     ],
    //   },
    // },

    // getter exemplo...

    //   getters: {
    //     loja: (state) => (tipo) => {
    //       let produtos_loja = state.produtos[tipo].map((item) => {
    //         return {
    //           nome: item.nome,
    //           preco: item.preco,
    //         };
    //       });
    //       return produtos_loja;
    //     },
    //   },
