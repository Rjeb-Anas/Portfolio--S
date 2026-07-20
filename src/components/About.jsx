import {
    alternate_email,
    call,
    download,
    language,
} from "../assets/index";

const About = () => {
    return (
        <>
            <main id="About"
                className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15 py-16 min-h-dvh">
                <section className="flex flex-col gap-8 py-2 relative">
                    <div className="space-y-3">
                        <span className="text-[clamp(0.75rem,2vw,1rem)] font-semibold uppercase tracking-widest text-blue-500">
                            À propos
                        </span>

                        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 dark:text-white">
                            Qui suis-je ?
                        </h1>

                        <p className="max-w-xl text-slate-600 dark:text-slate-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                            Je suis étudiant en Génie Informatique, passionné par le développement web, la cybersécurité et les nouvelles technologies. J'aime concevoir des applications modernes,
                            résoudre des problèmes et apprendre continuellement afin d'améliorer mes compétences.
                        </p>
                    </div>
                    <hr className="border-slate-800" />
                   <div className="w-full p-1 flex flex-col">
                         <span className="text-[clamp(0.75rem,2vw,1rem)] font-semibold uppercase tracking-widest text-blue-500">
                            Compétences
                        </span>
                       
                           <div className="w-full md:p-5 p-2 flex flex-wrap items-center justify-center ">

                              <div className="border p-2 rounded-xl flex flex-col  gap-1 items-center justify-center">
                                    <h2 className="py-2 px-3 flex items-center justify-center bg-blue-500 rounded-xl">
                                        <img src={language} alt="" className="inline mr-2" />
                                        Front-end
                                    </h2>
                                    <ul className="w-full text-center">
                                        <li className="md:py-2 py-1 text-[clamp(0.9rem,1.5vw,1rem)]">HTML</li>
                                        <li className="md:py-2">CSS</li>
                                        <li className="md:py-2">JavaScript</li>
                                        <li className="md:py-2">React</li>
                                    </ul>
                              </div>
                                        


                           </div>
                        
                        
                   </div>
                   
                </section>
            </main>
        </>
    )
}

export default About