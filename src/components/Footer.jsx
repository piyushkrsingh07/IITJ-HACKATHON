import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-gradient-to-r from-[#3C3C3C] to-[#3B3939] text-white h-[300px] flex flex-col justify-between">
    <div class="container mx-auto flex justify-between items-center p-4">
     
      <div class="space-x-6 text-sm ml-20 flex">
     
        
            <div><Link to="/" className="hover:text-green-400">DASHBOARD</Link></div>
 
 <div><Link to="/features" className="hover:text-green-400">FEATURES</Link></div>
 <div><Link to="/contact" className="hover:text-green-400">CONTACT</Link></div>

 
      </div>

      <div class="flex flex-col  space-x-4 self-end">
        <img src="https://ucarecdn.com/d1eba9dd-75c9-4048-94a6-6e536a6cecb8/-/preview/267x348/" alt="Logo" class="h-[100px]"/>
        <h1 class="text-lg font-semibold">VEDAMRUT</h1>
      </div>
    </div>
  
    <div class="text-center mt-10">
      
      {/* <h2 class="text-2xl font-bold">Health. Tradition. Belief.</h2> */}
      <div className="flex space-x-2 ml-20">
              <div className="text-white text-6xl font-semibold">Health.</div>
              <div className="text-black text-6xl font-semibold">Tradition.</div>
              <div className="text-white text-6xl font-semibold">Belief.</div>
            </div>
    </div>
    <div className=' mx-auto w-[90%] h-[1px] bg-white'></div>
    <div class="border-t border-gray-700 py-4">
   
      <div class="container mx-auto flex justify-between items-center text-sm">

        <p>&copy; 2025 All rights reserved</p>
        <nav class="space-x-6">
          <a href="#privacy" class="hover:text-green-400">Privacy Policy</a>
          <a href="#terms" class="hover:text-green-400">Terms of Service</a>
          <a href="#cookies" class="hover:text-green-400">Cookie Policy</a>
        </nav>
      </div>
    </div>
  </footer>



  )
}

export default Footer
