export const CriminalHTMLConverter = (criminalObj) => {
    return `
        <section class="criminal-info card">
            <h3>${criminalObj.name}</h3>
            <div class="criminal__age">Age: ${criminalObj.age}</div>
            <div class="criminal__crime">Crime: ${criminalObj.conviction}</div>
            <div class="criminal__term-start">Term start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__term-end">Term end:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <div class="buttonAssociate"><button id="associate--${criminalObj.id}">Associate Alibis</button></div>
            
        </section>
    `   
}

// const eventHub = document.querySelector(".container")

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