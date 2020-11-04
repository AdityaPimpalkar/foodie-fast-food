import user from './user.js'

const { payments } = user

export function getPaymentOptions() {
    return payments;
}

export function addCard(cardobj) {
    let card = payments.cards.find((card) => card.number === cardobj.number)
    if(card) {
        const index = payments.cards.indexOf(card)
        payments.cards[index] = cardobj
    } else {
        payments.cards.push(cardobj);
    }
}

export function deleteCard(cardobj) {
    
}