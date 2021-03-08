/// <reference types="Cypress" />

import BaseElements from '../elements/BaseElements'

const baseElements = new BaseElements

class BasePage {

    messagemAviso(expected_message){
        // cy.get(baseElements.caixaMensagemWarning()).should('have.class', 'warnning');
        cy.get(baseElements.caixaMensagemWarning()).should('contain', expected_message);
        
    }

    estounaHome(){
        cy.get(baseElements.textoTituloHome()).should('contain', 'Início');
    }

    redirecionaHomePage(){
        //aguarda 5s
        cy.wait(5000);
        cy.window().then((win) => {
            const location = win.location.href;
            cy.visit(location.replace('__', 'bh_hml_quartzo/servlet'));
        });
    }
    

}

export default BasePage;
