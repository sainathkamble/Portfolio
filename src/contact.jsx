import './global.css';
import Navbar from './navbar';
import Footer from './footer';

export default function Contact(){
    return(
        <>
        <Navbar/>
        <video src="../public/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-full h-full object-cover"></video>
        <section className="relative h-[90vh] w-screen pt-[10vh]">
            <header className="w-screen text-slate-50 text-4xl underline px-8 py-5">
                Contact me
           </header>

           <div className ="w-screen grid grid-cols-1 gap-y-10 px-12 py-10">

              <input className ="contact-container" type = "text" value = "Name" placeholder ="Enter your name"></input>
              <input className ="contact-container" type = "text" value = "E-mail" placeholder = "E-mail"></input>
              <input className ="contact-container" type = "text" value = "Phone Number" placeholder ="Phone number"></input>
              <input className ="contact-container" type = "url" value = "Social Meadia Link" placeholder ="Social media link"></input>

              <input type="submit" value="submit" className = "h-10 w-1/5 bg-slate-700 text-slate-200 font-bold rounded-lg place-self-center">
             </input>

           </div>
        </section>
        <Footer/>
        </>
    );
}