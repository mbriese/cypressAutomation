/// <reference types="Cypress" />
 
describe('My Sixth Test Suite', function() 
{
 
it('My Sixth Test case demonstrates mouse over actions',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// immediate parent element from DOM 
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()

// if the element is hidden and you want to click on it use option force true
// cy.contains('Top').click({force: true})

cy.url().should('include', 'top')
 
})
 
 
})