import './reserva_commands'

  before(() => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            body: {
                "username": "admin",
                "password": "password123"
            },
        }).then((response) => {
            Cypress.env('token', response.body.token);
        });
    });