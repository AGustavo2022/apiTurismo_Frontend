import { useForm } from 'react-hook-form'
import { useAuth } from "../context/AuthContext.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const { signin, isAuthenticated, errors: signinErrors } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  useEffect (()=>{
    console.log(isAuthenticated)
    if(isAuthenticated) navigate('/form')
  }, [isAuthenticated])

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-gray-300 max-w-md p-10 rounded-md">
      {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2" key={i}>{error}</div>
        ))
      }

        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input type='text' {...register('user', { required: true })}
            className="w-full bg-gray-100 px-4 py-2 rounded-md my-2"
            placeholder='user'
          />
          {errors.email && (<p className="text-red-500">email is requiered</p>)}
          <input type='password' {...register('password', { required: true })}
            className="w-full bg-gray-100 px-4 py-2 rounded-md my-2"
            placeholder='password'
          />
          {errors.password && (<p className="text-red-500">password is requiered</p>)}
          <button type='submit'
          className=" bg-sky-500 text-white px-4 py-2 rounded-md my-2">login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage