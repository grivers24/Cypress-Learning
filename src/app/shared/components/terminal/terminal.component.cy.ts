import { TerminalComponent } from './terminal.component';

describe('TerminalComponent', () => {
  it('should display the correct option [component]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'component',
      },
    });
    cy.get('pre')
      .should('have.length', 1)
      .should('have.text', 'ng generate component xyz');
  });

  it('should display the correct option [material]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'material',
      },
    });
    cy.get('pre')
      .should('have.length', 1)
      .should('have.text', 'ng add @angular/material');
  });

  it('should display the correct option [pwa]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'pwa',
      },
    });
    cy.get('pre')
      .should('have.length', 1)
      .should('have.text', 'ng add @angular/pwa');
  });

  it('should display the correct option [dependency]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'dependency',
      },
    });
    cy.get('pre').should('have.length', 1).should('have.text', 'ng add _____');
  });

  it('should display the correct option [test]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'test',
      },
    });
    cy.get('pre').should('have.length', 1).should('have.text', 'ng test');
  });

  it('should display the correct option [build]', () => {
    cy.mount(TerminalComponent, {
      componentProperties: {
        selectedOption: 'build',
      },
    });
    cy.get('pre').should('have.length', 1).should('have.text', 'ng build');
  });
});
