import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Gastronomy_From() {

const { register, handleSubmit, setValue} = useForm()



const onSubmit = handleSubmit(async (data) => {
const dataValid = {
  ...data,
  date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
}
if (params.id) {
  updateTask(params.id, dataValid)
} else {
  createTask(dataValid)
}
navigate('/task')
})

return (
<div className="h-[calc(100vh-100px)] flex items-center justify-center">
  <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

    <form onSubmit={onSubmit}>
      <label htmlFor='title'>Title</label>
      <input type="text" placeholder='Title'
        {...register('title')}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      />
      <label htmlFor='description'>Description</label>
      <textarea rows={3} placeholder='Description'
        {...register('description')}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      ></textarea>
      <label htmlFor='date'>Date</label>
      <input type="date" {...register('date')}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />

      <button className=" bg-indigo-500 px-3 py-2 rounded-md">Save</button>

    </form>
  </div>
</div>
)

  };

export default Gastronomy_From




// const [fullName, setFullName] = useState('Jane Doe');
// const [password, setPassword] = useState('');
// const [newsletter, setNewsletter] = useState(false);

// const handleFullNameChange = (e) => {
//   setFullName(e.target.value);
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
// };

// const handleNewsletterChange = (e) => {
//   setNewsletter(e.target.checked);
// };

// return (
//   <form className="w-full max-w-sm">
//     <div className="md:flex md:items-center mb-6">
//       <div className="md:w-1/3">
//         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
//           Full Name
//         </label>
//       </div>
//       <div className="md:w-2/3">
//         <input
//           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//           id="inline-full-name"
//           type="text"
//           value={fullName}
//           onChange={handleFullNameChange}
//         />
//       </div>
//     </div>
//     <div className="md:flex md:items-center mb-6">
//       <div className="md:w-1/3">
//         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
//           Password
//         </label>
//       </div>
//       <div className="md:w-2/3">
//         <input
//           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//           id="inline-password"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="******************"
//         />
//       </div>
//     </div>
//     <div className="md:flex md:items-center mb-6">
//       <div className="md:w-1/3"></div>
//       <label className="md:w-2/3 block text-gray-500 font-bold">
//         <input
//           className="mr-2 leading-tight"
//           type="checkbox"
//           checked={newsletter}
//           onChange={handleNewsletterChange}
//         />
//         <span className="text-sm">
//           Send me your newsletter!
//         </span>
//       </label>
//     </div>
//     <div className="md:flex md:items-center">
//       <div className="md:w-1/3"></div>
//       <div className="md:w-2/3">
//         <button
//           className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//           type="button"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   </form>
// );