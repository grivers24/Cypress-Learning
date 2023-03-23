import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  it('have the correct title', () => {
    cy.mount(ResourcesComponent).get('h2').should('have.text', 'Resources');
  });
});
