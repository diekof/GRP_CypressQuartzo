/// <reference types="Cypress" />

import BaseElements from '../elements/BaseElements'
import AcaoElements from '../elements/AcaoElements'

const acaoElements = new AcaoElements;
const baseElements = new BaseElements;

class AcaoPage {

    preencherCampos(pacao_nome, pacao_descricao){

        cy.get(acaoElements.campo_nome())
        .clear()
        .type(pacao_nome);

        cy.get(acaoElements.campo_descricao())
            .clear()
            .type(pacao_descricao);
    }

}

export default AcaoPage;
