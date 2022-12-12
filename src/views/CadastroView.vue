<template>
    <div class="cadastro">
        <section class="sec">
                <h2>CADASTRO DE HOSPEDES</h2>
                <form>
                    <fieldset class="formularios">
                        <br>
                        <div class="">
                            <label class="cadlabel" for="nome"><strong>Nome Completo</strong></label>
                            <input class="cadinput" type="text" name="nome" id="nomeCli" required>
                            <br>
                            <label class="cadlabel" for="telefone"><strong>Telefone</strong></label>
                            <input class="cadinput" type="number" name="telefone" id="telefoneCli" required>
                            <br>
                            <label class="cadlabel" for="email"><strong>Email</strong></label>
                            <input class="cadinput" type="email" name="email" id="emailCli" required>
                            <br>
                            <label class="cadlabel" for="dataNascimento"><strong>Data de Nascimento</strong></label>
                            <input class="cadinput" type="date" name="dataNascimento" id="datnascCli" required>
                            <br>
                            <label class="cadlabel" for="nacionalidade"><strong>Nacionalidade</strong></label>
                            <input class="cadinput" type="text" name="nacionalidade" id="nacionalidadeCli" required>
                            <br>
                        </div>
                        <div class="">
                            <label class="cadlabel" for="genero"><strong>Genero</strong></label>
                            <select class="cadselect" name="genero" id="genCli" required>
                                <option selected disabled value="">Selecione</option>
                                <option>Homem</option>
                                <option>Mulher</option>
                                <option>Pessoa não-binaria</option>
                                <option>Prefiro não informar</option>
                            </select>
                        </div>
                        <div class="">
                            <br>
                            <label class="cadlabel" for="endereco"><strong>Endereço</strong></label>
                            <br>
                            <textarea class="cadtextarea" rows="6" id="endCli" name="endereco"></textarea>
                        </div>
                        <br>
                        <div class="check">
                            <label for="notificaEmail"><strong>Notificações por E-mail?</strong></label>
                            <input class="checkbox" type="checkbox" id="npe" name="notificaEmail">
                        </div>
                    </fieldset>
                    <br>
                    <button class="button1" type="button" id="salvarCadastro">Salvar Cadastro</button>
                </form>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CadastroView',
      components: {
        
      }
}
</script>

<style scoped>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  overflow-x: hidden;
  background: #fff;
  min-height: 100vh;
}
  .sec {
  position: relative;
  padding: 2vw;
  background: #112434;
  transition: all 0.3s ease;
}
    
.cadinput,
.cadselect {
  display: inline-block;
  width: 8.1vw;
  margin: 2px;
}

.cadlabel {
  display: inline-block;
  width: 9vw;
  margin: 2px;
}

.cadtextarea {
  width: 17.3vw;
}

.cadcheck {
  display: flex;
  flex-direction: row;
}

.checkbox {
  width: 1vw;
  height: 2vh;
}

.sec h2 {
  font-size: 3em;
  color: #fff;
  margin-bottom: 1em;
}

.sec h3 {
  color: #fff;
  margin-bottom: 1em;
}

.sec h4 {
  color: #fff;
  margin-bottom: 1em;
}

.sec q {
  color: #fff;
}

.sec p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
}

.sec img,
.sec iframe {
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

.formularios {
  background-color: #112434;
  color: #fff;
  padding: 10px;
  font-size: 1.25rem;
}

.formularios li {
  list-style-type: none;
}

.button1 {
  background: white;
  color: #112434;
  padding: 0.4em;
  border-color: #fff;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1.5em;
}

.button1:hover {
  background: aquamarine;
  color: #112434;
  border-radius: 50px;
  padding: 0.4em;
  transform: translate(0px, -2px);
}
</style>