describe ("Taskspage", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173")
    })
    it("Deberia mostrarse Tareas", () =>{
        cy.get("h1").contains("Tareas")
    })
})
