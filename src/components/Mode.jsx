import { useEffect, useState } from "react";

const Mode = () => {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    return (
        <label checked={dark}
        onChange={()=>{setDark(!dark)}}
  className="md:w-14 md:h-6 max-md:w-10 max-md:h-4  bg-black shadow-inner rounded-full text-white
   flex justify-around items-center overflow-hidden  outline-2 outline-offset-2"
>
  <input type="checkbox" className="peer hidden" />
  <div
    className="md:w-4 md:h-4 max-md:w-3 max-md:h-3 flex justify-center items-center
     text-white bg-black border-2 duration-500 rounded-full peer-checked:-translate-x-8"
  ></div>
  <div
    className="md:w-4 md:h-4 max-md:w-3 max-md:h-3 flex justify-center items-center
     text-white duration-500 rounded-full translate-x-8 peer-checked:translate-x-0 rotate-90"
  >
    𝝞
  </div>
</label>
    

    )
}

export default Mode;