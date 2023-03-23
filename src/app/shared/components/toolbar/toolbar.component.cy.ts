import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  it('should display the correct logo title', () => {
    cy.mount(ToolbarComponent);
    cy.get('[data-cy="logo-title"]').should('have.text', 'Welcome');
  });

  it('should display the updated logo title', () => {
    cy.mount(ToolbarComponent, {
      componentProperties: {
        logoTitle: 'Try-Cypress',
      },
    });
    cy.get('[data-cy="logo-title"]').should('have.text', 'Try-Cypress');
  });
});
