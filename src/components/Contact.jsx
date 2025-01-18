import React from 'react'

const Contact = () => {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
       
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p class="text-gray-600 mb-6">Do you have any questions? We are here to help.</p>
          <form action="#" method="POST" class="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact No."
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
  
    
        <div class="space-y-6">
          <div class="bg-black text-white p-6 rounded-lg space-y-4">
            <h3 class="text-xl font-bold">CONTACT INFORMATION</h3>
            <p class="flex items-center">
              <span class="material-icons text-green-500 mr-2">place</span> Location
            </p>
            <p class="flex items-center">
              <span class="material-icons text-green-500 mr-2">email</span> E-Mail
            </p>
            <p class="flex items-center">
              <span class="material-icons text-green-500 mr-2">phone</span> Phone
            </p>
          </div>
  
        
          <div class="relative">
            <img
              src="https://ucarecdn.com/74fb50c1-5bf7-4b28-89e5-f05f45eb8638/-/preview/589x320/"
              alt="Traditional Remedies"
              class="w-full rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex pl-10 rounded-lg pt-2">
              <p class="text-white font-bold text-lg w-10 pl-0">
                TRADITIONAL REMEDIES - COMBINED WITH MODERN TECHNOLOGY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Contact
