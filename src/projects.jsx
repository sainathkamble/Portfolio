import './global.css';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered , faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

export default function Projects(){

    return(
    <>
    <Navbar/>
    <video src="../public/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-full h-full object-cover"></video>
    <section className="relative h-[90vh] w-screen pt-[10vh]">

      <header className ="w-screen text-slate-50 text-4xl underline px-8 py-5">
        Projects
      </header>

      <div className ="w-screen grid grid-cols-2 place-items-center gap-10 p-10">

      <div className="h-full w-2/3 rounded-lg bg-slate-700 text-white flex justify-evenly items-center">
        <div className="h-full w-1/3 flex justify-center items-center rounded-l-lg bg-purple-800">
        <FontAwesomeIcon icon={faUser} className="text-5xl" />
       </div>
       <div className="mx-3 my-2">
          <p>A personal portfolio website for official purposes.</p>
          <a href="#" className="text-blue-500">Click here to view website</a>
       </div>
      </div>

      <div className="h-full w-2/3 rounded-lg bg-slate-700 text-white flex justify-evenly items-center">
        <div className="h-full w-1/3 flex justify-center items-center rounded-l-lg bg-sky-600">
         <FontAwesomeIcon icon={faFlagCheckered} className="text-5xl" />
        </div>
       <div className="mx-3 my-2">
          <p>A website for live streaming formula 1 races.</p>
          <a href="#" className="text-blue-500">Click here to view website</a>
       </div>
      </div>

      <div className="h-full w-2/3 rounded-lg bg-slate-700 text-white flex justify-evenly items-center">
        <div className="h-full w-1/3 flex justify-center items-center rounded-l-lg bg-red-600">
        <FontAwesomeIcon icon={faYoutube} className="text-5xl" />
       </div>
       <div className="mx-3 my-2">
          <p>A youtube clone website made with HTML & CSS.</p>
          <a href="#" className="text-blue-500">Click here to view website</a>
       </div>
      </div>

    </div>

  </section>
  <Footer/>
  </>
  );
}