import React, { useEffect, useState } from 'react'

const Extension = ({ img, name, title, version, dots, index }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const position = index * 50

  useEffect(() => {
    if (innerWidth >= 768) {
      setIsMediumScreen(true)
    } else {
      setIsMediumScreen(false)
    }

  }, [innerWidth])

  useEffect(() => {
    window.addEventListener('load', () => {
      setInnerWidth(window.innerWidth)
    })

    return () => window.removeEventListener('load', () => {
      setInnerWidth(window.innerWidth)
    })

  }, [])

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setInnerWidth(e.target.innerWidth)
    })

    return () => window.addEventListener('resize', (e) => {
      setInnerWidth(e.target.innerWidth)
    })

  }, [innerWidth])

  return (
    <div style={{ transform: isMediumScreen && `translateY(${position}px)` }} className={`w-full bg-white shadow-s rounded-xl py-6 flex flex-col items-center gap-5`}>
      <img src={img} alt={name} className='mt-6' />
      <div className='space-y-1 mb-2'>
        <p className='text-veryDarkBlue text-xl font-bold'>{title}</p>
        <p className='text-grayishBlue text-sm'>{version}</p>
      </div>
      <img className='w-full' src={dots} alt="dots" />
      <div className="w-full px-6">
        <button className="bg-softBlue text-sm lg:text-base text-white border rounded-md w-full p-3 capitalize hover:text-softBlue hover:border-softBlue hover:bg-transparent transition-all">add & install extension</button>
      </div>
    </div>
  )
}

export default Extension