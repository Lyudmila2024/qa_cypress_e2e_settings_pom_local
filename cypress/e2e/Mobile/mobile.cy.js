describe('Demoblaze E2E tests', () => {
  
  beforeEach(() => {
    
    cy.visit('https://www.demoblaze.com/');
  });

  it('Registration test', () => {
    
    cy.get('#signin2').click();
    cy.get('#sign-username').type('BobDilan');
    cy.get('#sign-password').type('Q1w2e3r4');
    cy.get('button[onclick="register()"]').click();
    
  });
  it('Login test', () => {
    
    cy.get('#login2').click();
    cy.get('#loginusername').type('BobDilan');
    cy.get('#loginpassword').type('Q1w2e3r4');
    cy.get('button[onclick="logIn()"]').click();
   
  });

  
  it('Add Samsung Galaxy s6 to cart', () => {
    
    cy.get('a[href="prod.html?idp_=1"]').first().click(); 
    cy.get('.btn-success').click(); 
    
  });

});
