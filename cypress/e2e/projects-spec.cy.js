// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - projects", () => {
  context("Given an company's user access abcjobs project's register page", () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000/es/auth/login");
      cy.loginOK();
      cy.wait(1000)
      cy.visit("http://localhost:3000/dashboard/project");
      cy.wait(1000)
    });

    context("When company's user sees project's register page", () => {
      it("Then he/she sees project's register form", () => {
        cy.checkProjectTest();
      });
    });

    context(
      "When company's user sees project's register page, no input data and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createProjectTestEmpty();
        });
      }
    );

    context(
      "When company's user sees project's register page, no input address and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createProjectTestNoAddress();
        });
      }
    );    

    context(
      "When company's user sees project's register page, input all data and click submit button",
      () => {
        it("Then project is created and sees confirmation message", () => {
          cy.createProjectTestOK();
        });
      }
    );

    context(
      "When company's user sees project's register  page, no input email and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createProjectTestNoEmail();
        });
      }
    );

  });
});
