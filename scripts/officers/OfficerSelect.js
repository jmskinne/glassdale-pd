import {useOfficers, getOfficers} from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "officerSelect") {   //refers to id in line 18
        const selectedOfficer = changeEvent.target.value
        const customEvent = new CustomEvent("officerSelect", {
            detail : {
                officer : selectedOfficer
            }
        })
        
        eventHub.dispatchEvent(customEvent)
    }
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


/*


line 11 officerName : changeEvent.target.value

line 25 $ { officer.name }

*/