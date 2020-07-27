import { useOfficers, getOfficers} from "./OfficerProvider.js"
import { OfficerHTMLConverter } from "./OfficerHTMLConverter.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector(".officersContainer")

export const OfficerList = () => {

    getOfficers()
        .then(() => {
            const arrayOfOfficers = useOfficers()

            let officerHTMLRep = ""
            arrayOfOfficers.forEach(officer => {
                officerHTMLRep += OfficerHTMLConverter(officer)
            })

            contentTarget.innerHTML = `
                <h2>Glassdale Police Officers</h2>
                <article class="officerList">
                    ${officerHTMLRep}
                </article>
            `
        })
}
