import user from './user.js'

let { cart } = user

//const cart = [
    // {
    //     "productId": "3",
    //     "selectedItems": 2
    // }
//]


export function getCartItems() {
    return cart;
}


export function getTotalItems() {
    return cart.length;
}

export function addToCart(product) {
    const inCart = cart.find((cartobj) => cartobj.productId === product.id)
    if(inCart) {
        const index = cart.indexOf(inCart);
        cart[index].selectedItems++
    } else {
        cart.push({
            productId: product.id,
            selectedItems: 1
        })
    }
    return cart;
}

export function removeFromCart(product) {
    const inCart = cart.find(cartobj => cartobj.productId === product.id);
    if(inCart) {
        const index = cart.indexOf(inCart);
        let itemCount = cart[index].selectedItems;
        cart[index].selectedItems--
        itemCount = cart[index].selectedItems;
        if(itemCount === 0) deleteFromCart(product)
    }
    return cart;
}

export function deleteFromCart(product) {
    const cartobj = cart.find(cartobj => cartobj.productId === product.id);
    cart.splice(cart.indexOf(cartobj), 1)
    return cart;
}

export function clearCart() {
    cart = []
}