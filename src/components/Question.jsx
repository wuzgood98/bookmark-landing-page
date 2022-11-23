import React, { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Question = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  const parent = useRef(null)

  const toggleAnswerState = () => setIsAnswerVisible(prevState => !prevState)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div ref={parent} className='w-full border-b border-grayishBlue/40'>
      <button onClick={toggleAnswerState} className="group text-veryDarkBlue font-medium text-sm w-full flex items-center justify-between py-4 sm:text-lg">
        <span className='group-hover:text-softRed transition-colors text-left'>{question}</span>
        <svg className={` ${isAnswerVisible ? 'stroke-softRed -rotate-180' : 'stroke-softBlue rotate-0'} transition-all duration-200`} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" /></svg>

      </button>

      {
        isAnswerVisible &&
        (
          <p className='text-grayishBlue text-left mb-5 sm:text-lg'>
            {answer}
          </p>
        )
      }
    </div>
  )
}

export default Question