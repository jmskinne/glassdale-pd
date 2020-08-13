import {getNotes, useNotes, deleteNote} from "./NotesProvider.js"
//import {NoteHTMLConverter} from "./NoteHTMLConverter.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector('.display-container')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent =>{
    Notelist()
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const allcrims = useCriminals()
                render(updatedNotes, allcrims)
            }
        )
    }
})


const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        
        
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                <div class="note__content">${note.content}</div>
                <div class="note__author">Author: ${note.author}</div>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
    })
}
    
    eventHub.addEventListener("noteStateChanged", () => {
        const newNotes = useNotes()
        render(newNotes)
    })



export const Notelist = () => {
    getNotes()
        .then(getCriminals)
        .then(()=> {
            const allNotes = useNotes()
            const allcrims = useCriminals()
            render(allNotes, allcrims)
        })
}


7