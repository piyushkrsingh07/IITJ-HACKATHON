import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <body class="bg-gray-100 font-sans">

<div class="max-w-4xl mx-auto p-4">

  
 

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
