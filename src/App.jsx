import { useState } from 'react'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from './components/About'
import Cursus from './components/Cursus'


function App() {
  return (
    <>
      <main className='min-h-dvh w-full overflow-x-hidden text-black dark:text-white min-w-75
      bg-linear-to-b from-[#F8FAFC] via-[#F3F6FB] to-[#EDF2F7]     transition-colors duration-300
    dark:from-[#000309] dark:via-[#00050D] dark:to-[#000712]  animate-load-fast '>
        <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col md:border-l-cyan-950 relative
       md:border-r-cyan-950 
        md:border-l-4 md:border-r-4">
          <Header></Header>
          <Home></Home>
          <About></About>
          <Cursus></Cursus>
        </div>
      </main>
    </>
  )
}

export default App
