import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
 username:z.string().trim().min(4,{message:'Invalid username'}),
 password:z.string().trim().min(4,{message:'Invalid password'}),

})
const Login = () => {
  const [loading, setLoading] = useState(false);




  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    watch,
    setError
  } = useForm({
    defaultValues:{
      username:'',
      password:''
    },
    resolver:zodResolver(formSchema)
  })



  
  // const onSubmit = async (data) => {
 

  //   setLoading(true);
   

  //   try {
  //     const response = await fetch('', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //      username:data.username,
  //         password: data.password,
       
  //       }),
  //     });


  //     const responseData = await response.json();

  //     if (response.ok) {
      
  //     } else {
  //       alert(responseData.message || 'Login failed. Please try again.');
  //     }
  //   } catch (error) {
  //     alert('An error occurred during login. Please try again.');
  //     console.error('Error during login:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  async function onSubmit(data){
    //API CALL STIMULATE
    try{
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("submitting form data",data)
    }catch(error){
        console.log("error:",error)
           setError("root", {
     message: error.message,
      });
   }
    }

  return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)} >
    
    <div className="w-2/3 space-y-6">
            <div className="space-y-2">
              <label htmlFor="" className="block text-black font-bold text-lg">Name:</label>
              <input
                // id="Name"
                placeholder="Enter Your Name"
                {...register('username')}
                className="w-full p-2 bg-white border border-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-black"
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

      <button
              type="submit"
              className={`w-full py-2 rounded-md text-white font-bold ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              } transition duration-300`}
              disabled={loading}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>

    </div>
   </form>
    </div>
  )
}

export default Login
