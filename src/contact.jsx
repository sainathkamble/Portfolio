
export default function Contact(){
    return(
        <section>
            <header className = "contact-header">
                Contact me
                <div className ="contact-underline"></div>
           </header>

           <div className = "contact">
              <input type = "text" name = "Name" placeholder ="Enter your name"></input>
              <input type = "text" name = "E-mail" placeholder = "E-mail"></input>
              <input type = "text" name = "Phone Number" placeholder ="Phone number"></input>
              <input type = "url" name = "Social Meadia Link" placeholder ="Social media link"></input>

              <button className = "submit-button">Submit</button>
           </div>
        </section>
    );
}