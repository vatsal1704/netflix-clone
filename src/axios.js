import axios from "axios";

const instance = axios.create({
  //   baseURL:" https://api.themoviedb.org/3/movie/550?api_key=3e4b62dd22bce6394703b59ea02cc174",
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
