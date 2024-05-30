import './global.css';
import Navbar from './navbar';
import Footer from './footer';

export default function Skills() {
  return(
    <>
      <Navbar/>
      <video src="../public/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-full h-full object-cover"></video>
      <section className="relative h-[90vh] w-screen pt-[10vh]">
      <header className ="w-auto text-slate-50 text-4xl px-8 py-5 peer">
          Skills Stack
          <div className="h-2 w-44 rounded-lg bg-sky-600 cursor-pointer invisible peer-hover:visible"></div>
      </header>

      <div className="w-screen grid grid-cols-3 gap-x-10 gap-y-10 px-10 py-10">
  
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">HTML</p>
             <p className="skill-info">
              Proficient in crafting well-structured and semantic web pages using HTML5. Adept at creating clear document outlines and optimizing content for accessibility and search engine optimization (SEO).
              </p>
          </div>
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">CSS</p>
              <p className="skill-info">
              Skilled in styling web pages with CSS3, focusing on creating visually appealing and responsive designs.
              </p>
          </div>
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">Tailwind + Bootstrap</p>
              <p className="skill-info">
              Proficient in leveraging CSS frameworks such as  Tailwind CSS and Bootstrap to create visually appealing and responsive web designs, ensuring a seamless user experience.
              </p>
          </div>
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">Javascript</p>
              <p className="skill-info">
              Demonstrates a strong proficiency in JavaScript, with a comprehensive understanding of ES6 features. 
              Knowledgeable about asynchronous programming, promises, and event-driven architecture.
              </p>
          </div>
          <div className="skills-container">
             <p className="font-semibold text-xl px-3">React.js</p>
              <p className="skill-info">
              Experienced in developing modern single-page applications using React.js. 
              Familiar with React Router for effective navigation and user interface development.
              </p>
          </div>
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">Next.js</p>
              <p className="skill-info">
              Experienced in utilizing its powerful features for server-side rendering and automatic code splitting to enhance scalability and optimize load times.
              </p>
          </div>
          <div className="skills-container">
             <p className = "font-semibold text-xl px-3">Git & Github</p>
              <p className="skill-info">
              Proficient in version control using Git, with a strong emphasis on collaboration through GitHub. Skilled in branching, merging, and conflict resolution. 
              </p>
          </div>
      </div>
      </section>
      <Footer/>
    </>
  );
}