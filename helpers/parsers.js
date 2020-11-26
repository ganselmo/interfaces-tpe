export function ArrayParser(string){

    let fArray=  string.split('[')[1]
    fArray=  fArray.split(']')[0]
    let array = fArray.split(",")
    return array
}

