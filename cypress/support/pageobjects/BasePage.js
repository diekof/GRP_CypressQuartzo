/// <reference types="Cypress" />

import BaseElements from '../elements/BaseElements'

const baseElements = new BaseElements
// const loginPage = new LoginPage

class BasePage {

    loginWith(){
        // loginPage.logarComo(baseElements.usuario_global(),baseElements.senha_global());
        this.redirecionaHomePage();
        this.estounaHome();
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
        cy.wait(5000);
        cy.window().then((win) => {
            const location = win.location.href;
            cy.visit(location.replace('__', 'bh_hml_quartzo/servlet'));
        });
    }

    acessarPagina(pagina){
        cy.visit(pagina);
    }

    clicar_no_botao_inserir(){
        cy.get('#BTNINSERT').should('be.visible').click();
    }

    clicar_no_botal_voltar(){
        cy.get('#BTNTRN_CANCEL').should('be.visible').click();
    }
    

}

export default BasePage;
