describe ("login", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse boton de Login", () =>{
        cy.get("cy.get(':nth-child(2) > .bg-slate-100')").contains("Login")
    })
})




