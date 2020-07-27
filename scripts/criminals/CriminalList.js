import { CriminalHTMLConverter } from "./CriminalHTMLConverter.js"
import { useCriminals, getCriminals} from "./CriminalProvider.js"
import { useConvictions} from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector('.criminalsContainer')
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
    
const render = (arrayOfCrims) => {
    let CrimHTML = ""
    arrayOfCrims.forEach(criminal => {
        CrimHTML += CriminalHTMLConverter(criminal)
    })
    contentTarget.innerHTML= `
        <h2>Glassdale Criminals</h2>
        <article class="criminalList">
            ${CrimHTML}
        </article>
    `
}

    






export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
}