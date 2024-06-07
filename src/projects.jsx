import './global.css';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faFlagCheckered , faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

export default function Projects(){

    return(
    <>
    <video src="/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-screen h-screen object-cover"></video>
    <Navbar/>
    <section className="relative z-0 h-[80vh] w-screen">

      <header className ="h-[10vh] w-screen text-white text-2xl p-4 flex justify-start items-center font-semibold
      sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:textt-4xl
      sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
        <span className="group cursor-pointer">
            Projects
            <div className="h-1.5 w-0 group-hover:w-auto transition delay-0 duration-700 ease-in-out rounded-lg bg-sky-600"></div>
          </span>
      </header>

      <div className ="h-[70vh] w-screen p-4 grid place-items-center gap-10 overflow-y-scroll custom
       sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-1 lg:grid-rows-3
       xl:grid-cols-2 xl:grid-rows-2 2xl:grid-cols-2 2xl:grid-rows-2
       sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">

       {
        [
          ["1",faUser,"#","A personal portfolio website for official purposes."],
          ["2",faFlagCheckered,"https://f1withsainath.vercel.app/","A website for live streaming formula 1 races with feature of checking race time in different time zones."],
          ["4",faBowlFood,"https://campus-cafe.vercel.app/","A web app to order food in local cafeteria with order code generating feature which is not done yet. It will be done with backend + DB ASAP."],
          ["4",faYoutube,"https://you-tubeclone-coral.vercel.app/","A youtube clone website made with HTML & CSS based on Reacct.js further backend + DB will be done ASAP."],
        ].map(([key,icon,link,description]) =>(
          <div key={key} className="h-2/3 w-full rounded-lg bg-slate-700 text-white flex justify-evenly items-center
          sm:h-full sm:w-2/4 md:h-full md:w-3/4 lg:h-full lg:w-2/4 xl:h-2/4 xl:w-3/4 2xl:h-2/4 2xl:w-3/4">

            <div className="h-full w-1/3 py-4 flex justify-center items-center rounded-l-lg bg-contain bg-purple-800">
              <FontAwesomeIcon icon={icon} className="text-5xl" />
           </div>

           <div className="h-full w-2/3 m-2 overflow-y-scroll custom">
              <p>{description}</p>
              <a href={link} className="text-blue-500">Click here to view web app!</a>
           </div>

         </div>
        ))
      }
      </div>
   </section>
   <Footer/>
   </>
);
}