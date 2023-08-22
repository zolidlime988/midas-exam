interface Score {
    [key: string]: number;
}

interface Card {
    [key: string]: number;
}

function isNotTriple(a: number[], b: number[]): boolean {
    return JSON.stringify(a) !== JSON.stringify(b);
}

function getSuitAndScore(card: Card): [string, number] {
    const suit: string = Object.keys(card)[0];
    const score: number = Object.values(card)[0];
    return [suit, score]
}

function getHandScore(input:string): number {
    const scoreEachSuits: Score = {
        S: 0,
        C: 0,
        H: 0,
        D: 0
    }
    const splitScore: string[] = input.split(" ");
    const cards: Card[] = []
    splitScore.forEach((score: string) => {
        const [cardType, realScore] = [score.slice(0, 1), score.slice(1)];
        cards.push({
            [cardType]: realScore === "A" ? 11 : Number(realScore)
        })
    })
    
    let currentCard: Card = cards[0];
    let [suit, score] = getSuitAndScore(currentCard)
    scoreEachSuits[suit] += score
    let isTriple: boolean = true;
    for (let pos = 1; pos < cards.length; pos++) {
        const element = cards[pos];
        [suit, score] = getSuitAndScore(element)
        scoreEachSuits[suit] += score
        if (isNotTriple(Object.values(currentCard),Object.values(element))) {
            isTriple = false;
            break;
        }
    }

    if (isTriple) {
        const score = Object.values(cards[0])
        if (score[0] === 11) {
            return 35
        } else {
            return 32.5
        }
    }
    
    return Math.max(...Object.values(scoreEachSuits))
}

console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("SA HA CA"));
console.log(getHandScore("S8 H8 C8"));