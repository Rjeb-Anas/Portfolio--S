import { useEffect, useState, useRef } from "react";
import Mode from './Mode'
import {
    arrowSvg,
    homeSvg,
    menuSvg,
    assignment,
    call,
    close,
} from "../assets";

const Header = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const [isMenuOpen, SetIsMenuOpen] = useState(false);
    const aboutRef = useRef(null);
    const mobileMenuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (aboutRef.current && !aboutRef.current.contains(e.target)) {
                SetIsOpen(false);
            }

            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                SetIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <header id="Head" className="mx-auto flex h-20 max-w-7xl  bg-cyan-950 w-full text-white
             items-center md:justify-between max-md:justify-around px-4 sm:px-6 md:px-8 lg:px-10 text-[clamp(1rem,2vw,1.25rem)]">
                <span>Portfolio</span>
                <div className="max-md:hidden py-3 px-3 flex items-center justify-center">
                    <a href="" className="px-3 py-2 m-2 relative 
                        flex items-center justify-center
                        after:rounded-full
                        after:contente-[''] after:w-0 after:h-0.5 after:bg-white after:absolute 
                        hover:after:w-full after:transition-all
                        after:left-0 after:bottom-0 ">
                        <img src={homeSvg} alt="Home" className="size-5 mr-2" />
                        Home</a>
                    <button ref={aboutRef}
                        onClick={() => SetIsOpen(!isOpen)} className={`px-3 py-2 m-2 relative 
                        flex items-center justify-center
                        after:rounded-full
                        after:contente-[''] after:w-0 after:h-0.5 after:bg-white after:absolute 
                        after:transition-all
                        ${isOpen ? "hover:after:w-0" : "hover:after:w-full"}
                        after:left-0 after:bottom-0 `}>
                        <img src={assignment} alt="Home" className="size-5 mr-2" />
                        About
                        <img src={arrowSvg} alt="" className={`size-5 ml-2 ${isOpen ? "animate-open-arrow" : ""} `} />
                        <div className={`absolute flex-col w-full h-auto py-3 bg-cyan-950 top-full z-50 rounded-lg shadow-lg shadow-black
                                left-0 ${isOpen ? "flex animate-menu-open" : "hidden"} text-[clamp(0.5rem,1vw,0.75rem)`}>
                            <a href="#About" className="py-2 hover:bg-white/10 overflow-hidden line-clamp-1 ">About</a>
                            <a href="#Cursus" className="py-2 hover:bg-white/10 overflow-hidden line-clamp-1 ">Cursus</a>
                            <a href="" className="py-2 hover:bg-white/10 overflow-hidden line-clamp-1 ">Projects</a>
                        </div>
                    </button>
                    <a href="" className="px-3 py-2 m-2 relative 
                        flex items-center justify-center
                        after:rounded-full
                        after:contente-[''] after:w-0 after:h-0.5 after:bg-white after:absolute 
                        hover:after:w-full after:transition-all
                        after:left-0 after:bottom-0 ">
                        <img src={call} alt="Home" className="size-5 mr-2" />
                        Contact</a>
                </div>
                <Mode></Mode>
                <div ref={mobileMenuRef}
                    className="md:hidden relative py-1 px-1 flex items-center   rounded-full hover:cursor-pointer
                    justify-center" >
                    {
                        isMenuOpen ?
                            <img src={close} alt="Home" className="size-8 " onClick={() => { SetIsMenuOpen(!isMenuOpen) }} /> :
                            <img src={menuSvg} alt="Home" className="size-8" onClick={() => { SetIsMenuOpen(!isMenuOpen) }} />
                    }

                    <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2
                        flex-col w-30 h-auto rounded-lg bg-cyan-950 shadow-lg shadow-black
                         py-2
                        text-[clamp(1rem,2vw,1.25rem)]
                        ${isMenuOpen
                                ? "flex animate-menu-open"
                                : "hidden "
                            }`}
                    >
                        <a href="#Cursus" className="w-full text-center py-2 hover:bg-white/10">About Me</a>
                        <a href="" className="w-full text-center py-2 hover:bg-white/10">Contact</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;