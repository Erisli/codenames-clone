import React from 'react'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*pseudo code
    count = 25;
    NotOccupied[25] = {0,1,2,3,...,24}
    
    //two black card corresponding to each green card 
    blackToG1 = index of one of the green card
    blackToG2 = index of one of the green card

    //two black card corresponding to each white card
    blackToW1 = index of one of the white card
    blackToW2 = index of one of the white card

    //1 black card has same index to the other player
    blackToB = blackToB

    //rest 8 green cards
    green1[8]
    green2[8]

    //step1: get random index for first black card for any player
    random1 = NotOccupied[getRandomInt(count--)]
    NotOccupied.remove(random1)
    blackToG1 = random1
    green2.append(random1)

    random1 = NotOccupied[getRandomInt(count--)]
    NotOccupied.remove(random1)
    blackToG2 = random1
    green1.append(random1)

    //step2: get second black card index
    random2 = NotOccupied[getRandomInt(count--)]
    NotOccupied.remove(random2)
    blackToB = random2

    //step3: get third black card index
    random3 = NotOccupied[getRandomInt(count--)]
    NotOccupied.remove(random3)
    blackToW1 = random3

    random3 = NotOccupied[getRandomInt(count--)]
    NotOccupied.remove(random3)
    blackToW2 = random3

    //step4: get index for three green cards
    random4 = NotOccupied[getRandomInt(count--)]
    green1.append(random4)
    green2.append(random4)
    NotOccupied.remove(random4)

    random5 = NotOccupied[[getRandomInt(count--)]
    green1.append(random5)
    green2.append(random5)
    NotOccupied.remove(random5)

    random6 = NotOccupied[[getRandomInt(count--)]
    green1.append(random6)
    green2.append(random6)
    NotOccupied.remove(random6)

    //rest green for player 1  
    for(i < 5){
        temp = NotOccupied[getRandomInt(count--)]
        NotOccupied.remove(temp)
        green1.append(temp)
    }

    //rest green for player 2  
    for(i < 5){
        temp = NotOccupied[getRandomInt(count--)]
        NotOccupied.remove(temp)
        green1.append(temp)
    }

    //rest of the occupied array would be common white cards

    //map for player 1
    black1[] = blackToG1 + blackToB + blackToW1
    map1 = green1[] + black1[]
    rest are white

    //map for player 2
    black2[] = blackToG2 + blackToB + blackToW2
    map2 = green2[] + black2[]
    rest are white
*/
export default function index() {
    return (
        <div>

        </div>
    )
}
