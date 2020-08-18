import {saveNote, useNotes, EditNote} from "./NotesProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const id = document.querySelector("#entryId")
        const noteTitle = document.querySelector("#noteTitle")
        const noteContent = document.querySelector("#noteContent")
        const noteAboutCriminal = document.querySelector("#noteAboutCriminal")
        const noteAuthor = document.querySelector("#noteAuthor")
        debugger
        if(id.value === "") {

            const newNote = {
                title: noteTitle.value,
                content: noteContent.value,
                criminalId: parseInt(noteAboutCriminal.value),
                author : noteAuthor.value,
                timestamp : Date.now()
            }
            saveNote(newNote)     //updates the state of the API and application
        } else {
            const editedNote = {
                title: noteTitle.value,
                content: noteContent.value,
                criminalId: parseInt(noteAboutCriminal.value),
                author : noteAuthor.value,
                timestamp : Date.now(),
                id : parseInt(id.value)
            }
            EditNote(editedNote)
        }
    }    
})

eventHub.addEventListener("editNoteClicked", (editEvent) => {
    const noteIdToEdit = editEvent.detail.noteId
    const allnotes = useNotes()
    const findNote = allnotes.find(note => note.id === noteIdToEdit)
    
    const id = document.querySelector("#entryId")
    const noteTitle = document.querySelector("#noteTitle")
    const noteContent = document.querySelector("#noteContent")
    const noteAboutCriminal = document.querySelector("#noteAboutCriminal")
    const noteAuthor = document.querySelector("#noteAuthor")

    id.value = findNote.id
    noteTitle.value = findNote.title
    noteContent.value = findNote.content
    noteAboutCriminal.value = findNote.criminalId
    noteAuthor.value = findNote.author

    
})




const render = criminalCollection => {
    contentTarget.innerHTML = `
        <form name="noteInput" id="noteForm">
            <input type="text" id="noteTitle" placeholder="Enter Title" />
            <textarea id="noteContent" placeholder="Write your Note"></textarea>
            <select id="noteAboutCriminal" class="criminalSelect">
                <option value="0">Please select a criminal</option>
                ${
                    criminalCollection.map(
                        crimObj => {
                            return `<option value="${crimObj.id}"> ${crimObj.name}</option>`
                        }
                    ).join("")
                }
            </select>
            <input type="text" id="noteAuthor" placeholder="Author Name" />
            <button id="saveNote">Save Note</button>
            <input type="hidden" name="entryId" id="entryId">

        </form>
    `
    
}

export const NoteForm = () => {
    getCriminals().then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}


