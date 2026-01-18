/// <reference types="cypress"/>

describe("Cadastrar dispositivos", () =>{

    it("Cadastrar dispositivo com sucesso", () => {

        const payload = {
            name: 'Celular samula',
            data: {
                year: 2030,
                price: 200,
                "CPU model":"Intel i9",
                "Hard disk sizze": "1 TB",
            },
            }

        cy.request({
                method: "POST",
                url: "/objects",
                body: payload
            })
            .then((response)=>{

            });
        });
});