import { HighlightCardComponent } from './highlight-card.component';

describe('HighlightCardComponent', () => {
  it('should display the correct title', () => {
    cy.mount(HighlightCardComponent, {
      componentProperties: {
        title: 'DummyTitle',
      },
    });
    cy.get('[data-cy="title"]').should(
      'have.text',
      'DummyTitle app is running!'
    );
  });
});
