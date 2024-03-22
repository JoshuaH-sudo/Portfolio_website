describe("Navigation", () => {
  it("should navigate to the correct pages from header", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Joshua");
    // Click the about link
    cy.get("nav a").contains("About").click();
    cy.get("h1").should("contain", "Welcome to my corner of the web!");
    // click the project link
    cy.get("nav a").contains("Projects").click();
    cy.get("h1").should("contain", "Projects");
  });
});
