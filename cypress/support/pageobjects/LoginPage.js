/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
import BasePage from '../pageobjects/BasePage'
import NavbarPage from '../pageobjects/NavbarPage'

const loginElements = new LoginElements;
const basePage = new BasePage;
const navbarPage = new NavbarPage;

const url = Cypress.config("baseUrl")

class LoginPage {

    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    logarComo(usuario,senha) {

        cy.wait(500);

        cy.get(loginElements.campoUsuario())
            .clear()
            .then(e => { if (usuario !== '') cy.wrap(e).type(usuario) });

        cy.get(loginElements.campoSenha())
            .clear()
            .then(e => { if (senha !== '') cy.wrap(e).type(senha) });

        cy.get(loginElements.botaoLogin())
            .click();

    }
  
    //autenticado com sucesso
    authenticadoComSucesso(){        
        basePage.redirecionaHomePage();
    }

    acessoHome(){
        basePage.estounaHome()
    }

    checagemUsuarioLogado(expected_message){
        basePage.messagemAviso(expected_message)
    }

    logout(){
        navbarPage.logoutSistema();
    }
    
}

export default LoginPage;