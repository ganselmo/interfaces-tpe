


export let adoptedStyles = []
export function getCss() {
    return adoptedStyles
}
export function addCSS(adopted) {
    adoptedStyles.push(adopted)
}

export function findInAdopted(adopted) {
    return adoptedStyles.find(element => element === adopted)

}
