/// <reference types="Cypress" />

describe('NavigationPage', () => {
  it('should load NavigationPage', () => {
    cy.visit('http://localhost:3000/')
  })
  it('should go to CategoryPage', () => {
    cy.contains('influencer').click()
  })
  it('should load CreateProfile', () => {
    cy.contains('What categories are you looking for?')
  })
  it('should go to CategoryPage', () => {
    cy.contains('Food').click()
  })
})