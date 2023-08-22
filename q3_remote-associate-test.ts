function getQuestionPart(phrases:string[]):string[] {
    // return array of three strings that makes a question for "Remote Associates Test".
    let commonString: string = ``;
    let commonArray: string[] = [];
    let startSearch: number = 0;
    for (let len = 0; len < phrases[0].split("").length; len++) {
        commonString = phrases[0].substring(startSearch, len + 1)
        if (phrases.every(row => row.includes(commonString))) {
            commonArray.push(commonString)
            continue;
        } else {
            startSearch = len
        }
    }
    const [mostCommonWord] = commonArray.slice(-1)
    return phrases.map(row => row.replace(mostCommonWord,"").trim());
}

console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]))
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]))