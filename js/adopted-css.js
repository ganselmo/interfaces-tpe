


export let adoptedStyles = []
export let adoptedList = []
export function getCss() {
    return adoptedStyles
}
export function addCSS(adopted) {
    adoptedList.push(adopted.name)
    adoptedStyles.push(adopted)
}

export function findInAdopted(cssUrl) {

    return adoptedList.forEach(elem=>
        {
            if(cssUrl == 'components/content-wrapper/content-wrapper.css')
            {
  
            }

        })


}
