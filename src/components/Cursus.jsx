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
            <article
              data-animation="animate-visible-bottom"
              className="opacity-0 w-full flex flex-col md:flex-row items-start gap-4 p-4 rounded-2xl border border-blue-400 hover:border-blue-500 transition-all"
            >
              <div className="size-16 md:size-20 shrink-0 p-3 bg-blue-500 rounded-xl flex items-center justify-center">
                <img
                  src={school}
                  alt="Baccalauréat SPC"
                  className="size-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">
                  Baccalauréat SPC
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Lycée Mazarin
                </p>
                <hr className="my-2 border-gray-400" />
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Obtention du Baccalauréat en Sciences Physiques, offrant une base
                  solide en mathématiques, physique et sciences fondamentales,
                  préparant à des études supérieures en ingénierie et en informatique.
                </p>
              </div>
              <span
                className="self-start md:self-center shrink-0 whitespace-nowrap rounded-full bg-blue-500/50 px-3 py-1 text-sm"
              >
                2023 - 2024
              </span>
            </article>
            <article
              data-animation="animate-visible-bottom"
              className="opacity-0 w-full flex flex-col md:flex-row items-start gap-4 p-4 rounded-2xl border border-blue-400 hover:border-blue-500 transition-all"
            >
              <div className="size-16 md:size-20 shrink-0 p-3 bg-blue-500 rounded-xl flex items-center justify-center">
                <img
                  src={jamboard}
                  alt="DEUST"
                  className="size-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">
                  DEUST
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Faculté des Sciences et Techniques de Fès
                </p>
                <hr className="my-2 border-gray-400" />
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Formation en Génie Informatique à la FST de Fès (USMBA), avec
                  l'acquisition de solides compétences en développement logiciel,
                  bases de données, algorithmique, réseaux, systèmes d'exploitation
                  et réalisation de projets pratiques.
                </p>
              </div>
              <span
                className="self-start md:self-center shrink-0 whitespace-nowrap rounded-full bg-blue-500/50 px-3 py-1 text-sm"
              >
                2024 - 2026
              </span>
            </article>
            <article
              data-animation="animate-visible-bottom"
              className="opacity-0 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border
               border-blue-400 hover:border-blue-500 p-4 transition-colors"
            >
              <div className="size-16 md:size-20 shrink-0 bg-blue-500 rounded-xl flex items-center justify-center p-3">
                <img
                  src={jamboard}
                  alt="Licence"
                  className="size-full object-contain"
                />
              </div>
              <div className="flex-1 w-full">
                <h3 className="font-bold text-lg">
                  LICENCE
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Faculté des Sciences et Techniques de Fès
                </p>
                <hr className="my-2 border-gray-700" />
                <p className="text-gray-400 text-sm md:text-base">
                  {/* Description */}
                </p>
              </div>
              <span
                className="self-start md:self-center whitespace-nowrap rounded-full bg-blue-500/50 px-3 py-1 text-xs sm:text-sm"
              >
                2026 - en cours
              </span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cursus;