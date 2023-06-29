import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b4da6622a7ac4ddcaeb879902d7ad17d"
    }
})