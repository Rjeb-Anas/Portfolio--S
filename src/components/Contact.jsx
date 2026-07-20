import {
    alternate_email,
    call,
    download,
     location,
     github,
} from "../assets/index";
const Contact = () => {
    return (
        <>
            <main id="Contact"
                className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15 py-16 min-h-dvh">
                <section className="flex flex-col gap-8 py-2 relative">
                    <div className="space-y-3">
                        <span className="text-[clamp(0.75rem,2vw,1rem)] font-semibold uppercase tracking-widest text-blue-500">
                            Contact
                        </span>

                        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 dark:text-white">
                            Contactez-moi
                        </h1>

                        <p className="max-w-xl text-slate-600 dark:text-slate-400 text-[clamp(0.9rem,1.5vw,1rem)]">
                             N'hésitez pas à me contacter pour toute opportunité, collaboration ou simplement pour échanger sur un projet.
                        </p>
                    </div>
                    <hr className="border-slate-800" />
                    <div className="w-full p-1 flex items-center justify-center">
                                         <div className="md:w-[50%] w-[90%] px-2 py-3 h-auto flex gap-5 flex-wrap justify-center ">
                                            <a href="" className="flex flex-row py-2 px-3 border items-center gap-3 
                                            rounded-lg hover:translate-y-1 transition-all min-w-65 ">
                                                <img  src={alternate_email} alt="Home" className="size-11 bg-blue-500 p-2 rounded-xl" />
                                                <span className="h-full flex items-center justify-center">anassrjeb929@gmail.com</span>
                                            </a>
                                            <a href="" className="flex flex-row py-2 px-3 border items-center gap-3 
                                            rounded-lg hover:translate-y-1 transition-all min-w-65 ">
                                                <img  src={call} alt="Home" className="size-11 bg-blue-500 p-2 rounded-xl" />
                                                <span className="h-full flex items-center justify-center">+212 665019496</span>
                                            </a> 
                                            <a href="" className="flex flex-row py-2 px-3 border items-center gap-3 
                                            rounded-lg hover:translate-y-1 transition-all min-w-65 ">
                                                <img  src={location} alt="Home" className="size-11 bg-blue-500 p-2 rounded-xl" />
                                                <span className="h-full flex items-center justify-center">Maroc ,Fès</span>
                                            </a> 
                                            <a href="https://github.com/Rjeb-Anas" target="_blank" className="flex flex-row py-2 px-3 border items-center gap-3 
                                            rounded-lg hover:translate-y-1 transition-all min-w-65 ">
                                                <img  src={github} alt="Home" className="size-11 bg-blue-500 p-2 rounded-xl" />
                                                <span className="h-full flex items-center justify-center">github.com/Rjeb-Anas</span>
                                            </a>               
                                        </div>
                                       </div>
                </section>
            </main>
        </>
    )
}

export default Contact;