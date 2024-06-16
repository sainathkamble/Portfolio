import './global.css';
import Navbar from './pri-compo/navbar.jsx';
import Hero from './sec-compo/hero.jsx';
import Skills from './sec-compo/skills.jsx';
import Projects from './sec-compo/projects.jsx';
import Contact from './sec-compo/contact.jsx';
import Footer from './pri-compo/footer.jsx'

export default function App(){
    return(
      <>
      <section className="h-auto w-full overflow-x-hidden overflow-y-scroll custom">
       <video src="./main.mp4" autoPlay={true} muted loop className="fixed -z-10 w-screen h-screen object-cover"></video>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </section>
      </>
    );
}



