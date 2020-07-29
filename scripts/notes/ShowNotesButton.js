const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteListButton")


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showNotes") {
        const customeEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customeEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'> Show All Notes</button>"
}