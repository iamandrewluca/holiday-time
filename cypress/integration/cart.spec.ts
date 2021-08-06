describe('cart', () => {
  before(() => {
    cy.visit('/')
    addItems('add-to-cart', [1, 2, 4])
    addItems('add-to-wishlist', [2, 3])
    cy.visit('/cart')
  })

  it('should have same count of items as in header', () => {
    cy.findAllByTestId('cart-item').should('have.length', 3)
  })

  it('should have an item in wishlist', () => {
    cy.findAllByTestId('cart-item')
      .eq(1)
      .get('button:nth-of-type(1)')
      .should('have.class', 'text-yellow-500')
  })
})

function addItems(id: string, items: number[]) {
  items.forEach((item) => {
    cy.findByTestId('activities-grid')
      .children(`:nth-child(${item})`)
      .findByTestId(id)
      .click()
  })
}
