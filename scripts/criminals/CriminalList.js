import { CriminalHTMLConverter } from "./CriminalHTMLConverter.js"
import { useCriminals, getCriminals} from "./CriminalProvider.js"
import { useConvictions} from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"

const contentTarget = document.querySelector('.display-container')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeEvent) => {
    //Filter displayed criminals by the crime that was chosen (crimeId)

    const selectedCrimeByUser = crimeEvent.detail.crimeId

    //get crime name because the criminal data is stored
    const arrayOfCrimes = useConvictions()
    const foundACrimeObj = arrayOfCrimes.find(
        (crime) => {
            return parseInt(selectedCrimeByUser) === crime.id
        }
    )

    const allCriminals = useCriminals()
    
    const filteredCrims = allCriminals.filter(
        (currentCrimObj) => {
            return foundACrimeObj.name === currentCrimObj.conviction
        }
    )
    render(filteredCrims)
})
/*
eventHub.addEventListener("officerSelected", (officerEvent) => {
    const officerName = officerEvent.detail.officer
    const arrayOfOfficers = useOfficers()

    const foundAOfficer = arrayOfOfficers.find(
        (officer) => {
            return officerName === officer.id
        }
    )
    const criminals = useCriminals()
    
    
    const filteredCrims = criminals.filter(
        (criminalObj) => {
            return foundAOfficer.name === criminalObj.arrestingOfficer
            
                
        }
    )
    render(filteredCrims)
})

*/

eventHub.addEventListener("officerSelect", event => {
    const officerName = event.detail.officer
    const arrayOfOfficers = useOfficers()                        //lines 58-60 are unnessary bc we just got name of officer
    const foundAOfficerObj = arrayOfOfficers.find(
        (officer) => {
            return parseInt(officerName) === officer.id
        }
    )
    debugger
    
    const criminals = useCriminals()
    const filteredCriminals = criminals.filter(
        (criminalObject) => {
            if(foundAOfficerObj.name === criminalObject.arrestingOfficer)
                return true
            
            }
        )
    debugger
    render(filteredCriminals)

})

const render = (arrayOfCrims) => { //turning array into HTML
    let CrimHTML = ""
    arrayOfCrims.forEach(criminal => {
        CrimHTML += CriminalHTMLConverter(criminal)
    })
    contentTarget.innerHTML= `
        
        <article class="criminalList">
            ${CrimHTML}
        </article>
    `
}

// const buttonTarget = document.querySelector(".buttonAssociate")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id.includes("associate")) {
        const clickedAssociate = clickEvent.target.id
        const customEvent = new CustomEvent("associateClicked", {
            detail : {
                associate : clickedAssociate
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
    

})

eventHub.addEventListener("associateClicked", event => {
    const associate = event.detail.associate
    const criminals = useCriminals()
    const filteredAssociates = criminals.filter(
        (crimObj) => {
            if(associate === crimObj.id) {
                
            }

        }
    )    
})
//     if(clickEvent.target.id ===  "associateSelect") {
//         const clickedCrim = clickEvent.target.value
//         console.log(clickedCrim)
//     }
    
    
// })

    






export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
}