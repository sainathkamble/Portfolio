 import './global.css';

export default function Footer(){
  
    return(
        <footer className = "h-[10vh] w-screen z-10 relative bg-transparent flex justify-center items-center">
           <p className = "h-auto w-auto text-white font-light text-xl hover:text-sky-600">
             Created and maintained by Sainath Kamble
           </p>
        </footer>
    );
}