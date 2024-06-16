import '../global.css';

export default function Navbar(){

const scrollToHome = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth', })
}

const scrollToSkills = () =>{
  window.scrollTo({ top: 550, behavior: 'smooth', })
}

const scrollToProjects = () =>{
  window.scrollTo({ top: 1200, behavior: 'smooth', })
}

const scrollToContact = () =>{
  window.scrollTo({ top: 1800, behavior: 'smooth', })
}

    return(
        <nav className="z-10 h-[10vh] w-screen relative bg-transparent flex justify-evenly items-center">
         <div className="h-[10vh] w-screen flex justify-evenly items-center fixed">
          {
            [
              ["1", "Home",scrollToHome],
              ["2","Skills",scrollToSkills],
              ["3","Projects",scrollToProjects],
              ["4","Contact",scrollToContact],
            ].map(([id,navOption,scroll])=>(
             <>
              <div key={id} onClick={scroll} className="h-auto w-auto text-sm text-white font-medium cursor-pointer over
               sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                {navOption}
                <div onClick={scroll} className="under"></div>
             </div>
             </>
            ))}
            <a href="./resume.pdf" className="h-auto w-auto text-sm text-white font-medium cursor-pointer over
             sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl" download={true}>
              Resume
              <div className="under"></div>
             </a>
          </div>
        </nav>
    );
}