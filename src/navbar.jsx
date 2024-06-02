import './global.css';
import React from 'react';

export default function Navbar(){
    return(
        <nav className="h-[10vh] w-screen z-10 relative bg-transparent flex justify-evenly items-center">

          {
            [
              ["1","./","Home"],
              ["2","./skills","Skills"],
              ["3","./projects","Projects"],
              ["4","./contact","Contact"],
            ].map(([key,link,navOption])=>(
             <>
              <a key={key} href={link} className="h-auto w-auto text-sm text-white font-medium group
               sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                {navOption}
                <div key={key} className="h-1.5 w-0 group-hover:w-auto transition delay-0 duration-700 ease-in-out rounded-lg bg-sky-600"></div>
             </a>
             </>
            ))}
            <a href="./public/resume.pdf" className="h-auto w-auto text-sm text-white font-medium group
             sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl" download={true}>
              Resume
              <div className="h-1.5 w-0 group-hover:w-auto transition delay-0 duration-700 ease-in-out rounded-lg bg-sky-600"></div>
             </a>
        </nav>
    );
}