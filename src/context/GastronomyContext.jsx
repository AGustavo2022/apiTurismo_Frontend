import { createContext, useContext, useState } from "react";
import { deleteGastronomyRequest, getGastronomyRequest, postGastronomyRequest } from "../api/gastronomy.js";

const GastronomyContext = createContext()

export const useGastronomy = ()=>{
    const context = useContext(GastronomyContext)
    if (!context){
        throw new Error("useGastronomy must be used within an GastronomyProvider")
    }
    return context
}

export function GastronomyProvider({ children }){

    const [gastronomy, setGastronomy] = useState([])

    const getGastronomy = async () =>{

        try {
            const res = await getGastronomyRequest()
            //console.log(res.data)
            const response = res.data
            setGastronomy(response)
        } catch (error) {
            console.log(error)
        }
    }

    const postGastronomy = async (formData) => {
        try {
            const response = await postGastronomyRequest(formData)
            return response.data;
        } catch (error) {
            console.error('Error posting gastronomy data', error);
            throw error;
        }
    }

    const deleteGastronomy = async (id) => {
        try {
            const res = await deleteGastronomyRequest(id)
        } catch (error) {
            console.log(error);
        }
    }

    function removelist(id){
        const newGastronomy = gastronomy.filter((e) => e.id !== id)
        //console.log(newTasks)
        setGastronomy(newGastronomy)
    }

    return(
        <GastronomyContext.Provider value={{
            gastronomy,
            getGastronomy,
            postGastronomy,
            deleteGastronomy,
            removelist
        }}>
            {children}
        </GastronomyContext.Provider>
    )
}

