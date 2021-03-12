/* global Given, Then, When */

import BasePage from "../pageobjects/BasePage";
import LoginPage from "../pageobjects/LoginPage";
import AcaoPage from "../pageobjects/AcaoPage";

const basePage = new BasePage;
const loginPage = new LoginPage;
const acaoPage = new AcaoPage;

const { Before, After } = require("cypress-cucumber-preprocessor/steps");

Before(() => {
    loginPage.loginWith();
})

After(() => {
    cy.screenshot()
})

Given('que eu acesse a url {string}', (pagina) => {
    basePage.acessarPagina(pagina);
})

Given('eu cadastro uma nova ação',() => {

})

When('acesso o formulário de cadastro', () => {
    basePage.clicar_no_botao_inserir();

})

And('que eu tenho os seguintes valores', (dataTable) => {
    acaoPage.preencherCampos(dataTable.rawTable[1][1],dataTable.rawTable[2][1])
})

Then('confirmo os dados preenchidos', () => {
    basePage.clicar_no_botao_confirmar()
})

