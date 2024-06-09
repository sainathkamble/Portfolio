import './global.css';
import React from 'react';

export default function Navbar(){
    return(
        <nav className="h-[10vh] w-screen relative bg-transparent flex justify-evenly items-center">

          {
            [
              ["1","./","Home"],
              ["2","./skills","Skills"],
              ["3","./projects","Projects"],
              ["4","./contact","Contact"],
            ].map(([id,link,navOption])=>(
             <>
              <a key={id} href={link} className="h-auto w-auto text-sm text-white font-medium group
               sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                {navOption}
                <div className="h-1.5 w-0 group-hover:w-auto transition duration-700 ease-in-out rounded-lg bg-sky-600"></div>
             </a>
             </>
            ))}
            <a href="./resume.pdf" className="h-auto w-auto text-sm text-white font-medium group
             sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl" download={true}>
              Resume
              <div className="h-1.5 w-0 group-hover:w-auto transition duration-700 ease-in-out rounded-lg bg-sky-600"></div>
             </a>
        </nav>
    );
}