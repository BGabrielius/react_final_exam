import axios from "axios";

const HOST = "http://localhost:5000";

class API {
  async signup(userData) {
    const { data } = await axios.post(HOST + "/api/users", userData);

    return data;
  }
  async getUsers() {
    const { data } = await axios.get(HOST + "/api/users");

    return data;
  }

  async updateUser(userData) {
    const { data } = await axios.get(
      HOST + `/api/users/${userData._id}`,
      userData
    );

    return data;
  }
  async deleteUser(userData) {
    const { data } = await axios.get(
      HOST + `/api/users/${userData._id}`,
      userData
    );

    return data;
  }
}

const api = new API();

export default api;
