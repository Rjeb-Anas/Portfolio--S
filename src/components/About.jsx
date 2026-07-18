import {
    location,
    calendar,
} from "../assets";

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
                    <div className="w-full px-2 py-3 h-auto flex gap-5 items-center justify-center">
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default About