describe("Shopping Cart", () => {
    beforeEach(() => {
        cy.visit("/");

        cy.fixture("users").then((users) => {
            cy.login(
                users.standardUser.username,
                users.standardUser.password
            );
        });

        cy.location("pathname").should("eq", "/inventory.html");
    });

    it("CART-001: adds one product from the inventory", () => {
        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();

            cy.get(
                `[data-test="remove-${products.backpack.id}"]`
            ).should("be.visible");
        });

        cy.get('[data-test="shopping-cart-badge"]')
            .should("be.visible")
            .and("have.text", "1");

        cy.location("pathname").should("eq", "/inventory.html");
    });

    it("CART-002: adds multiple products", () => {
        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();

            cy.get(
                `[data-test="add-to-cart-${products.bikeLight.id}"]`
            ).click();

            cy.get(
                `[data-test="remove-${products.backpack.id}"]`
            ).should("be.visible");

            cy.get(
                `[data-test="remove-${products.bikeLight.id}"]`
            ).should("be.visible");
        });

        cy.get('[data-test="shopping-cart-badge"]')
            .should("be.visible")
            .and("have.text", "2");

        cy.location("pathname").should("eq", "/inventory.html");
    });
    it("CART-003: displays selected products in the cart", () => {
        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();

            cy.get(
                `[data-test="add-to-cart-${products.bikeLight.id}"]`
            ).click();

            cy.get('[data-test="shopping-cart-link"]').click();

            cy.location("pathname").should("eq", "/cart.html");
            cy.get('[data-test="inventory-item"]').should("have.length", 2);

            cy.contains(
                '[data-test="inventory-item"]',
                products.backpack.name
            ).within(() => {
                cy.get('[data-test="inventory-item-name"]')
                    .should("have.text", products.backpack.name);
                cy.get('[data-test="inventory-item-price"]')
                    .should("have.text", products.backpack.price);
                cy.get('[data-test="item-quantity"]').should("have.text", "1");
                cy.get(`[data-test="remove-${products.backpack.id}"]`)
                    .should("be.visible");
            });

            cy.contains(
                '[data-test="inventory-item"]',
                products.bikeLight.name
            ).within(() => {
                cy.get('[data-test="inventory-item-name"]')
                    .should("have.text", products.bikeLight.name);
                cy.get('[data-test="inventory-item-price"]')
                    .should("have.text", products.bikeLight.price);
                cy.get('[data-test="item-quantity"]').should("have.text", "1");
                cy.get(`[data-test="remove-${products.bikeLight.id}"]`)
                    .should("be.visible");
            });
        });

        cy.get('[data-test="shopping-cart-badge"]').should("have.text", "2");
    });
    it("CART-004: removes one product from the cart", () => {
        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();

            cy.get(
                `[data-test="add-to-cart-${products.bikeLight.id}"]`
            ).click();

            cy.get('[data-test="shopping-cart-link"]').click();
            cy.get(`[data-test="remove-${products.bikeLight.id}"]`).click();

            cy.contains(
                '[data-test="inventory-item-name"]',
                products.bikeLight.name
            ).should("not.exist");

            cy.contains(
                '[data-test="inventory-item-name"]',
                products.backpack.name
            ).should("be.visible");
        });

        cy.get('[data-test="inventory-item"]').should("have.length", 1);
        cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
        cy.location("pathname").should("eq", "/cart.html");
    });
    it("CART-005: removes all products from the cart", () => {
        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();

            cy.get(
                `[data-test="add-to-cart-${products.bikeLight.id}"]`
            ).click();

            cy.get('[data-test="shopping-cart-link"]').click();

            cy.get(`[data-test="remove-${products.backpack.id}"]`).click();
            cy.get(`[data-test="remove-${products.bikeLight.id}"]`).click();
        });

        cy.get('[data-test="inventory-item"]').should("not.exist");
        cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
        cy.get('[data-test="continue-shopping"]').should("be.visible");
        cy.get('[data-test="checkout"]').should("be.visible");
        cy.location("pathname").should("eq", "/cart.html");
    });
});