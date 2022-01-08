/// <reference types="Cypress" />
 
describe('My Sixth Test Suite', function() 
{
 
it('My Sixth Test case demonstrates mouse over actions',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('#mousehover').invoke('show')
cy.contains('Top').click()
cy.url().should('include', 'top')
 
})
 
 
})