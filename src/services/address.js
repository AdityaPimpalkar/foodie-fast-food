import httpService from "./httpService.js";
import { toast } from "react-toastify";
import user from "./user.js";

let { addresses } = user;

const apiEndpoint = "http://localhost:3001/api/address";

export async function getAddress() {
  const Addresses = await httpService
    .get(apiEndpoint, {})
    .then((res) => {
      if (res.data !== "") return res.data.Addresses;
      toast.error("Error loading address.");
      return [];
    })
    .catch((error) => {
      if (error.isAxiosError) {
        return [];
      }
    });
  return Addresses;
}

export function getAddressById(addressId) {
  return addresses.filter((address) => address.id === addressId);
}

export async function saveAddress(address) {
  const Address = await httpService
    .post(`${apiEndpoint}/`, address, {})
    .then((res) => {
      if (res.data !== "") {
        toast.success("Address Updated Successfully!");
        return res.data.Addresses;
      }
      toast.error("Error Saving the address.");
      return [];
    })
    .catch((error) => {
      if (error.isAxiosError) {
        return [];
      }
    });
  return Address;
}

export async function updateAddress(addressObj) {
  const address = await httpService.put(apiEndpoint, addressObj);
  return address;
}

export function deleteAddress(addressObj) {}

export async function getSelectedAddress() {
  const Address = await httpService.get(apiEndpoint, {
    params: {
      getSelectedAddress: true,
    },
  });
  return Address;
}

export async function changeDeliveryAddress(address) {
  const Address = await httpService.put(`${apiEndpoint}/${address._id}`);
  return Address;
}
