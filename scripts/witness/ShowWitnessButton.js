const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessButton")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showWitness") {
        const witnessShow = new CustomEvent("showWitness")
        eventHub.dispatchEvent(witnessShow)
    }
})

export const ShowWitness = () => {
    contentTarget.innerHTML = "<button id='showWitness'>Witness Statements</button>"
}