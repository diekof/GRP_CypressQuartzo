/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
import BaseElements from '../elements/BaseElements'

import NavbarPage from '../pageobjects/NavbarPage'
import BasePage from '../pageobjects/BasePage'

const loginElements = new LoginElements;
const basePage = new BasePage;
const navbarPage = new NavbarPage;
const baseElements = new BaseElements;
const url = Cypress.config("baseUrl");

class LoginPage {

    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    loginWith(){
        this.acessarSite();
        this.logarComo(baseElements.usuario_global(),baseElements.senha_global());
        basePage.redirecionaHomePage();
        basePage.estounaHome();
    }

    // Clica no botão que acessa a página de login do site
    logarComo(usuario,senha) {

        cy.wait(100);

        cy.get(loginElements.campoUsuario())
            .focus()
            .should('be.visible')
            .should('be.enabled')
            .clear()
            .then(e => { if (usuario !== '') cy.wrap(e).type(usuario, { delay: 100 }).should('have.value',usuario)  });

        cy.get(loginElements.campoSenha())
            .focus()
            .should('be.visible')
            .should('be.enabled')  
            .clear()
            .then(e => { if (senha !== '') cy.wrap(e).type(senha, { delay: 100 }).should('have.value',senha) });

        cy.get(loginElements.botaoLogin())
            .should('be.visible')
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