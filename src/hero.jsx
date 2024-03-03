import React from 'react';
import Typed from 'typed.js';

export default function Hero() {
        // Create reference to store the DOM element containing the animation
        const el = React.useRef(null);
      
        React.useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>I am</i> a Student.', '&amp; a Gamer.', '&amp; a Graphics Designer.', '&amp; a Web Developer.'],
            typeSpeed: 100,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);

        return(
          <section className="Hero">
            <nav className="navbar">
              <div className="nav-options">
                <div className="nav-item-container">
                  <div className="nav-item" onClick={() => {
                    window.scrollTo({
                      top: 0, behavour: "smooth",
                    });
                    } }>
                    Home
                  </div>
                </div>
              <div className="nav-item-container">
                  <div className="nav-item">
                    <a href="">Resume</a>
                  </div>
              </div>
              <div className="nav-item-container">
                <div className="nav-item" onClick={() => {
                  window.scrollTo({
                    top: 480, behaviour: "smooth",
                  });
                  } }>
                  Skills
                </div>
              </div>
              <div className="nav-item-container">
                <div className="nav-item" onClick={() => {
                  window.scrollTo({
                    top: 900, behaviour: "smooth",
                  });
                  } }>
                  Projects
                </div>
              </div>
              <div className="nav-item-container">
                <div className="nav-item" onClick={() => {
                  window.scrollTo({
                    top: 1280, behavour: "smooth",
                  });
                  } }>
                  Contact
                </div>
              </div>
             </div>
           </nav>
           <div className="hero-section">
              <div className="about-section">

                <p className="about-greeting">Hello!</p>
                <p className="about-name">I'm Sainath</p>

                <div className="about-profession">
                  <span ref={el} />
                </div>

                <p className="about-info">Curreently pursuinng Btech</p>
                <p className="about-info">Mumbai,India</p>

                <div className="social-media">
                  <a href="https://github.com/sainathkamble">
                    <i className="social-media-icon" class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/sainath.io/">
                    <i className="social-media-icon" class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/Sainath83162517">
                    <i className="social-media-icon" class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="social-media-icon" class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

               <img className="hero-image" src = "hero.png" alt="My Image"></img>

            </div>
         </section>
  );
}