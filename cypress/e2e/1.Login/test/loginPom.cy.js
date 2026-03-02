import { loginPage } from "../pages/login.Page.js";

describe('Validando Login - aplicando POM', () =>{

    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('.example').should('contain', 'Login Page');
    });
    it('Validar el inicio de sesion exitoso', () =>{
        loginPage.hacerLogin('tomsmith', 'SuperSecretPassword!', 'Secure Area');
        cy.get('.example').should('contain','Secure Area');
    });
    it('Validar un inicio de sesion con contraseña incorrecta', () =>{
        loginPage.hacerLogin('tomsmith', 'Password!', 'Secure Area');
        cy.get('#flash').should('contain', 'password is invalid');
    });
    it('Validar un inicio de sesion con usuario vacio', () =>{
        loginPage.hacerLogin('tom', 'SuperSecretPassword!', 'Secure Area');
        cy.get('#flash').should('contain','username is invalid');
    });

});