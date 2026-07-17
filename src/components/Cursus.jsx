import {
    school,
} from "../assets";
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
            <div className="w-full h-auto flex flex-col gap-5  ">
            <article className="w-full  p-3  flex flex-row max-md:flex-col justify-between rounded-2xl border gap-3
             border-blue-400 hover:border-blue-500">
                  <div className="w-20 max-md:w-15 max-md:h-15 h-20 p-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <img src={school} alt="Home" className="size-full" />
                  </div>
                  <div className="w-[80%] max-md:w-full flex flex-col">
                    <b>Baccalauréat SPC</b>
                    <span className="text-gray-400">Lycée Mazarin</span>
                    <span>

                    </span>
                  </div>
                  <div className="flex items-start justify-center ">
                        <span className="bg-blue-500/50 py-1 px-4 rounded-full text-[clamp(0.9rem,1vw,1rem)]">2023-2024</span>
                  </div>
            </article>
            <article className="w-full  p-3  flex flex-row max-md:flex-col justify-between rounded-2xl border gap-3
             border-blue-400 hover:border-blue-500">
                  <div className="w-20 max-md:w-15 max-md:h-15 h-20 p-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <img src={school} alt="Home" className="size-full" />
                  </div>
                  <div className="w-[80%] max-md:w-full flex flex-col">
                    <b>DEUST</b>
                    <span className="text-gray-400">Faculty of Sciences and Techniques of Fez (USMBA)</span>
                    <hr className="my-2 bg-gray-400" />
                    <span className="text-gray-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                      Completed the DEUST in Computer Engineering at FST Fez (USMBA), gaining solid knowledge in software 
                      development, databases, algorithms, networking, and operating systems through academic coursework and practical projects.
                    </span>
                  </div>
                  <div className="flex items-start justify-center ">
                        <span className="bg-blue-500/50 py-1 px-4 rounded-full text-[clamp(0.9rem,1vw,1rem)]">2024-2026</span>
                  </div>
            </article>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Cursus;