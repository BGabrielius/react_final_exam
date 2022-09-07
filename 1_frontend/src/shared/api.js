import axios from "axios";

const HOST = "http://localhost:5000";

class API {
  async signup(userData) {
    const { data } = await axios.post(HOST + "/api/users", userData);

    return data;
  }
  async getUsers(page) {
    const { data } = await axios.get(HOST + `/api/users?page=${page}`);

    return data;
  }

  async updateUser(id, userData) {
    const { data } = await axios.put(HOST + `/api/users/${id}`, userData);

    return data;
  }
  async deleteUser(id) {
    const { data } = await axios.delete(HOST + `/api/users/${id}`);

    return data;
  }
}

const api = new API();

export default api;
