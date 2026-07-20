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
                </section>
            </main>
        </>
    )
}

export default Contact;