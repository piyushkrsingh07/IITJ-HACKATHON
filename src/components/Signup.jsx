import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  username: z.string().trim().min(4, { message: 'Invalid username' }),
  password: z.string().trim().min(4, { message: 'Invalid password' }),
});

const Signup = () => {
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
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
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
  // async function onSubmit(data) {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 5000));
  //     console.log('submitting form data', data);
  //   } catch (error) {
  //     console.log('error:', error);
  //     setError('root', {
  //       message: error.message,
  //     });
  //   }
  // }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-4/5 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="p-8 lg:p-12">
          <h1 className="text-2xl font-bold text-green-700">SIGN UP TO VedAmrut</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
            {/* Name Field */}
            <div>
              <label htmlFor="username" className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                id="username"
                placeholder="Enter Full Name"
                {...register('username')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                {...register('password', { required: 'Password is required' })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I have read <a href="#" className="text-green-500 underline">terms & conditions</a> and agree
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white font-bold rounded-md ${loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
                } transition duration-300`}
              disabled={loading}
            >
              {isSubmitting ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-green-500 underline">Log in</a>.
          </p>
        </div>

        {/* Right Side - Info Section */}
        <div className="p-8 lg:p-12 bg-gray-100 flex flex-col justify-center items-center">
          <img
            src="https://ucarecdn.com/04687d00-60d7-4189-972e-7cc1d2ea9790/-/preview/580x282/"
            alt="Herbal Medicines"
            className="w-full h-auto rounded-lg"
          />
          <h2 className="text-xl font-semibold text-gray-700 mt-6">How can we help?</h2>
          <ul className="space-y-4 mt-4 text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✔</span>
              <span>Get offers on a new car built to your specifications.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✔</span>
              <span>Beat the queues with readily available cars in stock.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✔</span>
              <span>Free part exchange valuation of your current car.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✔</span>
              <span>Unlock exclusive offers with financing and deals.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
