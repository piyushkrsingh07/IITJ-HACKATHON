import React, { useCallback,useState,useRef } from 'react'
import Webcam from 'react-webcam'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const videoConstraints={
    width:540,
    facingMode:'environment'
}

const MAX_FILE_SIZE = 8000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema=z.object({
    image:
    z
    .any()
    .refine((files) => files?.length >= 1, { message: 'Image is required.' })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: '.jpg, .jpeg, .png and .webp files are accepted.',
    })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 8MB.`,
    }),

})

const Camera2 = () => {
    
    const webcamRef=useRef(null)
    const [url,setUrl]=useState(null)
    const [imageURL, setImageURL] = useState('');
    const[toggle,setToggle]=useState(true)
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        setValue,
        watch,
      } = useForm({
        defaultValues:{
       image:''
        },
        resolver:zodResolver(formSchema),
      });

    const capturePhoto=useCallback(async()=>{
        const imageSrc=webcamRef.current.getScreenshot()
        setUrl(imageSrc)
        console.log("dekho url",url)
    },[webcamRef])

    const onUserMedia=(e) =>{
        console.log(e)
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setImageURL(fileURL);
    }
    const onSubmit = async (data) => {
        const formData = new FormData();
        try{
            const response = await fetch('', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
                body:formData,
        })
        if (!response.ok) {
            const errorData = await response.json();
            console.error('data not sent successfully', errorData.message || 'Unknown error');
          } else {
            const result = await response.json();
            console.log('Image created successfully:', result);
            alert('Image added successfully!');
            window.location.reload();
          }
    }catch(error){
            console.error('Error during member post', error);
        }
    
}
  return (
   <div>
    {!toggle && (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <label htmlFor="" className="cursor-pointer flex items-center space-x-2">
                  <span className="text-2xl">+</span>
                  <span>Choose Image</span>
                </label>
                <input
                  // id="image"
                  type="file"
                  {...register('image')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                /> 
                 <div>
              {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
              </div>
              <div>
              {imageURL && (
                <img src={imageURL} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
              )}
              </div>
              <button> {isSubmitting ? 'Uploading...' :'Upload Image'}</button>
    </form>
    )}
    {toggle && (
    <div>
    <button onClick={()=>setToggle(false)} className='text-black'>Or have a file?Upload it here...</button>
      <Webcam
      ref={webcamRef}
      audio={false}
      screenshotFormat='image/png'
      videoConstraints={videoConstraints}
      onUserMedia={onUserMedia}
      mirrored={true}
      screenshotQuality={1}
      />
      <div className='flex gap-x-5'>
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={()=>setUrl(null)}>Refresh</button>
      </div>

      {
        url && (
            <div>
               <img src={url} alt="Screenshot" /> 
            </div>
        )
      }
    </div>
    )}
    </div>
    
  )
}

export default Camera2
