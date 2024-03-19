describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()

    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get(':nth-child(3) > .button').click()

  })
})