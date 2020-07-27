import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    // has to be object, and detail has to be object
    const customEvent = new CustomEvent("crimeSelected", {
        detail : {
            crimeId : changeEvent.target.value  // getting value from html
        }
    })
    eventHub.dispatchEvent(customEvent)
})

const render = convictionsCollection => {
            
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(
                    convictionObj => {
                        return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
                    }
                    
                ).join("")
            }
            </select>
        `
}


    
export const ConvictionSelect = () => {
        // Get all convictions from application state
        getConvictions().then(() => {
            const convictions = useConvictions()
        
            render(convictions)
        })
}