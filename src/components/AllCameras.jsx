// show all camera whucha re 

// import React,{useRef} from "react";
// import Webcam from 'react-webcam'

import React, { useCallback, useState,useEffect } from 'react'
import Webcam from 'react-webcam'
const AllCameras = () => {

const [devices,setDevices]=useState([])
const handleDevices=useCallback((mediaDevices)=>[
  setDevices(mediaDevices.filter(({kind})=>kind === "videoinput")),
  [setDevices]
])

    useEffect(()=>{
       navigator.mediaDevices .enumerateDevices().then(handleDevices)
    },[handleDevices])
  return (
    <div>
      {devices.map((device,key)=>(
        <div key={key}>
       <Webcam 
       audio={false}
       videoConstraints={{deviceId:device.deviceId}}
       
       />
       {device.label||`Device ${key +1}`}

        </div>
      ))}
    </div>
  )
}

export default AllCameras
