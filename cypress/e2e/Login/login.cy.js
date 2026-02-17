describe('Validando Login', () =>{
    //Login exitoso
    it('Validar el inicio de sesion exitoso', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').should('contain', 'Login Page');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').contains('Login').click();
        cy.get('.example').should('contain','Secure Area');
    });
    //Login con password incorrecto
    
    it('Validar un inicio de sesion con contraseña incorrecta', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').should('contain', 'Login Page');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('Password');
        cy.get('.radius').contains('Login').click();
        cy.get('#flash').should('contain', 'password is invalid');
    });
    //Login con usuario vacío
    it('Validar un inicio de sesion con usuario vacio', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').should('contain', 'Login Page');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').contains('Login').click();
        cy.get('#flash').should('contain','username is invalid');
    });
    
});


