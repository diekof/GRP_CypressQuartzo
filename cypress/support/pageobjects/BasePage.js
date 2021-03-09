/// <reference types="Cypress" />

import BaseElements from '../elements/BaseElements'
import LoginPage from '../pageobjects/LoginPage'

const baseElements = new BaseElements
const loginPage = new LoginPage

class BasePage {

    loginWith(usuario,senha){
        loginPage.acessarSite();
        loginPage.logarComo(usuario,senha);
        loginPage.authenticadoComSucesso();
    }

    messagemAviso(expected_message){
        // cy.get(baseElements.caixaMensagemWarning()).should('have.class', 'warnning');
        cy.get(baseElements.caixaMensagemWarning()).should('contain', expected_message);
        
    }

    estounaHome(){
        cy.get(baseElements.textoTituloHome()).should('contain', 'Início');
    }

    redirecionaHomePage(){
        //aguarda 5s
        cy.wait(500);
        cy.window().then((win) => {
            const location = win.location.href;
            cy.visit(location.replace('__', 'bh_hml_quartzo/servlet'));
        });
    }
    

}

export default BasePage;
