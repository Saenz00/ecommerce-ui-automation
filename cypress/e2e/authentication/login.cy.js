describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("AUTH-001: logs in with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(
        users.standardUser.username,
        users.standardUser.password
      );
    });

    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
    cy.get('[data-test="error"]').should("not.exist");
  });

  it("AUTH-002: rejects a locked-out user", () => {
    cy.fixture("users").then((users) => {
      cy.login(
        users.lockedOutUser.username,
        users.lockedOutUser.password
      );
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("AUTH-003: rejects an invalid password", () => {
    cy.fixture("users").then((users) => {
      cy.login(
        users.invalidPasswordUser.username,
        users.invalidPasswordUser.password
      );
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("AUTH-004: requires a username", () => {
    cy.fixture("users").then((users) => {
      cy.login("", users.standardUser.password);
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });

  it("AUTH-005: requires a password", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.standardUser.username, "");
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});