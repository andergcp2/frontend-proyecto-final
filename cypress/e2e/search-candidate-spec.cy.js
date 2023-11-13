// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - search candidates", () => {
  context("Given an user of a company access abcjobs candidate's search page", () => {

    beforeEach(() => {
      // cy.visit("http://localhost:3000/es/auth/login");
      // cy.loginOK();
      // cy.wait(1000)
      cy.visit("http://localhost:3000/es/dashboard/searchCandidate");
      cy.wait(1000)
    });

    context("When company's user access candidate's search page", () => {
      it("Then he/she sees candidate's search form", () => {
        cy.searchCandidateTestCheck();        
      });
    });

    context(
      "When company's user access candidate's search page, no input data and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.searchCandidateTestEmpty();
        });
      }
    );

    context(
      "When company's user access candidate's search page, no input role and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.searchCandidateTestNoRole();
        });
      }
    );    

    context(
      "When company's user access candidate's search page, input all data and click submit button",
      () => {
        it("Then candidates are listed", () => {
          cy.searchCandidateTestOK();
        });
      }
    );

  });
});
