/// <reference types="cypress" />

//const email = 'Mary' + Math.floor (Math.random() * 100) + '@gmail.com'

import { faker } from '@faker-js/faker';

const email = faker.internet.email('Mary', undefined, 'example.com');

describe('Registration', () => {
  beforeEach(() => {
  
    cy.visit('/login')
  })

  it('should register a new user account', () => {
    

    cy.get('[href="/auth/register"]').click()
    cy.get('[name="firstName"]').type('Mary')
    cy.get('[name="lastName"]').type('Koshy')
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type('Rea@1234')
    cy.get('[type="submit"]').click()

    
    cy.get('a p').should('have.text', 'role: user')

    cy.get('h6').invoke('text').then((text) => {
  
      cy.log('campaign', - `${text}-`)
    })
    //cy.title().should('eq','User: Profile | Delek Homes')
  })
  

  /* ==== Test Created with Cypress Studio ==== */
})