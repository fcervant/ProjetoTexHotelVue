<!-- Header -->
<template>
    <nav>
        <header>
            <div class="navigation-drop">
                <input class="dropbtn" type="checkbox" id="Menu" />
                <label class="navigation-drop-btn" for="Menu">Menu</label>
                <div class="navigation-drop-content">
                    <ul>
                        <li><a href="" class="active">Home</a></li>
                        <li><a href="">Acomodações</a></li>
                        <li><a href="">RESERVAS</a></li>
                        <div class="campologindrop">
                            <form action="campologin" method="post">
                                <label for="login"><strong>USUARIO</strong></label>
                                <input class="box1" type="email" name="login" id="logindrop" />
                                <label for="password"><strong>SENHA</strong></label>
                                <input class="box1" type="password" name="password" id="passworddrop" />
                                <input class="button" type="submit" value="OK" />
                                <br />
                                <router-link to="/Cadastro">Cadastre-se!</router-link>
                                <a class="links" href="">Esqueceu sua senha?</a>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
            <div id="inicio" class="navigation">
                <div><router-link to="/">Home</router-link></div>
                <div><router-link to="/Acomodacoes">Acomodações</router-link></div>
                <div><router-link to="/Reservas">RESERVAS</router-link></div>
            </div>
            <div class="campologin">
                <form action="campologin" method="post">
                    <label for="login"><strong>USUARIO</strong></label>
                    <input class="box1 login" type="email" name="login" id="login" />
                    <label for="password"><strong>SENHA</strong></label>
                    <input class="box1 pswd" type="password" name="password" id="password" />
                    <input class="button btnLogin" type="button" value="OK" id="btnLogin" />
                    <br />
                    <router-link to="/Cadastro">Cadastre-se!</router-link>
                    <a class="links" href="">Esqueceu sua senha?</a>
                </form>
            </div>
            <div class="logedin hide">
                <p id="user"></p>
                <input class="button btnExit" id="btnExit" type="button" value="Sair" />
            </div>
        </header>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
};
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

header {
    position: absolute;
    margin-top: 0.5em;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1) ease;
}

.navigation-drop,
.navigation ul {
    display: none;
}

.navigation-drop-btn {
    background: transparent;
    color: black;
    padding: 6px 15px;
    border-radius: 50px;
    cursor: pointer;
    right: 1vw;
    top: 1vw;
}

.campologin,
.campologindrop,
.logedin {
    padding: 0.5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    transition: all 0.3s ease;
    align-content: center;
    flex-wrap: wrap;
}

.campologin a {
    text-decoration: none;
    color: #112434;
}

.campologin a:hover,
.campologin a.active {
    background: #112434;
    color: #fff;
    border-radius: 50px;
}

.button {
    background: transparent;
    color: black;
    padding: 0.4em;
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
    font-size: 1em;
}

.button:hover {
    background: #112434;
    color: #fff;
    border-radius: 50px;
    padding: 0.4em;
}

.links {
    text-decoration: none;
    color: black;
    padding: 0.4em;
}

.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1%;
    box-sizing: border-box;
    transition: all 0.3s ease;
}

.navigation div {
    padding-left: 2%;
    padding-right: 2%;
}

.navigation div a {
    text-decoration: none;
    color: #112434;
}

.navigation div a:hover,
.navigation div a.router-link-active {
    background: #112434;
    color: #fff;
    padding: 0.5em;
    border-radius: 50px;
}
</style>