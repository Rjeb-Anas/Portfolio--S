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
                        max-md:py-2 bg-cyan-950 rounded-full
                        hover:bg-white/10">Resume</a>
                        <div className="w-1/2 
                        h-auto py-3 flex items-center gap-4 justify-center">
                            <a href="https://github.com/Rjeb-Anas" target="_blank" className="size-10 rounded-full">
                                <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
                                    className="size-full dark:fill-white">
                                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
                            </a>
                            <a href="https://github.com/Rjeb-Anas" target="_blank" className="size-10 rounded-xl">
                                <svg  version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" 
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32" xml:space="preserve" className="size-full dark:fill-white">
                                    <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3
	c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 max-md:h-1/2 flex items-center justify-center ">
                    <div className="md:w-[30vw] max-md:w-[60vw] h-40 
                    md:h-60 
                    rounded-xl">
                        <img
                            src={image}
                            alt="Portfolio"
                            className="size-full rounded-xl"
                        />
                    </div>
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