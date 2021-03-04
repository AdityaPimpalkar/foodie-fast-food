import httpService from './httpService.js';
import { toast } from "react-toastify";
import user from './user.js'

let { addresses } = user;

const apiEndpoint = 'http://localhost:3001/api/address'

// export const addressObj = {
//     id:"",
//     addressLine1:"",
//     addressLine2:"",
//     landmark:"",
//     city:"",
//     isdefault: false
// }

export async function getAddress() {
    const Addresses = await httpService.get(apiEndpoint, {
    }).then((res)=> {
        if(res.data !== '') return res.data.Addresses;
        toast.error("Error loading address.");
        return []
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Addresses;
}

export function getAddressById(addressId) {
    return addresses.filter((address) => address.id === addressId);
}

export async function saveAddress(address) {
    const Address = await httpService.post(`${apiEndpoint}/`, address, {
    }).then((res)=> {
        if(res.data !== ''){
            toast.success('Address Updated Successfully!'); 
            return res.data.Addresses;
        } 
        toast.error("Error Saving the address.");
        return [];
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Address;

    // addresses.forEach(function(key){
    //     key.isdefault = false;
    // });
    
    // if(address.id === "0") {
    //     const newId = addresses.length+1;
    //     address.id = newId.toString()
    //     address.isdefault = true;
    //     addresses.push(address)
    //     return address
    // } else {
    //     const addressInDB = addresses.find((savedaddress) => savedaddress.id === address.id)
    //     const index = addresses.indexOf(addressInDB)
    //     addressInDB.id = address.id
    //     addressInDB.addressLine1 = address.addressLine1
    //     addressInDB.addressLine2 = address.addressLine2
    //     addressInDB.landmark = address.landmark
    //     addressInDB.city = address.city
    //     addressInDB.isdefault = true;
    //     addresses[index] = addressInDB
    //     return addressInDB
    // }
    
}

export function deleteAddress(addressObj) {
     
}

export async function getSelectedAddress() {
    const Address = await httpService.get(apiEndpoint, {
        params:{
            id: '',
            getSelectedAddress: true
        }
    }).then((res)=> {
        if(res.data !== '') return res.data;
        toast.error("Error getting selected address.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Address;
}

export async function changeDeliveryAddress(address) {
    const Address = await httpService.put(apiEndpoint, address, {
        params:{
            id: '',
        }
    }).then((res)=> {
        if(res.data !== '') {
            toast.success("Changed the delivery address.");
            return res.data.Addresses;
        }
        toast.error("Error updating address.");
    }).catch((error) => {
        if(error.isAxiosError) {
            return []
        }
    });
    return Address;
}