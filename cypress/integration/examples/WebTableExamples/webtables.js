/// <reference types="Cypress" />
 
describe('My Fourth Suite', function() 
{
 
it('My FourthTest case',function() {
 
//Switch to Alert buttons
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  // Switch to Alert button with id 
  cy.get('#alertbtn').click() // opens alert box and auto accepts confirm action //
  cy.get('[value="Confirm"]').click()// opens confirmation dialog //

  // did the text string match our expected value -- assertion from Mocha //
  cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
  })
  cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
  })

  // deal with child tabs - click on button & go to target = another location
  // promotes flakiness in tests & cypress will not do that
  cy.get('#opentab').invoke('removeAttr', 'target').click()

  // check URL to make sure transition was successful
  cy.url().should('include', 'rahulshettyacademy.com')

  // navigation in browser
  cy.go('back')
}  )
  
}  )