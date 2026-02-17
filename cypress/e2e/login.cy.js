describe('Validando Login', () =>{
    //Login exitoso
    it('Validar el inicio de sesion exitoso', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').contains('Login Page');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').should('contain', 'Login').click();
        cy.get('.example').contains('Secure Area');
    });
    //Login con password incorrecto
    it('Validar un inicio de sesion con contraseña incorrecta', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').contains('Login Page');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('Password');
        cy.get('.radius').should('contain', 'Login').click();
        cy.get('#flash').contains('password is invalid');
    });
    //Login con usuario vacío
    it('Validar un inicio de sesion con usuario vacio', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').contains('Login Page');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').should('contain', 'Login').click();
        cy.get('#flash').contains('username is invalid');
    });
});


