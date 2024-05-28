import { createContext, useContext, useState } from "react";
import { getGastronomyRequest, postGastronomyRequest } from "../api/gastronomy.js";

const GastronomyContext = createContext()

export const useGastronomy = ()=>{
    const context = useContext(GastronomyContext)
    if (!context){
        throw new Error("useGastronomy must be used within an GastronomyProvider")
    }
    return context
}

export function GastronomyProvider({ children }){

    const [gastronomy, setgastronomy] = useState([])

    const getGastronomy = async () =>{

        try {
            const res = await getGastronomyRequest()
            //console.log(res.data)
            const response = res.data
            setgastronomy(response)
        } catch (error) {
            console.log(error)
        }
    }

    // const postGastronomy = async (data) => {
    //     const res = await postGastronomyRequest(data)
    //     console.log(res)
    // }
    const postGastronomy = async (formData) => {
        try {
            const response = await postGastronomyRequest(formData)
            return response.data;
        } catch (error) {
            console.error('Error posting gastronomy data', error);
            throw error;
        }
    }

    return(
        <GastronomyContext.Provider value={{
            gastronomy,
            getGastronomy,
            postGastronomy
        }}>
            {children}
        </GastronomyContext.Provider>
    )
}

