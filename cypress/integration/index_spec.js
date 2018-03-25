describe('Calculatee Test Suite', function () {
  it('Visits Calculatee', function () {
    cy.visit('http://localhost:8080');
  });

  it('App say hello in green', function () {
    cy.contains('Hello Calculatee!! !!!');
    cy.get('h1:first-of-type').should('have.css', 'color', 'rgb(0, 128, 0)')
  })

  it('App calculate expression correctly', function () {
    cy.get('#expression').type('1+2+3+4');
    cy.get('#btn-eval')
      .click({ force: true })
      .get('#result')
      .debug()
      .should('have.value', '10');
  })
})