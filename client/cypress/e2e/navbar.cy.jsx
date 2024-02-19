describe ("Navbar", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse TU BLOG DE TAREAS", () =>{
        cy.get("h1").contains("TU BLOG DE TAREAS")
    })
})