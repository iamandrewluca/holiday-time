describe('home', () => {
  beforeEach(() => cy.visit('/'))

  it('should have 6 activities on the page', () => {
    cy.findByTestId('activities-grid').children().should('have.length', 6)
  })

  it('should not show cart and wishlist count', () => {
    cy.findByTestId('header-cart-count').should('not.exist')
    cy.findByTestId('header-wishlist-count').should('not.exist')
  })

  it('should show cart count when adding to cart', () => {
    cy.findByTestId('activities-grid')
      .children(':nth-child(1)')
      .findByTestId('add-to-cart')
      .click()

    cy.findByTestId('header-cart-count')
      .should('exist')
      .shouldHaveTrimmedText('1')
  })

  it('should show wishlist count when adding to wishlist', () => {
    cy.findByTestId('activities-grid')
      .children(':nth-child(2)')
      .findByTestId('add-to-wishlist')
      .click()

    cy.findByTestId('activities-grid')
      .children(':nth-child(1)')
      .findByTestId('add-to-wishlist')
      .click()

    cy.findByTestId('header-wishlist-count')
      .should('exist')
      .shouldHaveTrimmedText('2')
  })

  it('should change page number when navigating next', () => {
    cy.findByTestId('pagination').should('exist')
    cy.findByTestId('pagination').children('span').shouldHaveTrimmedText('1')
    cy.findByTestId('pagination').get('button:nth-of-type(2)').click()
    cy.findByTestId('pagination').children('span').shouldHaveTrimmedText('2')
  })
})
