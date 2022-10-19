import React from 'react'

const Uploading = ({error}) => {
  return (
    <section className='card uploading-container'>
      <h2 className={`title ${error && "error"}`} >
        {error ? error : "Uploading..."}
      </h2>
      <div className="loader">
        <span className={`loader-bar ${error && "error"}`}></span>
      </div>
    </section>
  )
}

export default Uploading