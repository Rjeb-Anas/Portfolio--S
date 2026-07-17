import React from 'react'

const Cursus = () => {
  return (
    <>
      <main id="Cursus" className="mx-auto min-h-dvh  w-full 
    max-w-7xl px-4 sm:px-6 lg:px-15">
        <section className="flex flex-col justify center gap-6 py-12 
            ">
          <b className='text-lg text-blue-500'>Cursus</b>
          <h1 className='text-4xl max-md:text-xl'>My Academic Journey</h1>
          <p className='w-[30%] max-md:w-[70%]'>My education path that shaped my skills
            and passion for computer science and thechnology.
          </p>
          <hr className='max-md:hidden' />
         <div
      className="
        flex flex-col gap-5
        sm:flex-row sm:items-start
        rounded-2xl
        border border-slate-200 dark:border-slate-800
        bg-white dark:bg-[#060B16]
        p-4 sm:p-5
        shadow-lg shadow-slate-200/40
        dark:shadow-black/30
        transition-all duration-300
        hover:border-blue-500/30
        hover:shadow-blue-500/10
      "
    >
      <div className="flex items-center justify-between sm:block">
        <div
          className="
            flex h-16 w-16 sm:h-20 sm:w-20
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-blue-700
          "
        >
         
        </div>

        <span
          className="
            sm:hidden
            rounded-xl
            bg-blue-100 dark:bg-blue-900/30
            px-3 py-1
            text-xs font-semibold
            text-blue-600 dark:text-blue-400
          "
        >
          2023 - 2024
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Baccalauréat SPC
            </h3>

            <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Lycée Mazarin – Science Physique
            </p>
          </div>

          <span
            className="
              hidden sm:block
              rounded-xl
              bg-blue-100 dark:bg-blue-900/30
              px-4 py-2
              text-sm font-semibold
              text-blue-600 dark:text-blue-400
            "
          >
            2023 – 2024
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
          Obtention du baccalauréat en Sciences Physiques et Chimiques avec
          mention bien. Cette formation m'a permis de développer une solide base
          scientifique et analytique.
        </p>
      </div>
    </div>

    <div
      className="
        flex flex-col gap-5
        sm:flex-row sm:items-start
        rounded-2xl
        border border-slate-200 dark:border-slate-800
        bg-white dark:bg-[#060B16]
        p-4 sm:p-5
        shadow-lg shadow-slate-200/40
        dark:shadow-black/30
        transition-all duration-300
        hover:border-blue-500/30
        hover:shadow-blue-500/10
      "
    >
      <div className="flex items-center justify-between sm:block">
        <div
          className="
            flex h-16 w-16 sm:h-20 sm:w-20
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-blue-700
          "
        >
         
        </div>

        <span
          className="
            sm:hidden
            rounded-xl
            bg-blue-100 dark:bg-blue-900/30
            px-3 py-1
            text-xs font-semibold
            text-blue-600 dark:text-blue-400
          "
        >
          2023 - 2024
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Baccalauréat SPC
            </h3>

            <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Lycée Mazarin – Science Physique
            </p>
          </div>

          <span
            className="
              hidden sm:block
              rounded-xl
              bg-blue-100 dark:bg-blue-900/30
              px-4 py-2
              text-sm font-semibold
              text-blue-600 dark:text-blue-400
            "
          >
            2023 – 2024
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
          Obtention du baccalauréat en Sciences Physiques et Chimiques avec
          mention bien. Cette formation m'a permis de développer une solide base
          scientifique et analytique.
        </p>
      </div>
    </div>
    

        </section>
      </main>
    </>
  )
}

export default Cursus;