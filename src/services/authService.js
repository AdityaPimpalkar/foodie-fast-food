import httpService from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

httpService.setJwtHeader(getJwt());

export async function login(userObj) {
  const { profileObj: user } = userObj;
  delete user.googleId;
  const { data: token } = await httpService.post(apiEndpoint, user);
  setJwt(token);
}

function setJwt(token) {
  sessionStorage.setItem(tokenKey, token);
}

function getJwt() {
  return sessionStorage.getItem(tokenKey);
}

export default {
  login,
};
