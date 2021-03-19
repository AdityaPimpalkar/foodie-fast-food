import httpService from "../services/httpService";
import { apiUrl } from "../config.json";

const authApiEndpoint = apiUrl + "/auth";
const userApiEndpoint = apiUrl + "/user";

export async function getUserDetails() {
  try {
    const { data: user } = await httpService.get(userApiEndpoint);
    return user;
  } catch (ex) {
    console.log(ex);
  }
}

export async function updateUser(user) {
  try {
    const { data: userObj } = await httpService.put(authApiEndpoint, user);
    return userObj;
  } catch (ex) {
    console.log(ex);
  }
}

export async function logUser(user) {
  try {
    const { data: token } = await httpService.post(authApiEndpoint, user);
    return token;
  } catch (ex) {
    console.log(ex);
  }
}
