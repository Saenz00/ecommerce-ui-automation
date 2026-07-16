describe("Product Inventory", () => {
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

    it("INV-001: displays the product inventory", () => {
        cy.get('[data-test="title"]').should("have.text", "Products");

        cy.get('[data-test="inventory-item"]')
            .should("have.length", 6)
            .each(($item) => {
                cy.wrap($item)
                    .find('[data-test="inventory-item-name"]')
                    .should("be.visible")
                    .invoke("text")
                    .should("not.be.empty");

                cy.wrap($item)
                    .find('[data-test="inventory-item-price"]')
                    .should("be.visible")
                    .invoke("text")
                    .should("match", /^\$\d+\.\d{2}$/);

                cy.wrap($item)
                    .find("button")
                    .should("be.visible")
                    .and("contain.text", "Add to cart");
            });
    });

    it("INV-002: sorts products by name from A to Z", () => {
        cy.get('[data-test="product-sort-container"]').select("az");

        cy.get('[data-test="inventory-item-name"]').then(($names) => {
            const displayedNames = [...$names].map((name) =>
                name.innerText.trim()
            );

            const expectedNames = [...displayedNames].sort((first, second) =>
                first.localeCompare(second)
            );

            expect(displayedNames).to.deep.equal(expectedNames);
            expect(displayedNames[0]).to.equal("Sauce Labs Backpack");
            expect(displayedNames.at(-1)).to.equal(
                "Test.allTheThings() T-Shirt (Red)"
            );
        });
    });

    it("INV-003: sorts products by name from Z to A", () => {
        cy.get('[data-test="product-sort-container"]').select("za");

        cy.get('[data-test="inventory-item-name"]').then(($names) => {
            const displayedNames = [...$names].map((name) =>
                name.innerText.trim()
            );

            const expectedNames = [...displayedNames].sort((first, second) =>
                second.localeCompare(first)
            );

            expect(displayedNames).to.deep.equal(expectedNames);
            expect(displayedNames[0]).to.equal(
                "Test.allTheThings() T-Shirt (Red)"
            );
            expect(displayedNames.at(-1)).to.equal("Sauce Labs Backpack");
        });
    });

    it("INV-004: sorts products by price from low to high", () => {
        cy.get('[data-test="product-sort-container"]').select("lohi");

        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const displayedPrices = [...$prices].map((price) =>
                Number(price.innerText.replace("$", ""))
            );

            const expectedPrices = [...displayedPrices].sort(
                (first, second) => first - second
            );

            expect(displayedPrices).to.deep.equal(expectedPrices);
            expect(displayedPrices[0]).to.equal(7.99);
            expect(displayedPrices.at(-1)).to.equal(49.99);
        });

        cy.get('[data-test="inventory-item-name"]')
            .first()
            .should("have.text", "Sauce Labs Onesie");

        cy.get('[data-test="inventory-item-name"]')
            .last()
            .should("have.text", "Sauce Labs Fleece Jacket");
    });
    it("INV-005: sorts products by price from high to low", () => {
        cy.get('[data-test="product-sort-container"]').select("hilo");

        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const displayedPrices = [...$prices].map((price) =>
                Number(price.innerText.replace("$", ""))
            );

            const expectedPrices = [...displayedPrices].sort(
                (first, second) => second - first
            );

            expect(displayedPrices).to.deep.equal(expectedPrices);
            expect(displayedPrices[0]).to.equal(49.99);
            expect(displayedPrices.at(-1)).to.equal(7.99);
        });

        cy.get('[data-test="inventory-item-name"]')
            .first()
            .should("have.text", "Sauce Labs Fleece Jacket");

        cy.get('[data-test="inventory-item-name"]')
            .last()
            .should("have.text", "Sauce Labs Onesie");
    });
});