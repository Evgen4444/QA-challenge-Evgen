describe('IMDb Test - Nicolas Cage Profile', () => {
  it('Should navigate to Nicolas Cage’s Completed upcoming movie', () => {
    cy.visit('https://www.imdb.com');
    cy.get('input[name="q"]').type('Nicolas Cage{enter}');
    cy.contains('a', 'Nicolas Cage').click();
    
    cy.contains('Upcoming').click();
    cy.get('.credit_tag:contains("Completed")').first().click();
    
    cy.url().should('include', '/title/');
  });
});
