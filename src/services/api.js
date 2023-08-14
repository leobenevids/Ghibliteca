import axios from "axios";

const Api = axios.create({
  baseURL: "https://ghibliapi.vercel.app",
});

export const getFilms = async () => {
    return await Api.get("/films")
}