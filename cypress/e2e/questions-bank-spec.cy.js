// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - questions bank", () => {
  context("Given an user of a ABC access test's questions bank page", () => {

    beforeEach(() => {
      // cy.visit("http://localhost:3000/es/auth/login");
      // cy.loginOK();
      // cy.wait(1000)
      cy.visit("http://localhost:3000/es/dashboard/questionsBank");
      cy.wait(1000)
    });

    context("When ABC's user access test's questions bank page", () => {
      it("Then he/she sees upload form", () => {
        cy.questionsBankTestCheck();        
      });
    });

    context("When ABC's user access test's questions bank page, no input data and click submit button", () => {
      it("Then he/she sees error messages", () => {
        cy.questionsBankTestEmpty();
      });
    });

    context("When ABC's user access test's questions bank page, inputimage file and click submit button", () => {
      it("Then he/she sees error messages", () => {
        cy.questionsBankTestFileType();
      });
    });    
    
    context("When ABC's user access test's questions bank page, select json file with test's questions bank and click submit button", () => {
      it("Then questions bank file is uploaded and test is created", () => {
        cy.questionsBankTestOK();
      });
    });

  });
});
