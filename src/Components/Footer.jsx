import React from "react";
import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal  bg-base-200 text-base-content p-10 ">
      <aside>
        <img className="w-15" src={Logo} alt="" />
        <h1 className="text-2xl font-bold">Recipe <span className="text-primary">Book</span></h1>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p>Development By <a className="font-medium hover:underline" href="">Shakil Ahamed</a></p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <a className="">Email: shakil200607@gmail.com</a>
        <a className="">Phone: +8801772144965</a>
        <a className="">WhatsApp: +880134614946</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex gap-5">
            <p><FaFacebook size={25}/></p>
            <p><FaTwitter size={25}/></p>
            <p><FaInstagram size={25}/></p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
