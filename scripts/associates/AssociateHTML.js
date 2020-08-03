export const AssociateHTMLConverter = (associateObj) => {
    
    return `
        <div class="associate card">
            <p class="associate__name">Name : ${associateObj.name}</p>
            <p class="associate__alibi">Alibi: ${associateObj.alibi}</p>
        </div>
    `
}