describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()

    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get(':nth-child(3) > .button').click()
    // cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""]').should('exist')

    // cy.get(':nth-child(1) > .form-input--password').type('QWEasd123');
    // cy.wait(2000)
    // cy.get(':nth-child(2) > .form-input--password').type('QWEasd1234');
    // cy.get('.form__buttons > div > .button').click();
    // cy.wait(2000)
    // cy.get('.form-error > span').should('exist')

    cy.get(':nth-child(1) > .form-input--password').type('QWEasd1234');
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-input--password').type('QWEasd1234');
    cy.get('.form__buttons > div > .button').click();
    cy.wait(2000)
    cy.get('.form__buttons > div > p').should('exist')
  })
})