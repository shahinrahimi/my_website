import axios from "axios";

const URL: string = process.env.NODE_ENV === "production" ? "/api" : "http://localhost:6600/api"

export default axios.create({
    withCredentials: true,
    baseURL: URL,
})
