const products = [
    {
        "id":"1",
        "type":"Burger",
        "name":"Cheese Burger",
        "desc":"cheese burger",
        "img":"/images/burger1.jpg",
        "price":150
    },
    {
        "id": "2",
        "type": "Burger",
        "name": "Grilled ham Burger",
        "desc": "grilled ham burger",
        "img":"/images/burger2.jpg",
        "price":180
    },
    {
        "id": "3",
        "type": "Wraps",
        "name": "Big ham Burger",
        "desc": "larger grilled ham burger",
        "img":"/images/burger3.png",
        "price":120
    },
    {
        "id": "4",
        "type": "Wraps",
        "name": "Bacon Burger",
        "desc": "larger grilled Bacon burger",
        "img":"/images/burger4.jpg",
        "price":210
    },
    {
        "id": "5",
        "type": "Wraps",
        "name": "FFF Special Burger",
        "desc": "Grilled chicken with extra Bacon and cheese burger",
        "img":"/images/burger5.jpg",
        "price":110
    }
]

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find((product) => product.id === id);
}