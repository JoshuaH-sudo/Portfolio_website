describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Joshua");
    // Click the about link
    cy.get("nav a").contains("About").click();
    cy.get("h1").should("contain", "Welcome to my corner of the web!");
  });
});
