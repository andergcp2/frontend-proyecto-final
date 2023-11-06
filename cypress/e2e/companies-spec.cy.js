// https://docs.cypress.io/guides/references/best-practices
// Best Practice: Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes.

describe("abcjobs - companies", () => {
  context("Given an company's user access abcjobs register's page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/es/auth/register/company");
      cy.wait(1000)
    });

    context("When company's user sees register's page", () => {
      it("Then he/she sees register's company form", () => {
        cy.checkCompanyTest();
      });
    });

    context(
      "When user company see register's page, no input data and click submit button",
      () => {
        it("Then he/she sees error messages", () => {
          cy.createCompanyTestEmpty();
        });
      }
    );

    context(
      "When user company see register's page, input all data and click submit button",
      () => {
        it("Then company is created and sees confirmation message", () => {
          cy.createCompanyTestOK();
        });
      }
    );

    // context('When user company see register page, input all data with different passwords and click submit button', () => {
    //   it('Then he/she sees password error message', () => {
    //     cy.createCompanyTestPwdError()
    //   })
    // })
  });
});
