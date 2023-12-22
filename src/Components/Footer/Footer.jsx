import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <div>

      <footer className="footer footer-center p-10 bg-[#a6a6a6]  rounded text-[#000]">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <img className=" w-12" src="https://i.ibb.co/nzzvDKv/download-removebg-preview-2.png" alt="" />
          </div>
        </nav>
        
        <div className="grid grid-flow-col gap-4">
          <Link to='https://www.facebook.com/nazmulhossen539' target="_blanck" className="text-xl md:text-2xl text-[#e54040]"><BsFacebook /></Link>
          <Link to='https://www.instagram.com/nazmulhossen01/' target="_blanck" className="text-xl md:text-2xl text-[#e54040]"><BsInstagram /></Link>
          <Link to='https://github.com/nazmulhossen1' target="_blanck" className="text-xl md:text-2xl text-[#e54040]"><BsGithub /></Link>
          <Link to='https://www.linkedin.com/in/nazmul-hossen-1587b021a/' target="_blanck" className="text-xl md:text-2xl text-[#e54040]"><BsLinkedin /></Link>

        </div>

        <aside>
          <p>Copyright © 2023 - All right reserved by MD Nazmul Hossen</p>
        </aside>
      </footer>


    </div>
  );
};

export default Footer;