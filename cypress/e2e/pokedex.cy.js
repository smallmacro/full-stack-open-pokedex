describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('should navigate from the main page to a page of a particular Pokeman', () => {
    cy.contains('ivysaur').click()
    cy.url().should('include','/pokemon/ivysaur')
  })
})