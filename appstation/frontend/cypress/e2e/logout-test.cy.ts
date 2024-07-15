describe("Logout Test", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.intercept("POST", "**/login", {
      statusCode: 200,
      body: {
        /* mock response */
      },
    }).as("loginRequest");

    cy.get('input[name="username"]').type("bart");
    cy.get('input[name="password"]').type("Pa$$w0rd");
    cy.get('button[type="submit"]').click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    // Mock currentUser$
    cy.window().then((win) => {
      win.localStorage.setItem(
        "user",
        JSON.stringify({
          username: "bart",
          // Add other necessary user details
        })
      );
    });

    cy.visit("/dashboard");
  });

  it("should log out and redirect to the home page", () => {
    // Open user menu
    cy.get(".welcome-container").click();

    // Click logout button
    cy.get("button").contains("Logout").click({ force: true });

    // Verify redirection to the home page
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    // Verify the user is logged out
    cy.get(".buttons-container").should("be.visible");
    cy.get(".welcome-container").should("not.exist");
  });
});
