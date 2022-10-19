import React, { useRef } from 'react'

const Upload = ({setFile}) => {
  const wrapperRef = useRef(null); 
  const inputFile = useRef(null); 

  const onFileChange = (e) => {
    const newFile = e.target.files[0]; 
    if(newFile) { 
      if (newFile.type === "image/jpeg" || 
      newFile.type === "image/jpg" || 
      newFile.type ===  "image/png") {
        setFile(newFile)
      } 
    } 
  }
  
  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');
  const onClickInput = (e) => {
    e.preventDefault(); 
  }  
  return (
    <section className='card'>
      <h2 className='title'>Upload your image</h2>
      <h3 className='subtitle'>File should be .jpeg or .png</h3>
      <div className="dropzone" ref={wrapperRef} 
      onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
          <input type="file" onChange={onFileChange} onClick={onClickInput} 
          accept=" image/jpeg, image/png"/>
          <img src="/image.svg" alt="image" />
          <p>Drag & Drop your image here</p>
      </div>      
      <span className='spacing'>Or</span>
      <div>
        <input type="file" className='input-file' ref={inputFile} onChange={onFileChange} 
        accept="image/jpeg, image/png" />
        <button className='btn' onClick={() => inputFile.current.click() }>Choose a file</button>
      </div>
    </section>
  )
}

export default Upload 

