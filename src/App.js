import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import About from './component/About';
import {BsMouse,BsArrowDownCircleFill} from "react-icons/bs"
import Skill from './component/Skill';
import Quallifications from './component/Quallifications';
import Projects from './component/Projects';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
function App() {
  return (
    <div className="">
       <div className=' font-sans'>
            {/*navbar*/}
            <NavBar/>
          
            {/*hero section*/}
            <Hero/>
              {/*scroll down*/}
              <a className='ml-[26%] mt-[8%] lg:flex items-center gap-2  ' href='#about'>
                  <BsMouse className='text-xl text-[#6e57e0] font-semibold'/>
                  <p className='font-semibold'>Scroll Down</p>
                  <BsArrowDownCircleFill className='text-[#6e57e0]'/>
              </a>

            {/*about section*/}
            <About/>

            {/*skill*/}
            <Skill/>

            {/*qualification*/}
            <Quallifications/>

            {/*projects*/}
            <Projects/>

            {/*Contact us*/}
            <ContactUs/>

            {/*footer*/}
            <Footer/>
       </div>
    </div>
  );
}

export default App;
