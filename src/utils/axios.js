import axios from "axios";
import { BASE_URL , TIMEOUT} from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})

export default axiosInstance