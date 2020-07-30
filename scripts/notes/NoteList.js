import {getNotes, useNotes} from "./NotesProvider.js"
import {NoteHTMLConverter} from "./NoteHTMLConverter.js"


const contentTarget = document.querySelector('.display-container')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent =>{
    Notelist()
})

export const Notelist = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

const render = (noteArray) => {
    const notesConvertedToStrings = noteArray.map(
        currentNote => {
            return NoteHTMLConverter(currentNote)
        }
    ).join("")

    contentTarget.innerHTML = notesConvertedToStrings
}