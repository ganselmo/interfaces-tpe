
let contextMenu = document.querySelector('#profile-menu');
document.addEventListener("DOMContentLoaded", async function () {
    
    contextMenu.addEventListener('openContext',openProfileContext)

    contextMenu.addEventListener('closeContext',closeProfileContext)


    closeProfileContext()
    document.querySelector('main').addEventListener('click',closeProfileContext)
})



export function openProfileContext() {
    contextMenu.style.visibility = 'initial'
}

export function closeProfileContext() {
    contextMenu.style.visibility = 'hidden'
}