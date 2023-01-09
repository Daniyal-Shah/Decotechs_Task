import axios from "axios";

var URL = "http://localhost:8000/api/users";

export async function createUser(payload) {
  return await axios.post(URL + "/signup", payload);
}

export async function loginUser(payload) {
  return await axios.post(URL + "/login", payload);
}

export async function getAssests() {
  return await axios.post(URL + "/assests");
}

export async function getAllTransactions() {
  return await axios.post(URL + "/transactions");
}
