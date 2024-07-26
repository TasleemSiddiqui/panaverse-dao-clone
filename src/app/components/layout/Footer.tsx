import React from "react";
import Wrapper from "../shared/Wrapper";
import logo from "public/panaverse-logo.webp";
import Image from "next/image";
import { Facebook, Github, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <Wrapper>
      <hr className="w-full text-gray-800 h-1"/>
        <footer className="md:flex  p-5 my-12">
           
          <div className="flex-1">
            <Image src={logo} alt={"panaverse Dao"} height={120} />
            <p className="text-xl text-gray-500">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>

            <div className="flex gap-3 items-center">
              <div className="bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-full p-2 text-white flex justify-center items-center w-10 ">
                <Facebook fill={"white"} size={24} />{" "}
              </div>
              <div className="bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-full p-2 text-white flex justify-center items-center w-10 ">
                <Youtube fill={"white"} size={24} />{" "}
              </div>
              <div className="bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-full p-2 text-white flex justify-center items-center w-10 ">
                <Github fill={"white"} size={24} />{" "}
              </div>
              <div className="bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-full p-2 text-white flex justify-center items-center w-10 ">
                <Twitter fill={"white"} size={24} />{" "}
              </div>
            </div>
          </div>
          <div className="md:flex gap-10 flex-1">
            <div>
              <ul className="text-lg text-gray-500 leading-9">
                <label className="text-xl text-black font-bold">Programs</label>
                <li>Web 3.0 and Metaverse Developer</li>
                <li>Artificial Intelligence</li>
                <li>Cloud-Native Computing</li>
                <li>Ambient Computing and IoT</li>
                <li>Genomics and Bioinformatics</li>
                <li>Network Programmability and Automation</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg text-gray-500 leading-7">
                <label className="text-xl text-black font-bold">Pages</label>
                <li>Home</li>
                <li>Quater 1</li>
                <li>Quater 2</li>
                <li>Quater 3</li>
              </ul>
            </div>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Footer;
