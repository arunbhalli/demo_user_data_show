describe('user can see user information',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })
  describe('succesfully',()=>{
    it('is expected to show user details',()=>{
      cy.get('[data-cy=avatar]').should('be.visible')
      cy.get('[data-cy=name]').should('contain', 'Chris moris')
      cy.get('[data-cy=location]').should('contain', 'Stockholm')
      cy.get('[data-cy=foodType]').should('contain', 'Vegetarian')
      cy.get('[data-cy=age]').should('contain', '25')
    })
  })
})