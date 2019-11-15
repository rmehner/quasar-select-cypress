import * as ctx from  '../../../../quasar.conf.js'

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('.should() - select the number', () => {
    cy.get('.q-page')
      .contains('Number')
      .within(() => {
        cy.contains('arrow_drop_down').click()
      })

    cy.get('.q-menu')
      .scrollTo('bottom')
      .contains('4999')
      .click()
  })
})
