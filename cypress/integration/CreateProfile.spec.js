/// <reference types="Cypress" />

describe('CreateProfile', () => {
  it('should load CreateProfile', () => {
    cy.visit('http://localhost:3000/create')
  })

  it('should fill username', () => {
    cy.get('#username').clear()
    cy.get('#username').type('@anniiwhere')
  })

  it('should fill categories', () => {
    cy.get('#categories').clear()
    cy.get('#categories').type('Travel')
  })
  it('should fill follower', () => {
    cy.get('#follower').clear()
    cy.get('#follower').type('280')
  })
  it('should fill gender', () => {
    cy.get('#gender').clear()
    cy.get('#gender').type('female')
  })
  it('should fill age', () => {
    cy.get('#birthday').clear()
    cy.get('#birthday').type('28')
  })
  it('should fill location', () => {
    cy.get('#location').clear()
    cy.get('#location').type('Hamburg')
  })
  it('should fill languages', () => {
    cy.get('#languages').clear()
    cy.get('#languages').type('German, English')
  })
  it('should submit CreateProfile', () => {
    cy.contains('Create profile').click()
  })
})
