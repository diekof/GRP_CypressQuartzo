/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que eu acesso a página principal", () => {
    loginPage.acessarSite();
})

When('eu faço login com {string} e {string}', (user, pwd) => {
    loginPage.logarComo(user,pwd);
})

Then('devo ser autenticado com sucesso',() => {
    loginPage.authenticadoComSucesso();
})

And('devo ver a seguinte mensagem {string}', (expected_message) => {
    loginPage.checagemUsuarioLogado(expected_message);
})

And ('devo ter acesso a página inicial',() => {
    loginPage.acessoHome();
})