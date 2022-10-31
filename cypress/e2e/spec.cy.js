describe('empty spec', () => {
  it('should render reservation cards after a fetch', () => {
    cy.intercept('GET', 'http://localhost:3001/reservations')
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > h3')
  })
  it('should be able add a reservation', () => {
    cy.get('#name')
      .type('Cole Anthony')
      .get('#date')
      .type('2022-10-15')
      .get('#time')
      .type('11:40')
      .get('#number')
      .type('2')
      .get('button.inputs').click()
      .get(':nth-child(10) > h3').contains('Cole Anthony')
  })
  
})