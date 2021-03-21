import httpService from "./httpService.js";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/address";

export async function getAddress() {
  const address = await httpService.get(apiEndpoint);
  return address;
}

export async function saveAddress(addressObj) {
  const address = await httpService.post(`${apiEndpoint}`, addressObj);
  return address;
}

export async function updateAddress(addressObj) {
  const address = await httpService.put(apiEndpoint, addressObj);
  return address;
}

export async function deleteAddress(addressObj) {
  try {
    const address = await httpService.delete(
      `${apiEndpoint}/${addressObj._id}`
    );
    return address;
  } catch (error) {
    toast.error("Error deleting the address.");
  }
}

export async function getSelectedAddress() {
  try {
    const address = await httpService.get(apiEndpoint, {
      params: {
        getSelectedAddress: true,
      },
    });
    return address;
  } catch (error) {
    toast.error("Error getting the selected address.");
  }
}

export async function changeDeliveryAddress(addressObj) {
  try {
    const address = await httpService.put(`${apiEndpoint}/${addressObj._id}`);
    return address;
  } catch (error) {
    toast.error("Error changing delivery address.");
  }
}
