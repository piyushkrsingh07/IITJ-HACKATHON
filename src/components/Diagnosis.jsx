import React from 'react'

const Diagnosis = () => {
  return (
    <div>
       <div class="text-center my-10">
    <h1 class="text-3xl font-semibold text-gray-800">DIAGNOSE</h1>
    <p class="text-gray-600 mt-4">
      A refined way to diagnose your medical issues by a refined combination of cutting-edge AI and cloud computing tools.
    </p>
   
    <div class="mt-8">
      <button class="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition">
        <span class="text-lg font-medium">DIAGNOSE MODE</span>
        <br />
        <span class="text-sm font-light">CAPTURE</span>
      </button>
      <p class="text-gray-500 mt-2 text-sm">
        Hold the capture button for 2 seconds to start the medical review.
      </p>
    </div>
  </div>
  <div class="text-center rounded-lg p-4 my-8">
    <div class="flex justify-center gap-4">
      <img src="https://ucarecdn.com/88da9003-4769-48aa-be4b-028b5ac656a7/-/preview/236x198/" alt="Health Image 1" class="w-24 h-24  shadow-lg"/>
      <img src="https://ucarecdn.com/07698bea-0147-4ade-b4a4-b9175cd4ec84/-/preview/231x208/" alt="Health Image 2" class="w-24 h-24  shadow-lg"/>
      <img src="https://ucarecdn.com/ceeea8f4-d9b4-4294-81de-cbe3fc8762b8/-/preview/234x203/" alt="Health Image 3" class="w-24 h-24 rounded-full shadow-lg"/>
    </div>
    <h2 class="mt-4 text-xl font-semibold text-green-700">Health. Tradition. Belief.</h2>
  </div>
    </div>
  )
}

export default Diagnosis
