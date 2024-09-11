import React, { useState, useRef } from 'react'

const Login = () => {

  const [form, setForm] = useState({})


  const nameRef = useRef();
  const pasRef = useRef();



  function handleSubmit(evt) {
    evt.preventDefault()

    let userData = {
      name: nameRef.current.value,
      parol: pasRef.current.value,
    }
    console.log(nameRef.current.classList.add("bg-red-500 "));
  }

  return (
    <>

      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome Back!</h1>
          <form action="#" onSubmit={handleSubmit}   >
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input ref={nameRef} type="text" name='name' id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input ref={pasRef} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
              <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                Password?</a>
            </div>

            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login
