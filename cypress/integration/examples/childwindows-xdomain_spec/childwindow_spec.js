/// <reference types="Cypress" />
 
describe('My Seventh Test Suite', function() 
{
 
it('My Seventh Test case demonstrates accessing child window',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// immediate parent element from DOM 
cy.get('#opentab').then(function(el)
{
     const url=el.prop('href')
     cy.log(url)
     cy.visit(url)
})

})
 
 
})