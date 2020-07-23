import {CriminalHTMLConverter} from "./CriminalHTMLConverter.js"
import { useCriminals, getCriminals} from "./CriminalProvider.js"

const content = document.querySelector('.criminalsContainer')

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            let criminalHTMLRep = ""
            criminalArray.forEach(criminal => {
                criminalHTMLRep += CriminalHTMLConverter(criminal)
            })

            content.innerHTML = criminalHTMLRep
        })
}