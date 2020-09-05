import user from './user.js'

const { addresses } = user;

export const addressObj = {
    id:"",
    addressLine1:"",
    addressLine2:"",
    landmark:"",
    city:""
}

export function getAddress() {
    return addresses;
}

export function getAddressById(addressId) {
    return addresses.saved.filter((address) => address.id === addressId);
}

export function saveAddress(address) {
    if(address.id === "") {
        const newId = (addresses.length+1).toString();
        address = { id: newId, ...address}
        addresses.default = newId;
        addresses.saved.push(address)
    } else {
        const addressInDB = addresses.saved.find((savedaddress) => savedaddress.id === address.id)
        const index = addresses.saved.indexOf(addressInDB)
        addressInDB.id = address.id
        addressInDB.addressLine1 = address.addressLine1
        addressInDB.addressLine2 = address.addressLine2
        addressInDB.landmark = address.landmark
        addressInDB.city = address.city
        addresses.saved[index] = addressInDB
    }
    
}
