/// <reference types="Cypress" />

describe('InfluencerList', () => {
  it('should load InfluencerList', () => {
    cy.visit('http://localhost:3000/InfluencerList')
  })
  it('should like profile', () => {
    cy.get('#like-button').click()
  })
  it('should go to favourite-page', () => {
    cy.get('#favourite-page').click()
  })
  it('should go to categories', () => {
    cy.get('#category-link').click()
  })
})
