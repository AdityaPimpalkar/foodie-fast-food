import user from './user.js'

const { address } = user;

export const addressObj = {
    id:"",
    addressLine1:"",
    addressLine2:"",
    landmark:"",
    city:""
}

export function getAddress() {
    return address;
}

export function saveAddress(address) {
    address.push(address)
}
