import { useState } from 'react'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import Cursus from './components/Cursus'

function App() {
  return (
    <>
      <main className='min-h-dvh w-full overflow-x-hidden text-black dark:text-white
      from-gray-50 to-gray-100
      dark:from-gray-800 dark:to-gray-900
      bg-linear-to-br  animate-load-fast '>
       <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col md:border-l-cyan-950 
       md:border-r-cyan-950 
        md:border-l-4 md:border-r-4">
          <Header></Header>
          <Home></Home>
          <Cursus></Cursus>
      </div>
      </main>
    </>
  )
}

export default App
