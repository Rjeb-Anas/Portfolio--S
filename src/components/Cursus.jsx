import {
    school,
    jamboard,
    
} from "../assets";
const Cursus = () => {
  
  return (
    <main
      id="Cursus"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15 py-16 min-h-dvh"
    >
      <section className="flex flex-col gap-8 py-2 relative">

        <div className="space-y-3">
          <span className="text-[clamp(0.75rem,2vw,1rem)] font-semibold uppercase tracking-widest text-blue-500">
            Cursus
          </span>

          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 dark:text-white">
            Mon Parcours Académique
          </h1>

          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-[clamp(0.9rem,1.5vw,1rem)]">
            Un parcours de formation qui a développé mes compétences et renforcé ma passion pour l'informatique et les nouvelles technologies.
          </p>
        </div>
        <hr className="border-slate-800" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-auto flex flex-col gap-5  ">
            <article data-animation="animate-visible-bottom" className=" opacity-0 w-full  p-3  flex flex-row max-md:flex-col justify-between rounded-2xl border gap-3
             border-blue-400 hover:border-blue-500">
                  <div className="w-20 max-md:w-15 max-md:h-15 h-20 p-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <img src={school} alt="Home" className="size-full" />
                  </div>
                  <div className="w-[80%] max-md:w-full flex flex-col">
                    <b>Baccalauréat SPC</b>
                    <span className="text-gray-400">Lycée Mazarin</span>
                    <hr className="my-2 bg-gray-400" />
                    <span className="text-gray-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                      Obtention du Baccalauréat en Sciences Physiques, offrant une base solide en mathématiques, physique et sciences fondamentales, 
                      préparant à des études supérieures en ingénierie et en informatique.
                    </span>
                  </div>
                  <div className="flex items-start justify-center ">
                        <span className="bg-blue-500/50 py-1 px-2 flex items-center justify-center
                         rounded-full text-sm">2023 - 2024</span>
                  </div>
            </article>
            <article data-animation="animate-visible-bottom" className=" opacity-0 w-full  p-3  flex flex-row max-md:flex-col justify-between rounded-2xl border gap-3
             border-blue-400 hover:border-blue-500">
                  <div className="w-20 max-md:w-15 max-md:h-15 h-20 p-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <img src={jamboard} alt="Home" className="size-full" />
                  </div>
                  <div className="w-[80%] max-md:w-full flex flex-col">
                    <b>DEUST</b>
                    <span className="text-gray-400">Faculté des Sciences et Techniques de Fès</span>
                    <hr className="my-2 bg-gray-400" />
                    <span className="text-gray-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                      Formation en Génie Informatique à la FST de Fès (USMBA), avec l'acquisition de solides compétences en développement logiciel, bases de données, 
                      algorithmique, réseaux, systèmes d'exploitation et réalisation de projets pratiques.
                    </span>
                  </div>
                  <div className="flex items-start justify-center ">
                        <span className="bg-blue-500/50 py-1 px-2 flex items-center justify-center
                         rounded-full text-sm">2024 - 2026</span>
                  </div>
            </article>
            <article data-animation="animate-visible-bottom" className="opacity-0 w-full  p-3  flex flex-row max-md:flex-col justify-between rounded-2xl border gap-3
             border-blue-400 hover:border-blue-500">
                  <div className="w-20 max-md:w-15 max-md:h-15 h-20 p-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <img src={jamboard} alt="Home" className="size-full" />
                  </div>
                  <div className="w-[80%] max-md:w-full flex flex-col">
                    <b>LICENCE</b>
                    <span className="text-gray-400">Faculté des Sciences et Techniques de Fès</span>
                    <hr className="my-2 bg-gray-400" />
                    <span className="text-gray-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                      
                    </span>
                  </div>
                  <div className="flex items-start justify-center ">
                        <span className="bg-blue-500/50 py-1 
                        px-1 flex items-center justify-center
                         rounded-full text-sm">2026 - en cours</span>
                  </div>
            </article>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Cursus;