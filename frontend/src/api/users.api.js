import axios from "axios";

var URL = "http://localhost:8000/api/users";

export async function createUser(payload) {
  return await axios.post(URL + "/signup", payload);
}

export async function loginUser(payload) {
  return await axios.post(URL + "/login", payload);
}

export async function getAssests() {
  return await axios.get(URL + "/assets");
}

export async function updateAssests(payload) {
  return await axios.patch(URL + "/assets", payload);
}

export async function getAllTransactions() {
  return await axios.get(URL + "/transactions");
}

export async function createTransactions(payload) {
  return await axios.post(URL + "/transactions", payload);
}

export async function deleteTransaction(id) {
  return await axios.delete(URL + "/transactions/" + id);
}

export async function updateTransaction(id, payload) {
  return await axios.patch(URL + "/transactions/" + id, payload);
}
