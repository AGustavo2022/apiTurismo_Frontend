import React from 'react';
import { useForm } from 'react-hook-form';
import { useGastronomy } from '../context/GastronomyContext';
import ClippedDrawer from '../components/layout/DrawerAppBar';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function GastronomyForm() {
    const { register, handleSubmit, reset } = useForm();
    const { postGastronomy } = useGastronomy();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('photo_url', data.photo_url[0]);

        console.log(...formData) 
        try {
            await postGastronomy(formData);
            reset();
            navigate('/gastronomy')
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    });

    return (
        <>
            <ClippedDrawer />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <div className="flex items-center justify-center">
                    <div className="bg-gray-300 max-w-md w-full p-10 rounded-md">
                        <form onSubmit={onSubmit}>
                            <label htmlFor="name">Nombre del local</label>
                            <input
                                type="text"
                                placeholder="Nombre del local"
                                {...register('name')}
                                className="w-full bg-gray-100 px-4 py-2 rounded-md my-2"
                            />

                            <label htmlFor="address">Dirección</label>
                            <input
                                type="text"
                                placeholder="Dirección"
                                {...register('address')}
                                className="w-full bg-gray-100 px-4 py-2 rounded-md my-2"
                            />

                            <label htmlFor="photo_url">Photo URL</label>
                            <input
                                type="file"
                                {...register('photo_url')}
                                className="w-full bg-gray-100 px-4 py-2 rounded-md my-2"
                            />

                            <button type="submit" className="bg-cyan-500 px-3 py-2 rounded-md">Enviar</button>
                        </form>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default GastronomyForm;
