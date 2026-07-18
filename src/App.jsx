import { useState } from 'react'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from './components/About'
import Cursus from './components/Cursus'


function App() {
  return (
    <>
      <main className='min-h-dvh w-full overflow-x-hidden text-black dark:text-white
       min-w-75  bg-linear-to-b
      from-slate-100 to-slate-200
       dark:from-slate-900 dark:to-slate-950     transition-colors duration-300
     animate-load-fast '>
        <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col md:border-l-cyan-950 
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
