import burger1 from "../images/burger1.jpg"
import burger2 from "../images/burger2.jpg"
import burger3 from "../images/burger3.png"
import burger4 from "../images/burger4.jpg"
import burger5 from "../images/burger5.jpg"
import burger6 from "../images/burger6.jpg"

const products = [
    {
        "id":"1",
        "type":"Burger",
        "name":"Cheese Burger",
        "desc":"cheese burger",
        "img": burger1,
        "price":150
    },
    {
        "id": "2",
        "type": "Burger",
        "name": "Grilled ham Burger",
        "desc": "grilled ham burger",
        "img": burger2,
        "price":180
    },
    {
        "id": "3",
        "type": "Wraps",
        "name": "Big ham Burger",
        "desc": "larger grilled ham burger",
        "img": burger3,
        "price":120
    },
    {
        "id": "4",
        "type": "Wraps",
        "name": "Bacon Burger",
        "desc": "larger grilled Bacon burger",
        "img": burger4,
        "price":210
    },
    {
        "id": "5",
        "type": "Wraps",
        "name": "FFF Special Burger",
        "desc": "Grilled chicken with extra Bacon and cheese burger",
        "img":burger5,
        "price":110
    },
    {
        "id": "6",
        "type": "Burger",
        "name": "FFF Chicken",
        "desc": "Grilled chicken with extra Bacon and cheese burger",
        "img":burger6,
        "price":105
    }
]

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find((product) => product.id === id);
}