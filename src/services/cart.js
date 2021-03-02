import httpService from "./httpService";
import { toast } from "react-toastify";

const apiEndpoint = `http://localhost:3001/api/cart`;

export async function getCartItems() {
    const CartItems = await httpService.get(`${apiEndpoint}`, {
        params:{
            id: ''
        }
    }).then((res)=> {
        if(res.data !== '') return res.data.Products;
        toast.error("Error loading cart items.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return CartItems;
}

export async function getTotalItems() {
    const TotalCartItems = await httpService.get(`${apiEndpoint}` , {
        params:{
            id: ''
        }
    }).then((res)=> {
        if(res.data !== '') return res.data.Products.length;
        toast.error("Error loading cart count.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return 0
        }
    });
    return TotalCartItems;
}

export async function addToCart(product) {
    const Products = await httpService.post(`${apiEndpoint}/`, product, {
    }).then((res)=> {
        if(res.data !== ''){
            toast.success('Product Added To Your Cart!'); 
            return res.data.Products;
        } 
        toast.error("Error loading cart items.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Products;
}

export async function removeFromCart(product) {
    const Products = await httpService.put(`${apiEndpoint}/`, product, {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
    }).then((res)=> {
        if(res.data !== '') return res.data.Products;
        toast.error("Error loading cart items.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Products;
}

export async function deleteFromCart(product) {
    const Products = await httpService.delete(`${apiEndpoint}/${product._id}`, {
        headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:8887'
        },
    }).then((res)=> {
        if(res.data !== '') {
            toast.info('Product Removed From The Cart!'); 
            return res.data.Products;
        }
        toast.error("Error loading cart items.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Products;
}

export function clearCart() {
    //cart = []
}