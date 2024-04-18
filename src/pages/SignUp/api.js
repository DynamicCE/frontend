import axios from "axios";
function signUp(body) {
  return axios.post("/api/v1/users", body);
}
