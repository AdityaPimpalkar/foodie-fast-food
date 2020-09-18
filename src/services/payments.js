import user from './user.js'

const { payments } = user

export function getPaymentOptions() {
    return payments;
}

export function addCard(card) {
    payments.cards.push(card);
}