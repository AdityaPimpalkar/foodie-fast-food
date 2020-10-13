
const orders = [
    // {
    //     order_id: '1',
    //     user_id: '1',
    //     placed_on: new Date().getUTCDate(),
    //     delivered_on: '',
    //     products: [],
    //     deliveryaddress: {},
    //     paymentby: {},
    //     total: 0
    // }
]

export function getOrders() {
    return orders;
}

export function createOrder(object) {
    if(object != undefined) {
        const obj = {
            order_id: orders.length + 1,
            user_id: '',
            placed_on: new Date().toUTCString(),
            delivered_on: '',
            products: object.products,
            deliveryaddress: object.deliveryaddress,
            paymentby: object.paymentby,
            total: object.grandtotal
        }
        orders.push(obj);
        return 1;
    }
    
}

