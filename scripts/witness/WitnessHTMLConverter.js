export const WitnessHTML = (witnessObj) => {
    return `
        <section class="witness card">
            <div class="witness__name"> Name: ${witnessObj.name}</div>
            <div class="witness__statement"> Statement ${witnessObj.statements}</div>
        </section>
    `   

}