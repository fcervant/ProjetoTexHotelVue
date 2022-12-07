// artigo sobre imagens na store...
// https://stackoverflow.com/questions/53412106/linking-to-images-referenced-in-vuex-store-in-vue-js
//

import { createStore } from "vuex";

export default createStore({
  state: {
    acomodacoes: [
      {
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
        id: "family",
        nome: "Family",
        descricaoLonga: "Descrição longa - Family",
        descricaoBreve:
          "Quarto amplo com duas camas tamanho king-size, para até 4 pessoas. Sala conjugada com TV de 50'' e programação livre (NetFlix, Prime e canais abertos). Sofá cama , frigobar, pia e cafeteira.",
        imgURL: require("/src/assets/images/reservas/room02_family.jpg"),
        qtPessoas: 6,
        vlrDiaria: 400,
      },
      {
        id: "comfort",
        nome: "Comfort",
        descricaoLonga: "Descrição longa - Comfort",
        descricaoBreve:
          "Cama confortável, TV a cabo e frigobar. Mesa de trabalho, internet e serviços adicionais sob consulta.",
        imgURL: require("/src/assets/images/reservas/room03_comfort.jpg"),
        qtPessoas: 2,
        vlrDiaria: 200,
      },
    ],
  },

  getters: {
    acomodacoes: (state) => {
      let quartos_hotel = state.acomodacoes.map((item) => {
        return {
          id: item.id,
          nome: item.nome,
          descricaoLonga: item.descricaoLonga,
          descricaoBreve: item.descricaoBreve,
          imgURL: item.imgURL,
          qtPessoas: item.qtPessoas,
          vlrDiaria: item.vlrDiaria,
        };
      });
      return quartos_hotel;
    },
  },
  mutations: {},
  actions: {},
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
