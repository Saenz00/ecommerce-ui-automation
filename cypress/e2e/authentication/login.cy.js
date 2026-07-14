describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("AUTH-001: logs in with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.get('[data-test="username"]').type(users.standardUser.username);
      cy.get('[data-test="password"]').type(users.standardUser.password);
      cy.get('[data-test="login-button"]').click();
    });

    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
    cy.get('[data-test="error"]').should("not.exist");
  });

  it("AUTH-002: rejects a locked-out user", () => {
    cy.fixture("users").then((users) => {
      cy.get('[data-test="username"]').type(users.lockedOutUser.username);
      cy.get('[data-test="password"]').type(users.lockedOutUser.password);
      cy.get('[data-test="login-button"]').click();
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
  it("AUTH-003: rejects an invalid password", () => {
    cy.fixture("users").then((users) => {
      cy.get('[data-test="username"]').type(
        users.invalidPasswordUser.username
      );
      cy.get('[data-test="password"]').type(
        users.invalidPasswordUser.password
      );
      cy.get('[data-test="login-button"]').click();
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("AUTH-004: requires a username", () => {
    cy.fixture("users").then((users) => {
      cy.get('[data-test="password"]').type(users.standardUser.password);
      cy.get('[data-test="login-button"]').click();
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });
  it("AUTH-005: requires a password", () => {
    cy.fixture("users").then((users) => {
      cy.get('[data-test="username"]').type(users.standardUser.username);
      cy.get('[data-test="login-button"]').click();
    });

    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});