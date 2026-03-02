class Login{
    elements = {
        
        inputUsuario: () => cy.get('#username'),
        inputPassword: () => cy.get('#password'),
        botonLogin: () => cy.get('.radius'),
    }

    ingresarUsuaurio(nombreUsuario){
        this.elements.inputUsuario().type(nombreUsuario);
    }
    ingresarPassword(passwordUsuario){
        this.elements.inputPassword().type(passwordUsuario);
    }
    clickLogin(){
        this.elements.botonLogin().click();
    }
    
    hacerLogin(nombreUsuario, passwordUsuario){
        this.ingresarUsuaurio(nombreUsuario);
        this.ingresarPassword(passwordUsuario);
        this.clickLogin();
    }
}

export const  loginPage = new Login();