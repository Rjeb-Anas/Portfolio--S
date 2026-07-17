const Cursus = () => {

  return (
    <main
      id="Cursus"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15 py-16 min-h-dvh"
    >
      <section className="flex flex-col gap-8 py-2">

        <div className="space-y-3">
          <span className="text-[clamp(0.75rem,2vw,1rem)] font-semibold uppercase tracking-widest text-blue-500">
            Cursus
          </span>

          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 dark:text-white">
            My Academic Journey
          </h1>

          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-[clamp(0.9rem,1.5vw,1rem)]">
            My education path that shaped my skills and passion for computer
            science and technology.
          </p>
        </div>
        <hr className="border-slate-800" />
        <div className="mx-auto shrink-0 h-[55vh]   w-full min-h-100
    max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="w-[70%] h-full flex flex-row max-md:flex-col">

            </div>
        </div>
      </section>
    </main>
  );
};

export default Cursus;