/// <reference types="cypress" />

//const email = 'Mary' + Math.floor (Math.random() * 100) + '@gmail.com'

import { faker } from '@faker-js/faker';

const email = faker.internet.email('Mary', undefined, 'example.com');
const password = faker.string.uuid();

describe('Registration', () => {
  beforeEach(() => {
  
    cy.visit('/login')
  })

  it('should register a new user account', () => {
    
    //Register a new user

    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type('Mary');
    cy.get('[name="lastName"]').type('Koshy');
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();


    //verifying the user role,name,url and page title
    
    cy.get('a p').should('have.text', 'role: user');
    cy.get('h6').should('have.text','Mary  Koshy');
    cy.title().should('eq','User: Profile | Delek Homes');
    cy.url().should('include','dashboard/user/profile');

    //click user icon and logout
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains('Logout').click();


    //login as user

     cy.get('[name="email"]').type(email)
     cy.get('[name="password"]').type(password)
    //login user
     cy.contains('Login').click()
     //verify the role user
     cy.get('a p').should('have.text', 'role: user');

    })
   
  })
  