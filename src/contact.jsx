import './global.css';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Contact(){

    let [contactInfo , setContactInfo] = useState(
        {name:"" , email:"" , phoneNo:"" , socialMedia:""
    });

    let name , value;

    const handleSubmit = (e) =>{
        console.log(e);
        name = e.target.value;
        value = e.target.value;
        setContactInfo({...contactInfo , [name]:value});

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

           <div className ="h-[70vh] w-screen p-4 flex justify-evenly items-center flex-wrap overflow-y-scroll custom
           sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">

             <form method="POST" className="h-auto w-screen grid grid-cols-1 grid-rows-5 place-items-center
             sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5">
              <input className ="h-4 w-auto bg-transparent m-2 p-4 text-white" onClick={handleSubmit} 
              type = "text" value = {contactInfo.name} placeholder ="Enter your name"></input>
              <input className ="h-4 w-auto bg-transparent m-2 p-4 text-white" onClick={handleSubmit} 
              type = "text" value = {contactInfo.email} placeholder = "E-mail"></input>
              <input className ="h-4 w-auto bg-transparent m-2 p-4 text-white" onClick={handleSubmit} 
              type = "text" value = {contactInfo.phoneNo} placeholder ="Phone number"></input>
              <input className ="h-4 w-auto bg-transparent m-2 p-4 text-white" onClick={handleSubmit} 
              type = "url" value = {contactInfo.socialMedia} placeholder ="Social media link"></input>

              <label><button type="submit" value="submit" onChange={handleSubmit}
              className="h-full w-auto px-4 py-1 m-2 text-white text-xl flex justify-center items-center bg-slate-700 font-semibold rounded-lg">Submit</button></label>
             </form>

             <div className="h-auto w-screen text-white text-2xl flex justify-center items-center my-4
             sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5">OR</div>

             <div className="h-auto w-screen flex justify-center items-center
             sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5">
                <p className="h-auto w-screen text-white text-2xl grid grid-cols-1 grid-rows-2 place-items-center gap-2">
                   <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                    kamblesainath41@gmail.com
               
                   <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
                    +919152218814
                </p>
             </div>
             
           </div>
        </section>
        <Footer/>
        </>
    );
}