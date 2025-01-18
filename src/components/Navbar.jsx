import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
    <nav className='relative flex justify-between space-x-3 bg-black h-[50px] mt-0 pl-2 pr-3 items-center w-full'>
      

   
  

       
     

      <div className='flex ml-5 mr-3 gap-3'>
        
       
        <NavLink to="/login">
            <button className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>Login</button>
        </NavLink>
         
      
     
        <NavLink to="/signup">
          <button className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>SignUp</button>
        </NavLink>
       








      </div>



       

     
    </nav>

   


         
         <nav className="bg-black p-3 flex justify-between items-center">
          <div className='flex gap-x-2 '>
       
         <div className="text-white text-2xl font-bold mt-4">Vedamrut</div>
         </div>
         <ul className="md:flex space-x-4">
           <li><Link to="/" className="text-white text-xl block px-4 py-2">Dashboard</Link></li>
 
           <li><Link to="/features" className="text-white text-xl block px-4 py-2">Features</Link></li>
           <li><Link to="/contact" className="text-white  text-xl block px-4 py-2">Contact</Link></li>

         </ul>
         <NavLink to="/">
        <button onClick={()=>{
              //  setIsLoggedIn(false)
              //  toast.success("You are logged out");
                
         }} className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>Logout</button>
        </NavLink>
        
       </nav>






   
    </div>
  )
}

export default Navbar
