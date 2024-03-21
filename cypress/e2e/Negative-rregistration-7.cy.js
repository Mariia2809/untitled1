describe('template spec', () => {
  it('registration error', () => {
    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/registration"] > .button').click()

    // ошибка при регистрации

    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('studentoik')
    cy.get('.form-input--email').type('studentikgmail.com')
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
        .wait(2000)
    cy.get('.form-error > span').should('have.text', 'Обязательное поле, некорректная почта')

  })
})