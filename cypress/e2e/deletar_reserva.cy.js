/// <reference types="cypress"/>

const dados_cadastro = require('../fixtures/cadastro_reserva.json')

describe('Deletar reserva', () => {

    it('Deletar reserva', () => {
        const token = Cypress.env('token');
        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);

            const id_reserva = response.body.bookingid;

            cy.deletarReserva(id_reserva, token).then((response) => {
                expect(response.status).to.equal(201);
            });
        });
    });
});