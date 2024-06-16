import '../global.css';
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
    <section className="z-0 relative h-[90vh] w-screen p-4 flex justify-evenly items-center flex-wrap-reverse
    sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
    sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">

    <div className="h-1/2 w-screen text-white grid grid-cols-1 grid-rows-5 place-items-center
    sm:h-2/4 sm:w-2/4 md:h-3/4 md:w-3/4 lg:h-3/4 lg:w-3/4 xl:h-3/4 xl:w-2/4 2xl:h-3/4 2xl:w-2/4">

     <p className="h-auto w-full text-xl my-4 flex justify-center items-center
     sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl">Hi I am</p>
     <p className="h-auto w-full text-2xl my-8 flex justify-center items-center
     sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Sainath Kamble</p>

     <div className="h-auto w-full text-xl my-8 flex justify-center items-center
     sm:text-xl md:text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
       <span ref={el} />
     </div>   
     <p className="h-auto w-full text-lg my-4 flex justify-center items-center 
     sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl">Currently pursuing B.tech</p>

     <div className="h-auto w-1/3 text-lg my-4 flex justify-between items-center 
     sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl">
       <a href="https://github.com/sainathkamble" className="over">
        <FontAwesomeIcon icon={faGithub} className="text-white cursor-pointer"/>
        <div className="under"></div>
       </a>
       <a href="https://www.instagram.com/sainath.io/" className="over">
        <FontAwesomeIcon icon={faInstagram} className="text-white cursor-pointer"/>
        <div className="under"></div>
       </a>
       <a href="https://x.com/sainaththedev" className="over">
        <FontAwesomeIcon icon={faXTwitter} className="text-white cursor-pointer"/>
        <div className="under"></div>
       </a>
     </div>
    </div>

    <div className="h-1/3 w-3/4 text-slate-50 flex justify-center items-center
    sm:h-2/4 sm:w-2/4 md:h-3/4 md:w-3/4 lg:h-3/4 lg:w-3/4 xl:h-3/4 xl:w-3/4 2xl:h-3/4 2xl:w-3/4">
      <img  className="h-full w-w-full rounded-full"
      src="./hero.jpg" alt="My image" />
    </div>
  </section>
  </>
  );
}