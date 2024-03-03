

export default function Projects(){

    return(
    <section>
      <header className = "projects-header">
        Projects
       <div className ="projects-underline"></div>
      </header>
      <div className = "projects">
        <div className="project-container">
          <div className="icon-container">
           <i class="fa-brands fa-spotify"></i>
         </div>
         <div className="project-info">
            <p>An e-commerce clone website made with HTML & CSS further work in progress!</p>
            <a href="https://amazonclone-jc36.onrender.com/">Click here to view website</a>
         </div>
       </div>
      <div className="project-container">
        <div className="icon-container">
         <i class="fa-brands fa-youtube"></i>
       </div>
       <div className="project-info">
          <p>A youtube clone website made with HTML & CSS further work in progress!</p>
          <a href="https://youtubeclone-4bwo.onrender.com/">Click here to view website</a>
       </div>
     </div>
     <div className="project-container">
        <div className="icon-container">
          <i class="fa-solid fa-cart-shopping"></i>
       </div>
       <div className="project-info">
          <p>A spotify clone website made with HTML & CSS further work in progress!</p>
          <a href="https://spotifyclone-p663.onrender.com/">Click here to view website</a>
       </div>
     </div>
    </div>
  </section>
    );
}