// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - login", () => {
  context("Given an user company accesses abcjobs login page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/es/auth/login");
      cy.wait(1000)
    });

    context("When user company sees login page", () => {
      it("Then he/she sees login form", () => {
        cy.checkLoginTest();
      });
    });

    context(
      "When user company sees login page, no input data and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.loginTestEmpty();
        });
      }
    );

    context(
      "When user company sees login page, input wrong user and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.loginUsrTestError();
        });
      }
    );

    context(
      "When user company sees login page, input wrong password and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.loginPwdTestError();
        });
      }
    );    

    context(
      "When user company sees login page, input correct credentials and click submit button",
      () => {
        it("Then he/she accesses application", () => {
          cy.loginTestOK();
        });
      }
    );

  });
});
