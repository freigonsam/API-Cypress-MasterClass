/// <reference types="cypress"/>

const dados_cadastro = require('../fixtures/cadastro_reserva.json');

describe("Cadastrar reserva", () => {

    it("Cadastrar reserva com sucesso", () => {
        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('bookingid');
            expect(response.body.bookingid).not.be.NaN;
            expect(response.body).to.have.property('booking');
            expect(response.body.booking).to.deep.equal(dados_cadastro);
        });
    });
});