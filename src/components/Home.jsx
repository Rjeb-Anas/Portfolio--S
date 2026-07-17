import image from "../assets/img.png";


const Home = () => {
    return (
        <main className="mx-auto min-h-[calc(100dvh-6.25rem)]  w-full
    max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="flex md:flex-row max-md:flex-col
             max-md:items-center w-full  gap-6  py-10 relative h-150 ">
                <div className="md:w-1/2 max-md:h-1/2 h-auto flex flex-col
                 justify-center">
                    <h1 className="text-[clamp(2rem,5vw,3rem)] py-2 w-full text-center font-bold">
                        Anass Rjeb
                    </h1>

                    <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] py-2 w-full text-center">
                        Front-End Developer
                    </h2>

                    <p className="text-[clamp(0.9rem,1.5vw,1rem)] py-2 w-full text-center leading-relaxed">
                        Computer Science student and Front-End Developer passionate about
                        creating responsive, modern, and accessible web applications using
                        React, Tailwind CSS, and JavaScript.
                    </p>
                    <div className="w-full flex py-3 max-md:flex-col
                    items-center justify-center">
                        <a href="" className="py-3 px-10
                        max-md:py-2 bg-cyan-950 rounded-full text-white
                        dark:hover:bg-white/10">Resume</a>
                        <div className="w-1/2 h-auto py-3 flex items-center justify-center gap-4">

                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 max-md:h-1/2 flex items-center justify-center ">
                    <a href="" className="md:w-[30vw] max-md:w-[60vw] h-40 
                    md:h-60 
                    rounded-xl hover:scale-95 transition-all">
                        <img
                            src={image}
                            alt="Portfolio"
                            className="size-full rounded-xl shadow-[0_0_7px_black]
                dark:shadow-[0_0_7px_white]"
                        />
                    </a>
                </div>
                <a href="#Cursus" className='w-auto h-auto   border rounded-full absolute bottom-0  left-1/2 -translate-x-1/2'>
                    <button
                        class="cursor-pointer relative after:content-['scroll_to_bottom']
                         after:text-white after:absolute after:text-nowrap after:scale-0 
                         hover:after:scale-100 after:duration-200 w-10 h-10 rounded-full  border-4 border-sky-200 bg-black pointer 
                         flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
                    >
                        <svg
                            class="w-2.5 fill-white delay-50 duration-200 group-hover/button:-translate-y-12 rotate-180"
                            viewBox="0 0 384 512"
                        >
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 
                                45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                    </button>
                </a>
            </section>
        </main>
    );
};

export default Home;