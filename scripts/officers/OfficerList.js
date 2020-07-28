import { useOfficers, getOfficers} from "./OfficerProvider.js"
import { OfficerHTMLConverter } from "./OfficerHTMLConverter.js"
import { useCriminals } from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")
/*
eventHub.addEventListener("officerSelect", (officerEvent) => {
    const selectedOfficerByUser = officerEvent.detail.officer

    const arrayOfOfficers = useOfficers()
    const foundAnOfficerObj = arrayOfOfficers.find(
        (officer) => {
            return selectedOfficerByUser === officer
        }
    )

    const allCriminals = useCriminals()

    const filteredCrims = allCriminals.filter(
        (currentCrimObj) => {
            return foundAnOfficerObj.name === currentCrimObj.arrestingOfficer
        }
    )
    render(filteredCrims)
})
*/
const render = (arrayOfOfficers) => {
    
    let officerHTMLRep = ""
        arrayOfOfficers.forEach(officer => {
            officerHTMLRep += OfficerHTMLConverter(officer)
            })

            contentTarget.innerHTML = `
                <h2>Glassdale Officers</h2>
                <article class="officerList">
                    ${officerHTMLRep}
                </article>
            `
        
}

export const OfficerList = () => {

    getOfficers()
        .then(() => {
            const arrayOfOfficers = useOfficers()
            render(arrayOfOfficers)
        })
}