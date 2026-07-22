import image from "../assets/img.png";
import {
    double_arrow_down,
} from '../assets/index'

const Home = () => {
    document.curre
    return (
        <main className="mx-auto min-h-dvh  w-full flex items-center justify-center
    max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="flex md:flex-row max-md:flex-col
             items-center w-full  gap-6  py-10 relative h-150 ">
                <div className="md:w-1/2 max-md:h-1/2 h-auto flex flex-col
                 justify-start">
                    <h1 className="text-[clamp(2rem,5vw,3rem)] py-2 w-full text-center font-bold">
                        Anass Rjeb
                    </h1>

                    <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] py-2 w-full text-center">
                        Développeur Front-End
                    </h2>

                    <p className="text-[clamp(0.9rem,1.5vw,1rem)] py-2 w-full text-center leading-relaxed">
                        Étudiant en Génie Informatique et développeur Front-End, passionné par la création d'applications web modernes,
                        réactives et accessibles avec React, Tailwind CSS et JavaScript.
                    </p>
                    <div className="w-full flex py-3 flex-col
                    items-center justify-center">
                        <a href="https://github.com/Rjeb-Anas" target="_blank"
                            class="group w-12 hover:w-44 h-12 hover:bg-gray-800 relative  bg-gray-900 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-gray-900 before:hover:bg-gray-800 before:rotate-45"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="w-8 h-8 shrink-0 fill-neutral-50"
                            >
                                <path
                                d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.1-.76.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.6.24 2.8.12 3.1.75.8 1.2 1.82 1.2 3.08 0 4.44-2.7 5.4-5.28 5.68.4.34.76 1.02.76 2.06v3.05c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                                ></path>
                            </svg>
                            <span
                                class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
                            >
                                GitHub
                            </span>
                            </a>

                    </div>
                </div>
                <div className="md:w-1/2 max-md:h-1/2 flex flex-col items-center justify-start  max-md:justify-center">
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
            </section>
        </main>
    );
};

export default Home;