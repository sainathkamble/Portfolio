import './global.css';
import Navbar from './navbar';
import Footer from './footer';

export default function Skills() {
  return(
    <>
      <video src="./public/main.mp4" autoPlay={true} muted loop className="absolute -z-10 w-screen h-screen object-cover"></video>
      <Navbar/>
      <section className="relative z-0 h-[80vh] w-screen">
      <header className ="h-[10vh] w-screen flex justify-start items-center font-semibold text-white text-2xl p-4
      sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:textt-4xl
      sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
          <span className="group cursor-pointer">
            Technical Skills
            <div className="h-1.5 w-0 group-hover:w-auto transition delay-0 duration-700 ease-in-out rounded-lg bg-sky-600"></div>
          </span>
      </header>

      <div className="h-[70vh] w-screen p-4 grid place-items-center gap-10 bg-contain overflow-y-scroll custom
      sm:grid-cols-2 sm:grid-rows-4  md:grid-cols-2 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-4 
      xl:grid-cols-3 xl:grid-rows-3 2xl:grid-cols-3 2xl:grid-rows-3
      sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
       
       {
        [
          ["1","HTML","Proficient in crafting well-structured and semantic web pages using HTML5. Adept at creating clear document outlines and optimizing content for accessibility and search engine optimization (SEO)."],
          ["2","CSS","Skilled in styling web pages with CSS3, focusing on creating visually appealing and responsive designs."],
          ["3","Tailnd + Bootstrap","Proficient in leveraging CSS frameworks such as  Tailwind CSS and Bootstrap to create visually appealing and responsive web designs, ensuring a seamless user experience."],
          ["4","Javaript","Demonstrates a strong proficiency in JavaScript, with a comprehensive understanding of ES6 features. Knowledgeable about asynchronous programming, promises, and event-driven architecture."],
          ["5","Reac.js","Experienced in developing modern single-page applications using React.js. Familiar with React Router for effective navigation and user interface development."],
          ["6","Next.js","Experienced in utilizing its powerful features for server-side rendering and automatic code splitting to enhance scalability and optimize load times."],
          ["7","Git & Github","Proficient in version control using Git, with a strong emphasis on collaboration through GitHub. Skilled in branching, merging, and conflict resolution. "],
        ].map(([key,skillName,description]) =>(
          <div key={key} className="h-20 w-auto rounded-lg bg-slate-700 text-white px-3 py-2 flex justify-evenly items-center bg-contain">
             <p className = "font-semibold text-xl px-3">{skillName}</p>
             <p className="h-full w-auto pl-5 overflow-y-scroll custom">
              {description}
             </p>
          </div>
        ))
       }
      </div>
      </section>
      <Footer/>
    </>
  );
}