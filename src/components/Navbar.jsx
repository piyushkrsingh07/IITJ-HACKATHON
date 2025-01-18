import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-screen mt-0 z-50">
  <nav className="bg-white w-screen flex justify-between items-center py-4 px-6 shadow-md">
    <div className="flex items-center">
      <img src="https://ucarecdn.com/8d9b546a-c7d1-499d-9306-e5e5deeb8e1f/-/preview/80x80/" alt="Logo" className="h-12 w-10 " />
      <div className="text-green-600 text-2xl font-semibold">VedAmrut</div>
    </div>
    <ul className="hidden md:flex space-x-8">
      <li>
        <a href="/" className="text-gray-800 text-lg font-medium hover:text-green-600">
          HOME
        </a>
      </li>
      <li>
        <a href="/diagnosis" className="text-gray-800 text-lg font-medium hover:text-green-600">
          DIAGNOSIS
        </a>
      </li>
      <li>
        <a href="/dashboard" className="text-gray-800 text-lg font-medium hover:text-green-600">
          DASHBOARD
        </a>
      </li>
      <li>
        <a href="/features" className="text-gray-800 text-lg font-medium hover:text-green-600">
          FEATURES
        </a>
      </li>
      <li>
        <a href="/contact" className="text-gray-800 text-lg font-medium hover:text-green-600">
          CONTACT
        </a>
      </li>
    </ul>
    <div className="flex items-center space-x-4">
      <a href="/login">
        <button className="text-gray-800 border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
          LOGIN
        </button>
      </a>
      <a href="/signup">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
          SIGN UP
        </button>
      </a>
    </div>
  </nav>
</div>

  )
}

export default Navbar
