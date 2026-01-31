/// <reference types="cypress"/>

const dados_cadastro = require('../fixtures/cadastro_reserva.json')
const dados_update = require('../fixtures/update_reserva.json')

describe('Alterar reserva', () => {

    it('Alterar reserva com Sucesso', () => {
        const token = Cypress.env('token');
        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);

            const id_reserva = response.body.bookingid;

            cy.alterarReserva(dados_update, id_reserva, token).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.deep.equal(dados_update);
                expect(response.body).to.have.property('firstname', dados_update.firstname);
                expect(response.body).to.have.property('lastname', dados_update.lastname);
                expect(response.body).to.have.property('totalprice', dados_update.totalprice);
                expect(response.body).to.have.property('depositpaid', dados_update.depositpaid);
                expect(response.body).to.have.property('bookingdates');
                expect(response.body.bookingdates).to.have.property('checkin', dados_update.bookingdates.checkin);
                expect(response.body.bookingdates).to.have.property('checkout', dados_update.bookingdates.checkout);
                expect(response.body).to.have.property('additionalneeds', dados_update.additionalneeds);
            });
        });
    });
});