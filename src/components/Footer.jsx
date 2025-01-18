import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#3C3C3C] to-[#3B3939] h-[360px] w-screen mb-0 mt-0 ml-0 mr-0'>
      <footer className="bg-gradient-to-r from-[#3C3C3C] to-[#3B3939] text-white h-[300px] flex flex-row justify-between items-center p-4">

        {/* Left Section - 80% */}
        <div className="w-[80%] flex flex-col justify-between">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm ml-20">
            <div><Link to="/" className="hover:text-green-400">DASHBOARD</Link></div>
            <div><Link to="/features" className="hover:text-green-400">FEATURES</Link></div>
            <div><Link to="/contact" className="hover:text-green-400">CONTACT</Link></div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-10">
            <div className="flex space-x-2 ml-20">
              <div className="text-white text-6xl font-semibold">Health.</div>
              <div className="text-black text-6xl font-semibold">Tradition.</div>
              <div className="text-white text-6xl font-semibold">Belief.</div>
            </div>
          </div>
        </div>

        {/* Right Section - 20% (Flex Column) */}
        <div className="w-[20%] flex flex-col items-center justify-center">

          {/* Top Div - 80% (Logo) */}
          <div className="w-full h-[80%]">
            <img
              src="https://ucarecdn.com/4b50472a-7b6a-4917-95d3-993d36bd4582/-/preview/474x503/"
              alt="Logo"
              className="h-[200px] w-[200px] px-80px object-cover "
            />
          </div>

          {/* Bottom Div - 20% (Brand Name) */}
          <div className="w-full h-[20%]">
            <h1 className="font-semibold text-2xl">VEDAMRUT</h1>
          </div>

        </div>

      </footer>

      {/* Divider */}
      <div className='mx-auto w-[90%] h-[2px] bg-white'></div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p>&copy; 2025 All rights reserved</p>
          <nav className="space-x-6">
            <a href="#privacy" className="text-white hover:text-green-400">Privacy Policy</a>
            <a href="#terms" className="text-white hover:text-green-400">Terms of Service</a>
            <a href="#cookies" className="text-white hover:text-green-400">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer