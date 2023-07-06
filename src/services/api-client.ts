import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1d378c2ed35b40c496c2c7906042d16a"
    }
})