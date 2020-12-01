export function ArrayParser(string){

    let fArray=  string.split('[')[1]
    fArray=  fArray.split(']')[0]
    let array = fArray.split(",")
    return array
}

export function millisToMinutesAndSeconds(millis){
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}