import {getNotes, useNotes} from "./NotesProvider.js"
//import {NoteHTMLConverter} from "./NoteHTMLConverter.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector('.display-container')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent =>{
    Notelist()
})


const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        
        
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                <div class="note__content">${note.content}</div>
                <div class="note__author">Author: ${note.author}</div>
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


// const notesConvertedToStrings = noteCollection.map(note => {
//     const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
//         return NoteHTMLConverter(note, relatedCriminal)
//     }
//     ).join("")
//     console.log(notesConvertedToStrings)
//     debugger
//     contentTarget.innerHTML = notesConvertedToStrings
// }