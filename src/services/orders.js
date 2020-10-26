import { clearCart } from "./cart";

const orders = [
    {
        delivered_on: new Date(Date.now()).toLocaleString([], { hour12: true}),
        deliveryaddress: {
            addressLine1: "11, Prajakta Society, Opposite Hanuman temple",
            addressLine2: "Brahman society, Hitavardhani road",
            city: "THANE",
            id: "2",
            isdefault: true,
            landmark: "Hitavardhani road, Naupada"
        },
        order_id: 1,
        order_number: "ORD6743526478332354",
        payment_status: "PAID",
        order_stage: 4,
        paymentby:{
            selectedpayment: {
                card:{
                    cvv:"234",
                    expiry:"01/23",
                    name:"XYZ",
                    number: "2345678901234567"
                }
            }
        },
        placed_on: new Date("Mon, 19 Oct 2020 14:46:48 GMT").toLocaleString([], { hour12: true}),
        products: [
            {
                desc: "larger grilled ham burger",
                id: "3",
                img: "/foodie-fast-food/static/media/burger3.344ece69.png",
                name: "Big ham Burger",
                price: 120,
                selectedItems: 2,
                total: 240
            },
            {
                desc: "larger grilled Bacon burger",
                id: "4",
                img: "/foodie-fast-food/static/media/burger4.91b5fc65.jpg",
                name: "Bacon Burger",
                price: 210,
                selectedItems: 3,
                total: 630
            },
            {
                desc: "grilled ham burger",
                id: "2",
                img: "/foodie-fast-food/static/media/burger2.566fa47c.jpg",
                name: "Grilled ham Burger",
                price: 180,
                selectedItems: 3,
                total: 540  
            }
        ],
        order_total: 1220,
        user_id: ""
    }
]

export function getOrders() {
    return orders;
}

export function createOrder(object) {
    if(object !== undefined) {
        const obj = {
            order_id: orders.length + 1,
            user_id: '',
            placed_on: new Date(Date.now()).toLocaleString([], { hour12: true}),
            delivered_on: '',
            products: object.products,
            deliveryaddress: object.deliveryaddress,
            paymentby: object.paymentby,
            order_total: object.grandtotal,
            order_number: 'ORD6743526478332354'+ orders.length + 1,
            payment_status: object.paymentby.selectedpayment !== "cashondelivery" ? "PAID" : "PENDING",
            order_stage: 1,
        }
        orders.push(obj);
        clearCart();
        return obj.order_number;
    } else {
        return "";
    }
    
}

export function GetOrderDetails(order_number) {
    const order = orders.find((order) => order.order_number === order_number)
    if(order) return order
    else return null;
}