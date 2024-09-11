import React from 'react'
import { Link, useNavigate } from "react-router-dom"
export const Info = () => {
  const info = JSON.parse(localStorage.getItem('info')) || {}

  const navigate = useNavigate()

  return (
    <>

      <button onClick={() => navigate(-1)} className="bg-teal-800  text-white px-4 py-2 rounded-xl mt-3 inline-block    "  >
        Ortga
      </button>

      <div className=" border-2 border-black     mt-3 max-w-[800px] mx-auto p-3 rounded-xl   "     >
        <h2 className=' font-mono text-2xl    '> Name : {info?.name}  </h2>
        <h2 className=' font-mono text-2xl    '> Company : {info?.company?.name}  </h2>
        <h2 className=' font-mono text-2xl    '> Adress : {info?.address?.city}  </h2>
        <h2 className=' font-mono text-2xl    '> Phone : {info?.phone}  </h2>
        <a className=' font-mono text-2xl   block  '> website : {info?.website}  </a>




      </div>



    </>
  )
}
