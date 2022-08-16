
describe('Cancel Button Modal', () => {
  beforeEach(() => {
    cy.visit('/qa-build-an-app')
    cy.clearCookies();
  })

  it('Click Cancel button | Account Creation Cancel Modal is Shown | Click on Leave Creator | User is redirected to passion.io home page', () => {
    cy.contains('Cancel').click();
    cy.contains('Leave App Creator').should('exist');
    cy.contains('KEEP BUILDING').as('KeepBuildingButton');
    cy.contains('LEAVE CREATOR').as('LeaveButton');
    cy.get('@KeepBuildingButton').should('exist');
    cy.get('@LeaveButton').click();
    cy.url().should('include', '/');
  })

  it('Click Cancel button | Account Creation Cancel Modal is Shown | Click on Keep Building | User returns to the Creation flow', () => {
    cy.contains('Cancel').click();
    cy.contains('Leave App Creator').should('exist');
    cy.contains('KEEP BUILDING').as('KeepBuildingButton');
    cy.contains('LEAVE CREATOR').as('LeaveButton');
    cy.get('@LeaveButton').should('exist');
    cy.get('@KeepBuildingButton').click();
    cy.url().should('include', '/qa-build-an-app');
    cy.contains('Leave App Creator').should('not.exist');
  })

})