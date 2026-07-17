describe("Session Management", () => {
  it("SESSION-001: logs out from an authenticated session", () => {
    cy.visit("/");

    cy.fixture("users").then((users) => {
      cy.login(
        users.standardUser.username,
        users.standardUser.password
      );
    });

    cy.location("pathname").should("eq", "/inventory.html");

    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click();

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="username"]').should("be.visible");
    cy.get('[data-test="password"]').should("be.visible");
    cy.get('[data-test="inventory-list"]').should("not.exist");
  });

  it("SESSION-002: blocks access without authentication", () => {
    cy.visit("/inventory.html", {
      failOnStatusCode: false,
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="inventory-list"]').should("not.exist");
    cy.get('[data-test="username"]').should("be.visible");
    cy.get('[data-test="password"]').should("be.visible");

    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: You can only access '/inventory.html' when you are logged in."
    );
  });
});