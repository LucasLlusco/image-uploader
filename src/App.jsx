import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import './App.css'
import UploadCard from "./components/UploadCard"
import UploadingCard from './components/UploadingCard'
import UploadedCard from "./components/UploadedCard"
import { storage } from './firebase';
import { v4 } from 'uuid'; 


function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); 
  const [error, setError] = useState("");

  const uploadImage = () => {
    setIsUploading(true) 
    const imageRef = ref(storage, `images/${file.name + v4()}`);

    uploadBytes(imageRef, file).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setIsUploading(false);
        setIsUploaded(true); 
        setImageUrl(url); 
      })
      .catch((error)=> {
        console.log(error.message, "Error getting the image url")
        setError("Error getting the image url")
      })
    })
    .catch((error)=> {
      console.log(error.message, "Error uploading the image")
      setError("Error uploading the image")
    })
  }
  useEffect(() => {
    if(file !== null) {
      uploadImage()      
    }
  }, [file])
  
  return (
    <div className="container">
      {!isUploading && !isUploaded && <UploadCard file={file} setFile={setFile}/>}
      {isUploading && !isUploaded && <UploadingCard error={error}/>}
      {isUploaded && <UploadedCard imageUrl={imageUrl} />}
    </div>
  )
}

export default App