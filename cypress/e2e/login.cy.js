/// <reference path="../support/commands.d.ts" />

describe('Login', () => {

  it('successfully log in', () => {
    cy.guiLogin()
    cy.contains('h1','Your Notes').should('be.visible')
    cy.contains('a','Create a new note').should('be.visible')

  })
})