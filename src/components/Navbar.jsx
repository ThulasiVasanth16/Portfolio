import logo from "../assets/logo.png";
import { CONTACT } from "../constants";
import React from "react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex  flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center  justify-center  gap-4 text-2xl">
      
      <a 
          href="mailto:thulasivasanth01@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Thulasi,"
          target="_blank"
          rel="noopener noreferrer"
       aria-label="Email"
        >
          <IoMdMail  />
        </a>
        <a
          href="https://www.linkedin.com/in/thulasivasanth/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
       
        <a
          href="https://github.com/ThulasiVasanth16"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub  />
        </a>
        <a
          href="https://gitlab.com/ThulasiVasanth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab"
        >
          <FaGitlab  />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
