import { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import UserApi from "./api/UserApi";
import axios from "axios";

export const GlobalState = createContext()

export const DataProvider = ({children}) => {

    const [token,setToken] = useState(false)

    const refreshtoken = async() => {
        const res = await axios.post('/user/refreshtoken')

        setToken(res.data.accesstoken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshtoken()
    },[])

    const state ={ 
        token : [token,setToken],
        productsAPI:ProductAPI(),
        UserApi:UserApi(token)
}

    ProductAPI()

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
