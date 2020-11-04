import user from './user.js'

let { addresses } = user;

export const addressObj = {
    id:"",
    addressLine1:"",
    addressLine2:"",
    landmark:"",
    city:"",
    isdefault: false
}

export function getAddress() {
    return addresses;
}

export function getAddressById(addressId) {
    return addresses.filter((address) => address.id === addressId);
}

export function saveAddress(address) {
    addresses.forEach(function(key){
        key.isdefault = false;
    });
    
    if(address.id === "0") {
        const newId = addresses.length+1;
        address.id = newId.toString()
        address.isdefault = true;
        addresses.push(address)
        return address
    } else {
        const addressInDB = addresses.find((savedaddress) => savedaddress.id === address.id)
        const index = addresses.indexOf(addressInDB)
        addressInDB.id = address.id
        addressInDB.addressLine1 = address.addressLine1
        addressInDB.addressLine2 = address.addressLine2
        addressInDB.landmark = address.landmark
        addressInDB.city = address.city
        addressInDB.isdefault = true;
        addresses[index] = addressInDB
        return addressInDB
    }
    
}

export function deleteAddress(addressObj) {
     
}

export function getSelectedAddress() {
    let address = addresses.find((address) => address.isdefault === true)
    address = address ? address: {}
    return address;
}

export function changeDeliveryAddress(address) {
    const index = addresses.indexOf(address);
    addresses.forEach(function(key){
        key.isdefault = false;
    });
    addresses[index].isdefault = true;
    return addresses;
}