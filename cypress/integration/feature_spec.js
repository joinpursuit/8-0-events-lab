describe("Color selection", () => {
  it("should change the background of the `#current-color` div when a color is clicked", () => {
    cy.get(".color")
      .first()
      .click()
      .then(($element) => {
        const color = $element.css("background-color");
        cy.get("#current-color").should("have.css", "background-color", color);
      });
  });

  it("should change cells to the currently selected color when clicked", () => {
    cy.get(".color")
      .first()
      .click()
      .then(($element) => {
        const color = $element.css("background-color");
        cy.get(".cell")
          .first()
          .click()
          .should("have.css", "background-color", color);
        cy.get(".cell")
          .last()
          .click()
          .should("have.css", "background-color", color);
      });
  });
});
