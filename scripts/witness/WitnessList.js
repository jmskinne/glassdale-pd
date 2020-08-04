import {useWitnesses, getWitnesses} from "./WitnessProvider.js"
import { WitnessHTML } from "./WitnessHTMLConverter.js"

const contentTarget = document.querySelector('.display-container')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showWitness", customEvent => {
    WitnessList()

})

export const WitnessList = () => {
    getWitnesses()
        .then(() => {
            const allWitnesses = useWitnesses()
            render(allWitnesses)
        })
}

const render = (witnessArray) => {
    const witnessToString = witnessArray.map(
        currentWitness => {
            return WitnessHTML(currentWitness)
        }
    ).join("")

    contentTarget.innerHTML = witnessToString
}