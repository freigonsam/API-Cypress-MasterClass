/// <reference types="cypress"/>

describe('Buscar Dispositivo', () => {

    it('Buscar dispositivo existente', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3'
        })
            .then((response) => {

                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal('3')
            })
    })

    it('Buscar dispositivo inexistente', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/xpto',
            failOnStatusCode: false
        })
            .then((response) => {

                expect(response.status).to.equal(404)
                expect(response.body.error).to.equal("Oject with id=xpto was not found.")              })
            })
    })

    it('Buscar dispositivo padrão', () => {

    })