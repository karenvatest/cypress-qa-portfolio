describe('Validando el backend', () =>{

    it('Validar que se muestran todos los productos', () =>{
        cy.intercept('GET', 'https://rahulshettyacademy.com/seleniumPractise/data/products.json',
            { fixture: 'productos.json'}
        ).as('getProducts');

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.wait('@getProducts');
        cy.contains('Brocolli').should('be.visible');
        cy.get('.product-image').should('have.length', 5);

    });

    it('Validar que se muestra un solo producto', () =>{
        cy.intercept('GET', 'https://rahulshettyacademy.com/seleniumPractise/data/products.json',
            { body: [
                {
                    "id": 18,
                    "name": "Mango - 1 Kg",
                    "price": 75,
                    "image": "./images/mango.jpg",
                    "category": "fruits"
                }
            ]}
        ).as('getOneProduct');

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.wait('@getOneProduct');
        cy.contains('Mango').should('be.visible');
        cy.get('.product-image').should('have.length', 1);

    });
    
    it('Validar que no se muestran productos tras error 500', () => {
        cy.intercept('GET', '**/data/products.json', {
            statusCode: 500 
        }).as('getProductsError');
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
        cy.wait('@getProductsError');
        cy.get('.product').should('not.exist');
        cy.get('.products').should('be.empty');
    });

});

    
