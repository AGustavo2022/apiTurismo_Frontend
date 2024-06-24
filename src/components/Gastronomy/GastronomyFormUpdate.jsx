import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGastronomy } from '../../context/GastronomyContext';
import ClippedDrawer from '../layout/DrawerAppBar';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';



function GastronomyFormUpdate() {

    const [newPhoto, setNewPhoto] = useState()
    const { register, handleSubmit, reset, setValue } = useForm();
    const { getGastronomyId, updateGastronomy } = useGastronomy();
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadGastronomy() {
          if (params.id) {
            const gastronomy = await getGastronomyId(params.id)
            //console.log(gastronomy)
            setValue('name', gastronomy.name)
            setValue('address', gastronomy.address)
            setNewPhoto(gastronomy.photo_url)
          }
        }
        loadGastronomy()
      }, [params.id, setValue])

    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        
        // if (data.photo_url && data.photo_url.length > 0) {
        //     formData.append('photo_url', data.photo_url[0]);
        // } else {
        //     formData.append('photo_url', newPhoto);  // Mantener la foto existente
        // }
        

        console.log(...formData, params.id) 
        
        try {
            await updateGastronomy(params.id, formData);
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
                           
                           { newPhoto && (
                                <div className="mb-2">
                                    <img src={ `http://localhost:8080/${newPhoto}`} alt="" />
                                    <p>Actualiza la foto si lo deseas</p>
                                </div>                                   
                            )
                           }
                           
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

export default GastronomyFormUpdate;


// import React, { useRef, useState, useEffect } from 'react';
// import { useGastronomy } from '../../context/GastronomyContext';
// import { useNavigate, useParams } from 'react-router-dom';
    

// function GastronomyFormUpdate() {

//     const { getGastronomyId, postGastronomy } = useGastronomy();
//     const [gastronomy1, setGastronomy] = useState()
//     const [ imagen, setImage] = useState ('')
//     const params = useParams()
//     const inputRef = useRef(null)

//     const handleImageClick = ()=>{
//         inputRef.current.click()
//     }

//     const handleImagecharge = (event)=>{
//         const file = event.target.file[0]
//         console.log(file)
//         setImage(event.target.file[0])
//     }

//     // useEffect(() => {
//     //                 async function loadGastronomy() {
//     //                 const gastronomyId = await getGastronomyId(params.id)
//     //                 setGastronomy(gastronomyId)
//     //                 console.log(gastronomyId)
//     //             }
//     //             loadGastronomy()
//     //           }, [])

//   return (
//       <>
//           <div>
//               <div onClick={handleImageClick}>
//                   {imagen ? <img src={URL.createObjectURL(imagen)} alt='' /> : <img src={`http://localhost:8080/uploads/img.jpg`} alt='' />}
//                   <input
//                       type='file'
//                       ref={inputRef}
//                       onChange={handleImagecharge}
//                       style={{ display: 'flex' }}
//                   />
//                 <button>Upload</button>
//               </div>
//           </div>


//       </>
//   )
// }

// export default GastronomyFormUpdate

// import React, { useRef, useState, useEffect } from 'react';
// import { useGastronomy } from '../../context/GastronomyContext';
// import { useNavigate, useParams } from 'react-router-dom';

// function GastronomyFormUpdate() {

//     const { getGastronomyId, postGastronomy } = useGastronomy();
//     const [gastronomy, setGastronomy] = useState();
//     const [imagen, setImagen] = useState('');
//     const params = useParams();
//     const inputRef = useRef(null);

//     const handleImageClick = () => {
//         inputRef.current.click();
//     }

//     const handleImageCharge = (event) => {
//         const file = event.target.files[0];
//         console.log(file);
//         setImagen(file);
//     }

//     useEffect(() => {
//         async function loadGastronomy() {
//             const gastronomyId = await getGastronomyId(params.id);
//             setGastronomy(gastronomyId);
//             console.log(gastronomyId);
//         }
//         loadGastronomy();
//     }, [params.id, getGastronomyId]);

//     return (
//         <>
//             <div>
//                 <div onClick={handleImageClick}>
//                     {imagen ? <img src={URL.createObjectURL(imagen)} alt='' /> : <img src={`http://localhost:8080/uploads/img.jpg`} alt='' />}
//                     <input
//                         type='file'
//                         ref={inputRef}
//                         onChange={handleImageCharge}
//                         style={{ display: 'none' }}
//                     />
//                     <button>Subir</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default GastronomyFormUpdate;
