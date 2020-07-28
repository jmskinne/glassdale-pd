export const OfficerHTMLConverter = (officerObj) => {
    return `
        <section class="officer card">
            ${officerObj.name}
        </section>
    `
}