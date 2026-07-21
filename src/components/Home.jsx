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
             max-md:items-center w-full  gap-6  py-10 relative h-150 ">
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
                        <a href="#About" className="p-1 rounded-full dark:bg-white/10 bg-black mt-5    flex items-center justify-center animate-bounce ">
                            <img src={double_arrow_down} alt="double_arrow_down" className="animate-bounce" />
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