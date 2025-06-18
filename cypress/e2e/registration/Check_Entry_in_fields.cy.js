/// <reference types="cypress" />

//const email = 'Mary' + Math.floor (Math.random() * 100) + '@gmail.com'

import { faker } from '@faker-js/faker';

const email = faker.internet.email('Mary', undefined, 'example.com');
const password = faker.string.uuid();

describe('Registration', () => {
  beforeEach(() => {
  
    cy.visit('/login')
  })

 


  
  it('check the fields in the registration column are not empty', () => {


    //Register a new user

    cy.get('[href="/auth/register"]').click();
   // cy.get('[name="firstName"]').should('not.be.empty');

    cy.get('button[type="submit"]').click();
    cy.contains('First name required').should('be.visible');
   // cy.contains('Last name required').should('be.visible');
   cy.get('[name="lastName"]').type('bastin');
   cy.contains('Email is required').should('be.visible');
   cy.contains('Password is required').should('be.visible');
   
   
   
  })
})