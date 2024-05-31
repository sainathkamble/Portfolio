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
              ["5","./","Resume"],
            ].map(([key,link,navOption])=>(
             <a key={key} href={link} className="h-auto w-auto text-sm text-white font-medium hover:text-sky-600
             sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">{navOption}</a>
            ))}

        </nav>
    );
}