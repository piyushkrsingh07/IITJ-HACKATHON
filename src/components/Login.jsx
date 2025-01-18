import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from 'react-icons/fc';

const formSchema = z.object({
  username: z.string().trim().min(4, { message: 'Invalid username' }),
  password: z.string().trim().min(4, { message: 'Invalid password' }),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {


    setLoading(true);


    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,

        }),
      });


      const responseData = await response.json();

      if (response.ok) {
            
      } else {
        alert(responseData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again.');
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[400px] bg-white shadow-lg rounded-xl p-8 border border-gray-300">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://ucarecdn.com/9684b637-c031-462d-a21a-c9695ececc4c/-/preview/117x134/"
            alt="Logo"
            className="w-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
          LOG IN TO YOUR ACCOUNT
        </h2>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-[#76AA64] text-white py-2 rounded-md font-medium shadow-md hover:bg-green-700 transition">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* OR Separator */}
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              {...register('username')}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-green-500 border-gray-300 rounded" />
            <label className="ml-2 text-gray-600 text-sm">Remember Me</label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full py-2 text-white font-bold rounded-md transition ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#76AA64] hover:bg-green-700'
              }`}
            disabled={loading}
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <a href="#" className="text-green-600 font-semibold hover:text-green-700">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
