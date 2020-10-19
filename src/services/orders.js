
const orders = [
    {
        delivered_on: "",
        deliveryaddress: {
            addressLine1: "11, Prajakta Society, Opposite Hanuman temple",
            addressLine2: "Brahman society, Hitavardhani road",
            city: "THANE",
            id: "2",
            isdefault: true,
            landmark: "Hitavardhani road, Naupada"
        },
        order_id: 2,
        status: "PENDING",
        paymentby:{
            selectedpayment: "cashondelivery"
        },
        placed_on: "Mon, 19 Oct 2020 14:46:48 GMT",
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
    if(object != undefined) {
        const obj = {
            order_id: orders.length + 1,
            user_id: '',
            placed_on: new Date().toUTCString(),
            delivered_on: '',
            products: object.products,
            deliveryaddress: object.deliveryaddress,
            paymentby: object.paymentby,
            order_total: object.grandtotal
        }
        orders.push(obj);
        return 1;
    }
    
}

