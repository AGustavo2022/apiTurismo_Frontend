import  axios  from "./axios.js"

export const getGastronomyRequest = async () => axios.get(`/gastronomy`)

export const postGastronomyRequest = async (formData) => axios.post('/gastronomy', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }})

export const updateGastronomyRequest = async (id, data) => axios.put(`/gastronomy/${id}`, data)

export const deleteGastronomyRequest = async (id) => axios.delete(`/gastronomy/${id}`)
