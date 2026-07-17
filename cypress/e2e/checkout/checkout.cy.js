describe("Checkout", () => {
    beforeEach(() => {
        cy.visit("/");

        cy.fixture("users").then((users) => {
            cy.login(
                users.standardUser.username,
                users.standardUser.password
            );
        });

        cy.fixture("products").then((products) => {
            cy.get(
                `[data-test="add-to-cart-${products.backpack.id}"]`
            ).click();
        });

        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();

        cy.location("pathname").should(
            "eq",
            "/checkout-step-one.html"
        );
    });

    it("CHECKOUT-001: requires a first name", () => {
        cy.get('[data-test="continue"]').click();

        cy.location("pathname").should(
            "eq",
            "/checkout-step-one.html"
        );

        cy.get('[data-test="error"]').should(
            "have.text",
            "Error: First Name is required"
        );
    });
    it("CHECKOUT-002: requires a last name", () => {
        cy.fixture("checkout").then((checkout) => {
            cy.get('[data-test="firstName"]').type(
                checkout.validCustomer.firstName
            );

            cy.get('[data-test="postalCode"]').type(
                checkout.validCustomer.postalCode
            );
        });

        cy.get('[data-test="continue"]').click();

        cy.location("pathname").should(
            "eq",
            "/checkout-step-one.html"
        );

        cy.get('[data-test="error"]').should(
            "have.text",
            "Error: Last Name is required"
        );
    });
    it("CHECKOUT-003: requires a postal code", () => {
        cy.fixture("checkout").then((checkout) => {
            cy.get('[data-test="firstName"]').type(
                checkout.validCustomer.firstName
            );

            cy.get('[data-test="lastName"]').type(
                checkout.validCustomer.lastName
            );
        });

        cy.get('[data-test="continue"]').click();

        cy.location("pathname").should(
            "eq",
            "/checkout-step-one.html"
        );

        cy.get('[data-test="error"]').should(
            "have.text",
            "Error: Postal Code is required"
        );
    });
    it("CHECKOUT-004: displays the correct order overview", () => {
        cy.fixture("checkout").then((checkout) => {
            cy.get('[data-test="firstName"]').type(
                checkout.validCustomer.firstName
            );

            cy.get('[data-test="lastName"]').type(
                checkout.validCustomer.lastName
            );

            cy.get('[data-test="postalCode"]').type(
                checkout.validCustomer.postalCode
            );

            cy.get('[data-test="continue"]').click();

            cy.location("pathname").should(
                "eq",
                "/checkout-step-two.html"
            );

            cy.get('[data-test="payment-info-value"]').should(
                "have.text",
                "SauceCard #31337"
            );

            cy.get('[data-test="shipping-info-value"]').should(
                "have.text",
                "Free Pony Express Delivery!"
            );

            cy.get('[data-test="subtotal-label"]').should(
                "have.text",
                checkout.backpackOrder.itemTotal
            );

            cy.get('[data-test="tax-label"]').should(
                "have.text",
                checkout.backpackOrder.tax
            );

            cy.get('[data-test="total-label"]').should(
                "have.text",
                checkout.backpackOrder.total
            );
        });

        cy.fixture("products").then((products) => {
            cy.get('[data-test="inventory-item-name"]').should(
                "have.text",
                products.backpack.name
            );

            cy.get('[data-test="inventory-item-price"]').should(
                "have.text",
                products.backpack.price
            );
        });

        cy.get('[data-test="item-quantity"]').should("have.text", "1");
        cy.get('[data-test="cancel"]').should("be.visible");
        cy.get('[data-test="finish"]').should("be.visible");
    });
    it("CHECKOUT-005: completes the order successfully", () => {
        cy.fixture("checkout").then((checkout) => {
            cy.get('[data-test="firstName"]').type(
                checkout.validCustomer.firstName
            );

            cy.get('[data-test="lastName"]').type(
                checkout.validCustomer.lastName
            );

            cy.get('[data-test="postalCode"]').type(
                checkout.validCustomer.postalCode
            );
        });

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.location("pathname").should(
            "eq",
            "/checkout-complete.html"
        );

        cy.get('[data-test="title"]').should(
            "have.text",
            "Checkout: Complete!"
        );

        cy.get('[data-test="complete-header"]').should(
            "have.text",
            "Thank you for your order!"
        );

        cy.get('[data-test="complete-text"]').should(
            "have.text",
            "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
        );

        cy.get('[data-test="back-to-products"]').should("be.visible");
        cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
    });
});