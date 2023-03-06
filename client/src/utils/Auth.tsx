import { toast } from "react-toastify";
import Axios from "./Axios";

// SIGN UP Component
export const SIGNUP = async (info, setLoading, callback) => {
    try {
        
        const {data} = await Axios({
            method: 'POST',
            url: 'auth/signup',
            data: info,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(data.success){
            callback(data)
        } else{
            setLoading(false)
        }

    } catch (error) {
      setLoading(false)
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }
};


export const LOGIN = async (info, setLoading, callback) => {
    try {
        const {data} = await Axios({
            method: 'POST',
            url: 'auth/login',
            data: info,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        setLoading(false)
        console.log(error?.response?.data?.message || 'Something went wrong')
        
    }
}   