import { createOutputSpy } from 'cypress/angular';
import { NextStepsComponent } from './next-steps.component';

describe('NextStepsComponent', () => {
  it('should display the correct title', () => {
    cy.mount(NextStepsComponent);
    cy.get('h2').should('have.text', 'Next Steps');
  });

  it('should have the correct number of buttons per options', () => {
    cy.mount(NextStepsComponent, {
      componentProperties: {
        onOptionChange: createOutputSpy('onOptionChange'),
      },
    });

    cy.get('button').should('have.length', 6);
  });

  it('should fire an event when the [component] button is clicked', () => {
    cy.mount(NextStepsComponent, {
      componentProperties: {
        onOptionChange: createOutputSpy('onOptionChangeSpy'),
      },
    });

    cy.get('[data-cy="component"]').click();
    cy.get('@onOptionChangeSpy').should(
      'have.been.calledOnceWith',
      'component'
    );
  });

  it('should fire an event when the [material] button is clicked', () => {
    cy.mount(NextStepsComponent, {
      componentProperties: {
        onOptionChange: createOutputSpy('onOptionChangeSpy'),
      },
    });

    cy.get('[data-cy="material"]').click();
    cy.get('@onOptionChangeSpy').should('have.been.calledOnceWith', 'material');
  });
});
