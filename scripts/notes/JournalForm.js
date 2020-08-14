import {getNotes, useNotes} from "./NotesProvider.js"

//export JournalForm module to ???main.js??

const eventHub = document.querySelector(".container")


eventHub.addEventListener("editNoteClicked", (editEvent) => {
    const noteIdToEdit = editEvent.detail.noteId
    const allnotes = useNotes()
    const findNote = allnotes.find(note => note.id === noteIdToEdit)
    
    render(findNote)
    //need notes from api to find the correct one using noteIdToEdit


    //render to JournalForm to display the information from the API



} )

//
const render = (noteObj) => {
    return `
    <section class="note">
        <h2>Note about ${noteObj.title}</h2>
        <div class="note__content">${note.content}</div>
        <div class="note__author">Author: ${note.author}</div>
        
        
    </section>
    `
}

