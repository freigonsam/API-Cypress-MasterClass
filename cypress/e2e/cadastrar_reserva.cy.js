/// <reference types="cypress"/>

const dados_cadastro = require('../fixtures/cadastro_reserva.json')
const dados_update = require('../fixtures/update_reserva.json')

describe("Cadastrar reserva", () => {

    let token

    before(() => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            body: {
                "username": "admin",
                "password": "password123"
            },
        }).then((response) => {
            token = response.body.token
        })
    })

    it("Cadastrar reserva com sucesso", () => {
        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.bookingid).not.be.NaN
        });
    });

    it('Alterar reserva', () => {
        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);

            const id_reserva = response.body.bookingid;

            cy.alterarReserva(dados_update, id_reserva, token).then((response) => {
                expect(response.status).to.equal(200);
            });
        });
    });

    it('Deletar reserva', () => {

        cy.cadastrarReserva(dados_cadastro).then((response) => {
            expect(response.status).to.equal(200);

            const id_reserva = response.body.bookingid;

            cy.deletarReserva(id_reserva, token).then((response) => {
                expect(response.status).to.equal(201);
            });
        });
    });

});