import httpService from "./httpService";

const apiEndpoint = `http://localhost:3001/api/cart`;

export async function getCartItems() {
    const { Products } = await httpService.get(`${apiEndpoint}`, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
        params:{
            id: ''
        }
    }).then((res)=> {
        return res.data
    }).catch((error) => {
        console.log(error)
    });
    return Products;
}


export async function getTotalItems() {
    const { Products } = await httpService.get(`${apiEndpoint}` , {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
        params:{
            id: ''
        }
    }).then((res)=> {
        return res.data
    }).catch((error) => {
        console.log(error)
    });
    return Products.length;
}

export async function addToCart(product) {
    const { Products } = await httpService.post(`${apiEndpoint}/`, product, {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
    }).then((res)=> {
        return res.data
    }).catch((error) => {
        console.log(error)
    });
    return Products;
}

export async function removeFromCart(product) {
    const { Products } = await httpService.put(`${apiEndpoint}/`, product, {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
    }).then((res)=> {
        return res.data
    }).catch((error) => {
        console.log(error)
    });
    return Products;
}

export async function deleteFromCart(product) {
    const { Products } = await httpService.delete(`${apiEndpoint}/${product._id}`, {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
    }).then((res)=> {
        return res.data
    }).catch((error) => {
        console.log(error)
    });
    return Products;
}

export function clearCart() {
    //cart = []
}