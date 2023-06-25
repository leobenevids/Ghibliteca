import axios from "axios";

const Api = axios.create({
  baseURL: "https://ghibliapi.vercel.app",
});

export const getFilms = async () => {
  try {
    const response = await Api.get("/films")
    return response.data
  } catch (error) {
    console.log(error)
  }
}