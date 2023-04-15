import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-journal-69da0-default-rtdb.firebaseio.com",
});

export default journalApi;
