// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - candidates", () => {
  context("Given a candidate access abcjobs register's page", () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000/es/auth/login");
      cy.loginOK();
      cy.wait(1000)
      cy.visit("http://localhost:3000/es/auth/register/candidate");
      cy.wait(1000)
    });

    context("When candidate sees register's page", () => {
      it("Then he/she sees register's form", () => {
        cy.checkCandidateTest();
      });
    });

    context(
      "When candidate sees register's page, no input data and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createCandidateTestEmpty();
        });
      }
    );

    context(
      "When candidate sees register's page, no input email and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createCandidateTestNoEmail();
        });
      }
    );

    context(
      "When candidate sees register's page, input all data and click submit button",
      () => {
        it("Then candidate is created and sees confirmation message", () => {
          cy.createCandidateTestOK();
        });
      }
    );

    context(
      "When candidate sees register's page, no input username and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createCandidateTestNoUsername();
        });
      }
    );    

  });
});
