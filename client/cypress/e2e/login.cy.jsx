describe ("login", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse boton de Login", () =>{
        cy.get('.bg-neutral-600').contains("Login")
    })
})





