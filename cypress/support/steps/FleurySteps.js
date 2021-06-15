/* global Given, Then, When */

import FleuryPage from '../pageobjects/FleuryPage'
const fleuryPage = new FleuryPage

Given("acesso o site", () => {
    fleuryPage.acessarSite();
})

When("acesso a pagina da unidade", () => {
    fleuryPage.clicarBotaoUnidade();
    fleuryPage.clicarOpcaoFacilidades();
    fleuryPage.EscolherOpcoes();
    fleuryPage.clicarVerDetalhes();

})

Then("devo visualizar o nome da unidade", () => {
    fleuryPage.validarNomeUnidade();
    
})