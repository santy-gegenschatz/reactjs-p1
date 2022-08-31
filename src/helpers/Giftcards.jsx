// Create the gitcard objects with their properties
const g1 = { id : '1', value : 25 };
const g2 = { id : '2', value : 75 };
const g3 = { id : '3', value : 100};

const giftcardsArray = [g1,g2,g3];

export const Giftcards = () => {
    let p = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(giftcardsArray)
        }, 1000)
    })
    return p;
}