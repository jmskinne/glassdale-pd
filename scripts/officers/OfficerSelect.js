import {useOfficers, getOfficers} from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("officerSelect", {
        detail : {
            officerId : changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
})

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer</option>
        ${
            officersCollection.map(
                officerObj => {
                    return `<option value="${officerObj.id}"> ${officerObj.name}</option>`
                }
            ).join("")
        }
        </select>
    `
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const officers = useOfficers()
        render(officers)
    })
}