/// <reference types="cypress" />



describe('Login', () => {
  beforeEach(() => {
  
    cy.visit('/login')
  })

  it('displays two todo items by default', () => {
    
    cy.get('[href="/auth/login"]').click()
    cy.get('[name="email"]').type('admin@gmail.com')
    cy.get('[name="password"]').type('DontTestMe')
    //cy.get('[type="submit"]').click()
    cy.contains('Login').click()

     cy.get('a p').should('have.text', 'role: admin')
    cy.title().should('eq','User: Profile | Delek Homes')



    
  })

  /* ==== Test Created with Cypress Studio ==== */
  
})