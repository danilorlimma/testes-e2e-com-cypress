import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {
  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.intercept('GET', '**/notes').as('getNotes')

    cy.sessionLogin()
    //Create
    cy.log('Create COMEÇA AQUIIIIIIIII')
    cy.createNote(noteDescription)
    cy.wait('@getNotes')


    //Edit
    cy.log('EDITE COMEÇA AQUIIIIIIIII')
    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription,updatedNoteDescription,attachFile)
    cy.wait('@getNotes')

    //Delete
    cy.log('DELETE COMEÇA AQUIIIIIIIII')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes')


  })

})