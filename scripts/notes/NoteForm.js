import {saveNote} from "./NotesProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

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
            criminalId: parseInt(noteAboutCriminal.value),
            author : noteAuthor.value,
            timestamp : Date.now()
        }
        saveNote(newNote)     //updates the state of the API and application
    } 
})


contentTarget.addEventListener("change", (selectEvent) => {
        if(selectEvent.target.id === "noteAboutCriminal") {
            console.log(selectEvent.target.value)
            const selectedCrim = selectEvent.target.value
            const crimEvent = new CustomEvent("criminalSelected", {
                detail : {
                    criminalId : selectedCrim //send obj {criminalId: criminal--1}
                }
        })
        eventHub.dispatchEvent(crimEvent)
    }
        
})

eventHub.addEventListener("criminalSelected", (crimeEvent) => {
    console.log(crimeEvent.detail)
    const selectedCriminal = crimeEvent.detail.criminalId //gives value 1,2 etc
    console.log(selectedCriminal)
    
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
        </form>
    `
    
}

export const NoteForm = () => {
    getCriminals().then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}


//<input type="text" id="noteAboutCriminal" placeholder="Criminal Referenced" />
// option value="criminal--1">Bob</option>
// <option value="criminal--2">Sam</option>