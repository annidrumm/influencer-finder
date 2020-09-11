/// <reference types="Cypress" />

context('CategoryPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'Influencer Finder')
  })

  it('has filters', () => {
    cy.get('button').contains('Food')
    cy.get('button').contains('Fitness')
    cy.get('button').contains('Beauty')
    cy.get('button').contains('Fashion')
    cy.get('button').contains('Interior')
    cy.get('button').contains('Travel')
  })
  it('has buttons', () => {
    cy.get('button').should('have.length', 6)
  })
})
