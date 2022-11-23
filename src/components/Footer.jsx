import React, { useState, useRef, useEffect } from 'react'
import iconError from '../assets/images/icon-error.svg'
import logo from '../assets/images/logo-bookmark-whiteText.svg'
import autoAnimate from '@formkit/auto-animate'

const Footer = () => {
  const [error, setError] = useState(false)
  const parent = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(true)
    let email = e.target[0].value
    const regex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$/
    const isValidEmail = regex.test(email)

    if (isValidEmail) {
      setError(false)
      e.target.reset()
    }
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <footer className='w-full text-center text-white'>
      <div className='bg-softBlue w-full p-8 text-center'>
        <div className='w-full sm:w-96 md:w-[29rem] mx-auto'>
          <p className="uppercase text-sm tracking-widest mt-7 mb-2">35, 000 + already joined</p>
          <p className="font-medium text-xl mb-8 sm:text-3xl md:text-4xl">Stay up-to-date with what we’re doing</p>
        </div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 sm:max-w-lg sm:mx-auto sm:flex-row sm:w-full'>
          <div ref={parent} className={`relative w-full ${error && 'bg-softRed'}  p-[0.12rem] rounded-md transition-colors`}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              className='border-softRed w-full text-veryDarkBlue indent-3 p-3 rounded-md outline-none'
            />

            {
              error && (
                <>
                  <img src={iconError} alt="error icon" className='absolute z-10 w-max top-0 bottom-8 right-4 my-auto' />
                  <p className="text-white italic text-xs text-left m-2">
                    Whoops, make sure it's an email
                  </p>
                </>
              )
            }
          </div>
          <button className=' bg-softRed rounded-md capitalize p-3 sm:h-max sm:px-4 sm:w-[35%] sm:border-2 sm:border-softRed sm:hover:bg-white sm:hover:text-softRed sm:font-medium transition-all'>contact us</button>
        </form>
      </div>

      <div className="bg-veryDarkBlue w-full">
        <div className='p-9 flex flex-col gap-10 items-center sm:flex-row sm:justify-between sm:max-w-4xl sm:mx-auto'>
          <div className="flex flex-col gap-10 items-center sm:flex-row sm:gap-20">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <div className='text-white flex flex-col sm:flex-row gap-5 uppercase tracking-widest transition-colors'>
              <a href="#" className='hover:text-softRed transition-colors'>features</a>
              <a href="#" className='hover:text-softRed transition-colors'>pricing</a>
              <a href="#" className='hover:text-softRed transition-colors'>contact</a>
            </div>
          </div>
          <div className='flex gap-12 items-center'>
            <a href="#" className='group'>
              <svg className='fill-white group-hover:fill-softRed transition-colors' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fillRule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className='group'>
              <svg className='fill-white group-hover:fill-softRed transition-colors' xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path fillRule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer