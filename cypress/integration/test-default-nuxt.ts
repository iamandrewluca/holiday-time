describe('nuxt application', () => {
    beforeEach(() => cy.visit('/'))

    it('has heading level 2', () => {
        cy.get('h2').should('include.text', 'Welcome to your Nuxt Application')
    })
})
