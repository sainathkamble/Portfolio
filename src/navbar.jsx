import './global.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="z-10 h-[10vh] w-screen bg-transparent fixed flex justify-evenly items-center">

          {
            [
              ["1","./","Home"],
              ["2","./skills","Skills"],
              ["3","./projects","Projects"],
              ["4","./contact","Contact"],
              ["5","./","Resume"],
            ].map(([key,link,navOption])=>(
             <a key={key} href={link} className="text-2xl text-white font-semibold">{navOption}</a>
            ))}

        </nav>
    );
}