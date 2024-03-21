describe('template spec', () => {
  it('successful password change', () => {

    //базовая успешная авторизация

    cy.visit('https://dev.profteam.su');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerInstitution');
    cy.get('.form-input--password').type('QWEasd1234');
    cy.get(':nth-child(3) > .button').click();
    cy.wait(2000);

    // успешное изменение пароля

    cy.get(':nth-child(1) > .form-input--password').type('QWEasd1234');
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-input--password').type('QWEasd1234');
    cy.get('.form__buttons > div > .button').click();
    cy.wait(2000)
    cy.get('.form__buttons > div > p').should('have.text', 'Пароль успешно изменён!')
  })
})
