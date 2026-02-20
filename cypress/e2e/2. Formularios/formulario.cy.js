describe('Validando formulario de login', () =>{
    beforeEach(() =>{
        cy.visit('https://demo-saas.bugbug.io/');
        cy.get('[data-variant="filled"]').contains('sign up').click();
        cy.get('[data-size="xl"]').should('have.text', 'Create your account');
    });

    // envío exitoso del formulario
    it('Debería enviar el formulario completando el registro', () => {

        cy.fixture('usuarios.json').then((usuario) => {
            cy.get('[name="firstName"]').type(usuario.user_1.name);
            cy.get('[name="lastName"]').type(usuario.user_1.lastname);
            cy.get('[name="email"]').type(usuario.user_1.email);
            cy.get('[name="password"]').type(usuario.user_1.password);
        });
        
        cy.get('[data-variant="subtle"]').dblclick();
        cy.get('[type="submit"]').contains('Create account').click();
        cy.get('[data-size="xl"]').should('have.text', "Check your email");
    });

    // campos obligatorios vacíos
    it('Debería mostrar mensaje y borde rojo en los campos requeridos', () => {
        cy.get('[type="submit"]').contains('Create account').click();
        cy.get('[name="firstName"]').should('have.css', 'border-color', 'rgb(250, 82, 82)');
        cy.get('[name="lastName"]').should('have.css', 'border-color', 'rgb(250, 82, 82)');
        cy.get('[name="email"]').should('have.css', 'border-color', 'rgb(250, 82, 82)');
        cy.get('[name="password"]').should('have.css', 'border-color', 'rgb(250, 82, 82)');
        cy.get('p').should('be.visible').and('contain', 'String must contain at least');
    });
    // Validación de email
    it('Debería mostrar mensaje cuando ya exise un email registrado', () =>{

        cy.fixture('usuarios.json').then((usuario) => {
            cy.get('[name="firstName"]').type(usuario.user_2.name);
            cy.get('[name="lastName"]').type(usuario.user_2.lastname);
            cy.get('[name="email"]').type(usuario.user_2.email);
            cy.get('[name="password"]').type(usuario.user_2.password);
        });
        cy.get('[type="submit"]').contains('Create account').click();
        cy.contains('p.mantine-Text-root', 'User already exists').should('be.visible');
    });
});