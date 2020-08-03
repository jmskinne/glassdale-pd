import {useCriminals} from "../criminals/CriminalProvider.js"
import { AssociateHTMLConverter } from "./AssociateHTML.js" 


const eventHub = document.querySelector(".container")
const buttonTarget = document.querySelector(".associate-container")

// eventHub.addEventListener("click", (clickEvent) => {
//     if(clickEvent.target.id.includes("associate")) {
//         const clickedAssociate = clickEvent.target.id
//         const customEvent = new CustomEvent("associateClicked", {
//             detail : {
//                 associate : clickedAssociate
//             }
//         })
//         eventHub.dispatchEvent(customEvent)
//     }
    

// })

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
    const crimID = event.detail.associate.split("--")[1]
    console.log(crimID)
    const allCriminals = useCriminals()
    const crim = allCriminals.find((criminal) => {
        return criminal.id === parseInt(crimID)
    })
    console.log(crim)

    
    const knownAssociates = crim.known_associates
    console.log(knownAssociates)
    render(knownAssociates)
})

const render = (associateArray) => {
    const toHTMLrep = associateArray.map(
        (associateArray) => {
            return AssociateHTMLConverter(associateArray)
        }
    ).join("")
    buttonTarget.innerHTML = toHTMLrep



}



//     const clickedCriminal = allCriminals.filter(crim => crim.id === parseInt(crimeId))
//     console.log(clickedCriminal)
//     const associates = clickedCriminal.map(associateArray => associateArray.known_associates)
//     // const associates = clickedCriminal.map(associateArray => ({
//     //     name: associateArray.known_associates.forEach(associateName => associateName.name),
//     //     alibi : associateArray.known_associates.forEach(associateAlibi => associate.alibi)
//     // }))

//     console.log(associates)
//     render(associates)
//     debugger
    
//     // const associates = clickedCriminal.map(associateArray => ({
//     //     name: associateArray.known_associates.name,
//     //     alibi : associateArray.known_associates.alibi
//     // }))

    
//     // const associates = allCriminals.map(crimArray => ({
//     //     crimeid : crimArray.id,
//     //     name : crimArray.known_associates.map(name => name.name),
//     //     alibi : crimArray.known_associates.map(alibi => alibi.alibi)
//     // }))
//     // console.log(associates)
//     // const clickedCriminal = allCriminals.filter(
//     //     (crim => crim.id === parseInt(crimeId))
//     // )
//     // console.log(clickedCriminal)
//     // const knowAssociates = clickedCriminal.map(associates => associates.known_associates)
//     // console.log(knowAssociates)
//     // const namesAndSuch = knowAssociates.forEach(names => names.albi)
    
//     // console.log(namesAndSuch)
    

    
//     // const knownAssociatesAlibis = clickedCriminal.map(
//     //     (crim) => {
//     //         return clickedCriminal.known_associates === crim.known_associates
//     // })
//     //     debugger
//     // console.log(knownAssociatesAlibis)
    
// })
        
        
// // const render = (associateArray) => {
// //     const associateToString = associateArray.map(
// //         associate => {
// //             return AssociateHTMLConverter(associate)
// //         }
// //     ).join("")
// //     buttonTarget.innerHTML += associateToString
// // }

    
    
// const render = (associateArray) => {
//     let crimHTML = ""
//     associateArray.forEach(associate => {
//         crimHTML += AssociateHTMLConverter(associate)
//         }
//     )
//     buttonTarget.innerHTML = `
//         <div class="associate info">
//             ${crimHTML}
//         </div>
//     `
    
// }


// const contentTarget = document.querySelector('.display-container')
// const eventHub = document.querySelector(".container")
