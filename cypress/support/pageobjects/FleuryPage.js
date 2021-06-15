/// <reference types= "Cypress" />

import FleuryElements from '../elements/FleuryElements'
const fleuryElements = new FleuryElements
const url = Cypress.config("baseUrl")

class FleuryPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de Unidades do site
    clicarBotaoUnidade() {
        cy.get(fleuryElements.botaoUnidades()).contains('Unidades').click()
        
    }

     // Clica na opção de Facilidades
     clicarOpcaoFacilidades(){
         cy.get(fleuryElements.caixaFacilidades()).click()
     }
  
     //Escolher entre 1 a 3 opções de Facilidade
    EscolherOpcoes(){
        cy.get(fleuryElements.opcaoFacilidade()).contains('Próximo ao metrô').click()
        cy.get(fleuryElements.opcaoFacilidade()).contains('Vacinação').click()
        
    }

    //Clica no botão ver detalhes da Unidade disponivel
    clicarVerDetalhes(){
        cy.get(fleuryElements.botaoVerdetalhes()).contains('Ver detalhes').click()
    }

    // Validar o Nome da Unidade na Pagina Final
    validarNomeUnidade() {
        cy.get(fleuryElements.nomeUnidade()).should('contain', 'Paraíso')
    }
}

export default FleuryPage;