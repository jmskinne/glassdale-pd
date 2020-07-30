export const NoteHTMLConverter = (noteObj) => {
    return `
        <section class="note card">
            <div class="note__title">Title: ${noteObj.title}</div>
            <div class="note__content">${noteObj.content}</div>
            <div class="note__about-crim">Criminal: ${noteObj.criminalName}</div>
            <div class="note__author">Author: ${noteObj.author}</div>
            <div class="note__timestamp">Date Created: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</div>
        </section>
    `   
}