const Cart = {
    products: [
        {
            ProductId: "1",
            ProductType: "Burger",
            ProductName: "Cheese Burger",
            ProductDesc: "cheese burger",
            selectedItems: 0
        },
        {
            ProductId: "2",
            ProductType: "Burger",
            ProductName: "Grilled ham Burger",
            ProductDesc: "grilled ham burger",
            selectedItems: 0
        },
        {
            ProductId: "3",
            ProductType: "Wraps",
            ProductName: "Big ham Burger",
            ProductDesc: "larger grilled ham burger",
            selectedItems: 0
        },
        {
            ProductId: "4",
            ProductType: "Wraps",
            ProductName: "Bacon Burger",
            ProductDesc: "larger grilled Bacon burger",
            selectedItems: 0
        },
        {
            ProductId: "5",
            ProductType: "Wraps",
            ProductName: "FFF Special Burger",
            ProductDesc: "Grilled chicken with extra Bacon and cheese burger",
            selectedItems: 0
        }
    ]
}

const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
}

export function getCartItems() {
    return Cart.products;
}

export function gridCartItems() {
    return chunk(Cart.products, 4);
}

export function gridTotalItems() {
    return Cart.products.reduce(function(a,b){
        return a + b.selectedItems;
    }, 0);
}