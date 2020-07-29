import {saveNote} from "./NotesProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const noteTitle = document.querySelector("#noteTitle")
        const noteContent = document.querySelector("#noteContent")
        const noteAboutCriminal = document.querySelector("#noteAboutCriminal")
        const noteAuthor = document.querySelector("#noteAuthor")

        const newNote = {
            title: noteTitle.value,
            content: noteContent.value,
            criminalName: noteAboutCriminal.value,
            author : noteAuthor.value,
            timestamp : Date.now()
        }
        saveNote(newNote)     //updates the state of the API and application
    } 
})







const render = () => {
    contentTarget.innerHTML = `
        <form name="noteInput" id="noteForm">
            <input type="text" id="noteTitle" placeholder="Enter Title" />
            <textarea id="noteContent" placeholder="Write your Note"></textarea>
            <input type="text" id="noteAboutCriminal" placeholder="Criminal Referenced" />
            <input type="text" id="noteAuthor" placeholder="Author Name" />
            <button id="saveNote">Save Note</button>
        </form>
    `
    document.getElementById('noteForm').reset()
}

export const NoteForm = () => {
    render()
}