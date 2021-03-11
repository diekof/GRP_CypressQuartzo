/* global Given, Then, When */

import BasePage from "../pageobjects/BasePage";
const basePage = new BasePage;
import LoginPage from "../pageobjects/LoginPage"
const loginPage = new LoginPage;

// Before(() => {
//     loginPage.loginWith();
// })

// After(() => {
//     cy.screenshot()
// })

Given('que eu me autentique com sucesso',() => {
    loginPage.loginWith();
})

And('que eu acesse a url {string}', (pagina) => {
    basePage.acessarPagina(pagina);
})

Given('eu cadastro uma nova ação',() => {

})

When('eu clico no botão de inserir', () => {
    basePage.clicar_no_botao_inserir();
    basePage.clicar_no_botal_voltar();
})

Then('devo preencher os campos', () => {
    cy.log('Onde esta o erro?')
})
