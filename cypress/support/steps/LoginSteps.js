/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

defineParameterType({
    regexp: /"([^"]*)"/,
    transformer: function(s) {
        return s;
    },
    name: "user"
})

defineParameterType({
    regexp: /"([^"]*)"/,
    transformer: function(s) {
        return s;
    },
    name: "pwd"
})

defineParameterType({
    regexp: /"([^"]*)"/,
    transformer: function(s) {
        return s;
    },
    name: "expected_message",
    useForSnippets: false
})

Given("que eu acesso a página principal", () => {
    loginPage.acessarSite();
})

When('eu faço login com {user} e {pwd}', (user, pwd) => {
    loginPage.logarComo(user,pwd);
})

Then('devo ser autenticado com sucesso',() => {
    loginPage.authenticadoComSucesso();
})

And('devo ver a seguinte mensagem {expected_message}', (expected_message) => {
    loginPage.checagemUsuarioLogado(expected_message);
})

And ('devo ter acesso a página inicial',() => {
    loginPage.acessoHome();
})