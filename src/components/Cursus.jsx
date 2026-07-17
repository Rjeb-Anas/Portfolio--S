import { GraduationCap } from "lucide-react";
import { Laptop } from "lucide-react";
const Cursus = () => {
  return (
    <main
      id="Cursus"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15 py-16"
    >
      <section className="flex flex-col gap-8">

        <div className="space-y-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Cursus
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            My Academic Journey
          </h1>

          <p className="max-w-xl text-slate-600 dark:text-slate-400">
            My education path that shaped my skills and passion for computer
            science and technology.
          </p>
        </div>

        <hr className="border-slate-200 dark:border-slate-800" />


        <article
          className="
          flex flex-col md:flex-row
          gap-5
          rounded-2xl
          border border-slate-200 dark:border-slate-800
          bg-white dark:bg-[#08111D]
          p-5
          shadow-lg shadow-slate-200/30
          dark:shadow-black/30
          transition-all duration-300
          hover:border-blue-500/30
        "
        >

          <div
            className="
            h-16 w-16 md:h-20 md:w-20
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-blue-700
            flex items-center justify-center
            shrink-0
          "
          >
            <GraduationCap className="text-white" size={34} />
          </div>
          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Baccalauréat SPC
                </h2>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  Lycée Mazarin – Science Physique
                </p>
              </div>

              <span
                className="
                self-start
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

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7">
              Obtention du baccalauréat en Sciences Physiques et Chimiques avec
              mention bien. Cette formation m'a permis de développer une solide
              base scientifique et analytique.
            </p>

          </div>
        </article>
      <article
          className="
          flex flex-col md:flex-row
          gap-5
          rounded-2xl
          border border-slate-200 dark:border-slate-800
          bg-white dark:bg-[#08111D]
          p-5
          shadow-lg shadow-slate-200/30
          dark:shadow-black/30
          transition-all duration-300
          hover:border-blue-500/30
        "
        >

          <div
            className="
            h-16 w-16 md:h-20 md:w-20
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-blue-700
            flex items-center justify-center
            shrink-0
          "
          >
            <Laptop size={32} className="text-white" />
          </div>
          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  DEUST - IT
                </h2>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  Faculty of Sciences and Techniques of Fez (USMBA)
                </p>
              </div>

              <span
                className="
                self-start
                rounded-xl
                bg-blue-100 dark:bg-blue-900/30
                px-4 py-2
                text-sm font-semibold
                text-blue-600 dark:text-blue-400
              "
              >
                2024 – 2026U
              </span>

            </div>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7">
             Completed the DEUST program in Computer Engineering, building a strong foundation in programming,
              algorithms, databases, computer networks, operating systems, and software development.
              Worked on practical projects that strengthened analytical thinking and problem-solving skills.
            </p>

          </div>
        </article>

      </section>
    </main>
  );
};

export default Cursus;