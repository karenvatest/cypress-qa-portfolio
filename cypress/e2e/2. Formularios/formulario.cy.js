describe('Validando formulario de registro', () =>{
    let usuario;
    beforeEach(() =>{
        cy.visit('https://demo-saas.bugbug.io/');
        cy.contains('sign up').click();
        cy.get('[data-size="xl"]').should('have.text', 'Create your account');
        cy.fixture('usuarios.json').then(data => {
            usuario = data;
        });
    });

    // envío exitoso del formulario
    it('Debería enviar el formulario completando el registro', () => {

        cy.fillSignupForm(usuario.user_1);
        
        cy.get('[type="submit"]').contains('Create account').click();
        cy.get('[data-size="xl"]').should('have.text', "Check your email");
    });

    // campos obligatorios vacíos
    it('Debería mostrar mensaje y borde rojo en los campos requeridos', () => {

        cy.get('[type="submit"]').contains('Create account').click();
        cy.get('p').should('be.visible').and('contain', 'String must contain at least');
        cy.get('p').should('be.visible').and('contain', 'Invalid email');
    });
    // Validación de email
    it('Debería validar un email ya registrado', () =>{

        cy.fillSignupForm(usuario.user_2);
        cy.get('[type="submit"]').contains('Create account').click();
        cy.contains('p.mantine-Text-root', 'User already exists').should('be.visible');
    });
});