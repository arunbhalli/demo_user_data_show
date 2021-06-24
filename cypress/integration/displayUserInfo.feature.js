describe('user can see display information',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })
  describe('succesfully',()=>{
    it('is expected to show users details',()=>{
      cy.get('[data-cy=avatar]').should('be.visible')
      cy.get('[data-cy=name]').should('contain', 'Chris moris')
      cy.get('[data-cy=location]').should('contain', 'Stockholm')
      cy.get('[data-cy=foodType]').should('contain', 'Vagitarian')
      cy.get('[data-cy=age]').should('contain', '25')
    })
  })
  
})