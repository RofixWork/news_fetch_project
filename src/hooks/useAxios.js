import { useState, useEffect } from "react"
import axiosInstance from "../utils/axios"
const useAxios = (url, method = 'GET', options = {}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        setData([])
        setIsLoading(true)
        try {
            const resp = await axiosInstance({
                url,
                method,
               ...options
            })
            console.log('response', resp);
            
            setData(resp.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setError(error?.message || 'something went wrong')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()

    }, [url])
    return {data, isLoading, error, getData}
}

export default useAxios