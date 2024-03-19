describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()

    cy.get('.form-input--text').type('testerStudent')
    cy.wait(1000);

    cy.get('.form-input--password').type('password')
    cy.get(':nth-child(3) > .button').click()

    cy.get('.form-error').should('exist')
  // it('passes', () => {
  //   cy.visit('https://dev.profteam.su/')
  //   cy.get('[href="/password"] > .button').click()
  //
  //   cy.get('.form-input--text').type('testerStudent')
  //
  //   cy.get('.form-input--password').type('Password1')
  //   cy.get(':nth-child(3) > .button').click()

  })
})