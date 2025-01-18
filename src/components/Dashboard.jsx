import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <body class="bg-gray-100 font-sans">

<div class="max-w-4xl mx-auto p-4">

  
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

  <div class="my-12">
    <h2 class="text-center text-2xl font-semibold text-gray-800">ANALYSIS DASHBOARD</h2>
    <p class="text-center text-gray-600 mt-2">
      Powerful tools for comprehensive Ayurvedic analysis to give you a precise medical review.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
    
      <div class="bg-gray-800 text-white rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold mb-4">Analysis Dashboard</h3>
        <div class="flex justify-between text-gray-300">
          <div>
            <p class="font-light">Patient Analysis</p>
            <p class="text-xl font-bold">123</p>
          </div>
          <div>
            <p class="font-light">Active Cases</p>
            <p class="text-xl font-bold">123</p>
          </div>
        </div>
        <div class="mt-6">
          <p class="text-gray-400 mb-2">Quick action Tools</p>
          <div class="flex gap-4">
            <button class="bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
              Facial Scan
            </button>
            <button class="bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
              Nail Analysis
            </button>
          </div>
        </div>
        <div class="mt-6">
          <p class="text-gray-400">Recent Activities</p>
          <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
            <li>New report downloaded</li>
            <li>Report failed to load</li>
            <li>New scan completed</li>
            <li>Scan initiated</li>
          </ul>
        </div>
      </div>

      
      <div class="space-y-6">
      
        <div class="bg-gray-800 text-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-semibold mb-4">Comprehensive Analysis Tools</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>Advanced facial feature detection</li>
            <li>Nail characteristic analysis</li>
            <li>Time-series data visualization</li>
            <li>Automated report generation</li>
          </ul>
        </div>

        
        <div class="bg-gray-800 text-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-semibold mb-4">Secure & Compliant</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>HIPAA compliant storage</li>
            <li>Encrypted data transmission</li>
            <li>Role-based access control</li>
            <li>Audit trail logging</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
    </div>
  )
}

export default Dashboard
