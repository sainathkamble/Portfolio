import './global.css';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact(){

    let name , value;

    const handleSubmit = (e) =>{
        console.log(e);
        name = e.target.value;
        value = e.target.value;
        alert("Form submitted");
    }

    return(
        <>
        <video src="./main.mp4" autoPlay={true} muted loop className="absolute w-screen h-screen object-cover"></video>
        <Navbar/>
        <section className="relative h-[80vh] w-screen">
            <header className="h-[10vh] w-screen p-4 flex justify-start items-center font-semibold text-white text-2xl
            sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:textt-4xl
            sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
             <span className="group cursor-pointer">
             Contact Me
             <div className="h-1.5 w-0 group-hover:w-auto transition delay-0 duration-700 ease-in-out rounded-lg bg-sky-600"></div>
             </span>
           </header>

           <div className ="h-[70vh] w-screen p-4 flex justify-center items-center flex-wrap overflow-y-scroll custom
           sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">

             <form method="POST" action="https://formspree.io/f/xwkggejz" className="h-auto w-screen grid grid-cols-1 grid-rows-5 place-items-center
             sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5">

              <input className ="h-4 w-3/4 bg-transparent m-4 p-4 text-white sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2" 
              type = "text" name="Name" placeholder ="Enter your name" autoComplete="off" required>
              </input>

              <input className ="h-4 w-3/4 bg-transparent m-4 p-4 text-white sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2" 
              type = "email" name="E-mail" placeholder = "E-mail" autoComplete="off" required>
              </input>

              <input className ="h-4 w-3/4 bg-transparent m-4 p-4 text-white sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2" 
              type = "text" name="Contact no" placeholder ="Phone number" autoComplete="off">
              </input>

              <input className ="h-4 w-3/4 bg-transparent m-4 p-4 text-white sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2" 
              type = "url" name="Social media link" placeholder ="Social media link" autoComplete="off">
              </input>

              <button type="submit" value="submit" onChange={handleSubmit}
              className="h-auto w-auto px-4 py-2 m-4 text-white text-xl flex justify-center items-center bg-sky-600 hover:bg-sky-800 font-semibold rounded-lg">
              Submit
              </button>
             </form>
             
           </div>
        </section>
        <Footer/>
        </>
    );
}