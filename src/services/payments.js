//import user from './user.js'
import httpService from './httpService';
import { toast } from 'react-toastify';

//const { payments } = user

const apiEndpoint = 'http://localhost:3001/api/payment';

export async function getPaymentOptions() {
    const Payments = await httpService.get(apiEndpoint, {
        params: {
            id: ''
        }
    })
    .then((res)=> {
        if(res.data !== '') return res.data.Cards;
        toast.error("Error loading payment options.");
        return [];
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Payments;
}

export async function addCard(cardobj) {
    const Payments = await httpService.post(apiEndpoint, cardobj)
    .then((res)=> {
        if(res.data !== '') {
            toast.success("Card Added Successfully!.");
            return res.data.Cards;
        } 
        toast.error("Error adding card details.");
        return [];
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Payments;
}

export async function deleteCard(cardobj) {
    const Payments = await httpService.delete(`${apiEndpoint}/${cardobj._id}`,)
    .then((res)=> {
        if(res.data !== '') {
            toast.success("Card Deleted Successfully!.");
            return res.data.Cards;
        } 
        toast.error("Error adding card details.");
        return [];
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Payments;
}