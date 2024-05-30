import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Card = ({ imageUrl, name, address }) => {

  const handleEditClick = () => {
    console.log('edit')
  };

  const handleDeleteClick = () => {
    console.log('delete')
  };
  
  return (
    <div className='w-full max-w-xxs mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
      <div className='max-w-md mx-auto'>
        <div className='h-[200px]' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className='p-4 sm:p-6'>
          <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{name}</p>
          <div className='flex flex-row'>
            <p className='text-[#3C3C4399] text-[17px] mr-2'>{address}</p>
          </div>
          <p className='text-[#7C7C80] font-[15px] mt-6'>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.</p>
          
          <div className='flex justify-end mt-6 space-x-2'>
            <div className='relative group'>
              <button onClick={handleEditClick} className='p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none'>
                <EditIcon />
              </button>
              <div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2'>
                Editar
              </div>
            </div>
            <div className='relative group'>
              <button onClick={handleDeleteClick} className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none'>
                <DeleteIcon />
              </button>
              <div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2'>
                Eliminar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;