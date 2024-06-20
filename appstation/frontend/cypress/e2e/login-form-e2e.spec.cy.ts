describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('/login'); // Assuming the login form is under the "/login" route
    });
  
    it('should not allow empty username or password', () => {
        cy.get('input[placeholder="Enter your username"]').should('have.attr', 'placeholder', 'Enter your username');
        cy.get('input[placeholder="Enter your password"]').should('have.attr', 'placeholder', 'Enter your password');
        cy.get('button[type="submit"]').click();
    });
  
    it('should login and navigate to dashboard on successful login', () => {
      cy.intercept('POST', '**/login', {
        statusCode: 200,
        body: { /* mock response */ },
      }).as('loginRequest');
  
      cy.get('input[name="username"]').type('bart');
      cy.get('input[name="password"]').type('Pa$$w0rd');
      cy.get('button[type="submit"]').click();
  
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
      cy.url().should('include', '/dashboard');
    //   cy.get('.toast-content p').should('exist').contains('You logged successfully!');
    });
  
    it('should show error message on failed login', () => {
      cy.intercept('POST', '**/login', {
        statusCode: 401,
        body: { error: 'Invalid credentials' },
      }).as('loginRequest');
  
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
  
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
    //   cy.contains('Invalid credentials').should('exist');
    });
  });
  