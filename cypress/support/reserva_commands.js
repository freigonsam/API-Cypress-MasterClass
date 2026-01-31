Cypress.Commands.add('cadastrarReserva', (payload) => {
    cy.request({
        method: "POST",
        url: "/booking",
        body: payload
        })
})

Cypress.Commands.add('alterarReserva', (payload, id_reserva, token) => {
    cy.request({
        method: "PUT",
        url: `/booking/${id_reserva}`,
        body: payload,
        headers: {
            Cookie: `token=${token}`
        }
    })
})

Cypress.Commands.add('deletarReserva', (id_reserva, token) => {
    cy.request({
        method: "DELETE",
        url: `/booking/${id_reserva}`,
        headers: {
            Cookie: `token=${token}`
        }
    })
})