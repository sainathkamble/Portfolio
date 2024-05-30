import './global.css';
import React from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faInstagram ,  faXTwitter} from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  //Typed js    
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>I am</i> student', 'I am a graphic designer', 'I am  a web developer'],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return(
    <>
    <video src="../public/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-full h-full object-cover"></video>
   <section className="relative h-[90vh] w-screen grid grid-cols-2 grid-rows-1 place-items-center">

    <div className="h-2/4 w-2/3 text-slate-50 grid grid-cols-1 grid-rows-5 place-items-center">
     <p className="w-auto text-2xl my-4">Hi I'm</p>
     <p className="w-auto text-6xl my-8">Sainath Kamble</p>
     <div className="w-auto text-4xl my-8">
       <span ref={el} />
     </div>   
     <p className="w-auto text-2xl my-4">Currently pursuing B.tech</p>

     <div className="w-1/3 text-2xl my-4 flex justify-between items-center">
       <a href="https://github.com/sainathkamble">
        <FontAwesomeIcon icon={faGithub} className="text-white cursor-pointer" />
       </a>
       <a href="https://www.instagram.com/sainath.io/">
        <FontAwesomeIcon icon={faInstagram} className="text-white cursor-pointer" />
       </a>
       <a href="https://x.com/sainaththedev">
        <FontAwesomeIcon icon={faXTwitter} className="text-white cursor-pointer" />
       </a>
     </div>
    </div>

    <div className="h-full w-full text-slate-50 flex justify-center items-center">
      <img  className="h-3/5 w-2/4 rounded-full"
      src="./hero.jpg" alt="My image" />
    </div>

  </section>
  </>
  );
}