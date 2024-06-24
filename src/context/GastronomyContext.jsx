import { createContext, useContext, useState } from "react";
import { deleteGastronomyRequest, getGastronomyIdRequest, getGastronomyRequest, postGastronomyRequest, updateGastronomyRequest } from "../api/gastronomy.js";

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

    const getGastronomyId = async (id) =>{

        try {
            const res = await getGastronomyIdRequest(id)
            //console.log(res.data)
            //const response = res.data
            return res.data
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

    const updateGastronomy = async (id, update) =>{
        try {
            await updateGastronomyRequest(id, update)
        } catch (error) {
            console.log(error)
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
            getGastronomyId,
            postGastronomy,
            updateGastronomy,
            deleteGastronomy,
            removelist
        }}>
            {children}
        </GastronomyContext.Provider>
    )
}

