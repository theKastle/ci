describe('Calculatee Test Suite', function () {
  // visit calculator app
  it('Visits Calculatee', function () {
    cy.visit('http://localhost:8080');
  });

  // test if the hello title contains correct message and is green
  it('App say hello in green', function () {
    cy.contains('Hello Calculatee!! !!!');
    cy.get('h1:first-of-type').should('have.css', 'color', 'rgb(0, 128, 0)')
  })

  // functional test: type an expression and test if calculator produces correct result
  it('App calculate expression correctly', function () {
    cy.get('#expression').type('1+2+3+4');
    cy.get('#btn-eval')
      .click({ force: true })
      .get('#result')
      .debug()
      .should('have.value', '10');
  })
})