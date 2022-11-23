import { useState } from 'react'
import dam from './assets/images/illustration-hero.svg'
import logo from './assets/images/logo-bookmark.svg'
import whiteLogo from './assets/images/logo-bookmark-white.svg'
import hamburger from './assets/images/icon-hamburger.svg'
import close from './assets/images/icon-close.svg'
import iconFacebook from './assets/images/icon-facebook.svg'
import iconTwitter from './assets/images/icon-twitter.svg'
import dots from './assets/images/bg-dots.svg'

import { data, extensions, frequentlyAskedQuestions } from './data'
import Question from './components/Question'
import Footer from './components/Footer'
import Extension from './components/Extension'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [features, setFeatures] = useState(data)
  const [extensionData, setExtensionData] = useState(extensions)
  const [questions, setQuestions] = useState(frequentlyAskedQuestions)
  const [value, setValue] = useState(0)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const { img, info, title } = features[value]

  return (
    <div className="min-h-screen w-full font-rubik bg-white">
      <header className='flex w-full p-7 justify-between items-center sm:max-w-6xl 2xl:max-w-[90rem] sm:mx-auto'>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <button onClick={openMenu} className='active:scale-95 transition-transform md:hidden'>
          <img src={hamburger} alt="hamburger" />
        </button>

        <nav className='hidden lg:mr-16 md:block'>
          <ul className='text-veryDarkBlue flex gap-8 xl:gap-10 items-center uppercase text-sm w-full text-center'>
            <li className='group py-5'>
              <a href="#" className='tracking-widest sm:group-hover:text-softRed transition-colors'>Features</a>
            </li>
            <li className='group py-5'>
              <a href="#" className='tracking-widest sm:group-hover:text-softRed transition-colors'>Pricing</a>
            </li>
            <li className='group py-5'>
              <a href="#" className='tracking-widest sm:group-hover:text-softRed transition-colors'>Contact</a>
            </li>
            <li className='group px-8 py-2 border border-transparent bg-softRed rounded-md sm:hover:bg-transparent sm:hover:border-softRed  transition-all'>
              <a href="#" className='w-full py-2 tracking-widest text-white sm:group-hover:text-softRed transition-colors'>Login</a>
            </li>
          </ul>
        </nav>

        <nav className={`fixed top-0 left-0 ${menuOpen ? 'scale-y-100 visible ' : 'scale-y-0 invisible'} h-full z-30 w-full bg-veryDarkBlue/95  p-7 transition-all origin-top duration-200 sm:hidden`}>
          <div className="flex justify-between w-full mb-12">
            <a href="#">
              <img src={whiteLogo} alt="logo" />
            </a>
            <button onClick={closeMenu} className='active:scale-95 transition-transform'>
              <img src={close} alt="hamburger" />
            </button>
          </div>

          <ul className='text-white uppercase text-xl w-full text-center'>
            <li className={`border-t border-white/20 py-5 ${menuOpen ? 'translate-y-0' : '-translate-y-6'} transition-transform delay-75`}>
              <a href="#" className='tracking-widest font-light'>Features</a>
            </li>
            <li className={`border-t border-white/20 py-5 ${menuOpen ? 'translate-y-0' : '-translate-y-8'} transition-transform delay-[90ms]`}>
              <a href="#" className='tracking-widest font-light'>Pricing</a>
            </li>
            <li className={`border-t border-white/20 py-5 ${menuOpen ? 'translate-y-0' : '-translate-y-9'} transition-transform delay-[105ms]`}>
              <a href="#" className='tracking-widest font-light'>Contact</a>
            </li>
            <li className={`border-t border-white/20 py-5 ${menuOpen ? 'translate-y-0' : '-translate-y-10'} flex transition-transform delay-[120ms]`}>
              <a href="#" className='w-full py-2 tracking-widest border-2 border-white rounded-md'>Login</a>
            </li>
          </ul>

          <div className="absolute w-max flex items-center gap-9 right-0 left-0 bottom-10 mx-auto">
            <a href="#">
              <img src={iconFacebook} alt="logo" />
            </a>
            <a href="#">
              <img src={iconTwitter} alt="logo" />
            </a>
          </div>
        </nav>
      </header>

      <div className='w-full relative'>
        <div className="lg:block hidden absolute bg-softBlue h-[19.5rem] xl:h-[21.2rem] w-[41%] bottom-0 right-0 rounded-tl-full rounded-bl-full"></div>
        <div className="w-full flex flex-col gap-8 md:mb-14 lg:flex-row-reverse md:items-center md:max-w-6xl 2xl:max-w-[90rem] md:mx-auto">

          <div className='p-2 w-full relative z-10 mt-12 sm:p-0'>
            <img src={dam} alt="illustration hero" />
            <div className="lg:hidden absolute bg-softBlue sm:h-[45vmin] h-[55vmin] w-[82%] md:w-[70%] bottom-0 right-0 rounded-tl-full rounded-bl-full -z-10 md:h-[20rem]"></div>
          </div>

          <div className="text-center space-y-6 p-8 lg:text-left lg:max-w-lg">
            <h1 className='capitalize text-veryDarkBlue text-3xl font-bold md:text-4xl'>a simple bookmark manager</h1>
            <p className='text-grayishBlue md:text-lg'>
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className='flex w-full gap-5 sm:max-w-[24rem] sm:mx-auto lg:mx-0'>
              <button className='basis-1/2 rounded-md drop-shadow-lg border border-transparent bg-softBlue text-white p-3 text-[3.8vmin] sm:text-base sm:hover:text-softBlue sm:hover:bg-transparent sm:hover:border-softBlue transition-all'>Get it on Chrome</button>
              <button className='basis-1/2 rounded-md drop-shadow-lg bg-gray-200 border border-transparent text-veryDarkBlue p-3 text-[3.8vmin] sm:text-base sm:hover:bg-transparent sm:hover:border-veryDarkBlue transition-all'>Get it on Firefox</button>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center p-7 md:max-w-xl md:mx-auto flex flex-col gap-4'>
        <p className='capitalize text-veryDarkBlue text-xl sm:text-2xl md:text-3xl font-bold'>Features</p>
        <p className='text-grayishBlue sm:text-lg'>
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <div className='p-7 flex flex-col md:flex-row md:justify-between md:mb-8 md:max-w-2xl md:mx-auto md:border-b border-grayishBlue/40 sm:py-3 sm:px-5'>
        {
          features.map((item, index) => (
            <div key={item.id} className='border-t text-center border-grayishBlue/40 font-medium last:border-b md:border-t-0 md:border-b-0 md:last:border-b-0'>
              <button onClick={() => setValue(index)} className={`${value === index ? 'text-veryDarkBlue after:w-4/5 md:after:w-full' : 'text-grayishBlue after:w-0'} capitalize relative py-5 lg:py-2  transition-all after:transition-all after:absolute after:origin-center after:bg-softRed after:h-1 after:bottom-0 after:right-0 after:left-0 after:mx-auto md:after:-bottom-3 sm:hover:text-softRed`}>{item.feature}</button>
            </div>
          ))
        }
      </div>

      <article className='w-full relative'>
        <div className="lg:block hidden absolute bg-softBlue h-[30vmin] xl:h-[36.5vmin] w-[42%] bottom-0 left-0 rounded-tr-full rounded-br-full"></div>
        <div className="w-full flex flex-col gap-4 lg:flex-row mb-12 items-center text-center md:max-w-6xl md:mx-auto md:items-center lg:text-left">
          <div className='p-7 w-full relative z-10 mt-3 sm:mb-16'>
            <img src={img} alt="illustration features" className='md:ml-16 lg:ml-0' />
            <div className="lg:hidden absolute bg-softBlue h-[55vmin] sm:h-[45vmin] md:h-[18.5rem] w-[82%] sm:w-[72%] md:w-[58%] bottom-0 left-0 rounded-tr-full rounded-br-full -z-10"></div>
          </div>

          <div className='p-7 h-max flex flex-col gap-4 md:max-w-lg'>
            <h1 className='text-veryDarkBlue text-2xl font-bold'>{title}</h1>
            <p className='text-grayishBlue sm:text-lg'>{info}</p>
            <a href="#" className='hidden bg-softBlue rounded-md px-4 py-3 text-white w-max self-center sm:block lg:self-start'>More Info</a>
          </div>
        </div>
      </article>


      <div className='w-full flex flex-col gap-12 mb-16 text-center p-7 xl:p-0 sm:max-w-[60%] md:max-w-4xl 2xl:max-w-[90rem] sm:mx-auto'>
        <div className='sm:max-w-xl sm:mx-auto'>
          <p className='text-veryDarkBlue text-2xl font-bold mb-4'>Download the extension</p>
          <p className='text-grayishBlue sm:text-lg'>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve
            got a favourite you’d like us to prioritize.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:mb-48">

          {
            extensionData.map((extension, index) => (
              <Extension
                key={extension.id}
                {...extension}
                dots={dots}
                index={index}
              />
            ))
          }
        </div>
      </div>

      <div className='w-full flex flex-col gap-10 sm:max-w-xl mb-4 sm:mx-auto text-center p-7'>
        <div className="flex flex-col gap-4">
          <p className='text-veryDarkBlue text-2xl font-bold sm:text-3xl'>Frequently Asked Questions</p>
          <p className='text-grayishBlue text-sm sm:text-lg'>
            Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.
          </p>
        </div>

        {
          questions.map((question) => (
            <Question
              key={question.id}
              {...question}
            />
          ))
        }
      </div>

      <div className='w-full grid place-content-center mb-24'>
        <a href='#' className="bg-softBlue text-white text-sm rounded-md drop-shadow-md py-3 px-5">More Info</a>
      </div>

      <Footer />
    </div>
  )
}

export default App

