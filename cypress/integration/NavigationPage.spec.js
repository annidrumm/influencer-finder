/// <reference types="Cypress" />

describe('NavigationPage', () => {
  it('should load NavigationPage', () => {
    cy.visit('http://localhost:3000/navigate')
  })
  it('should go to CategoryPage', () => {
    cy.get('#button').click()
  })
  it('should load Headline', () => {
    cy.contains('Categories')
  })
  it('should filter food profiles', () => {
    cy.contains('Food').click()
  })
  it('should go to center', () => {
    cy.scrollTo('center')
  })
})
