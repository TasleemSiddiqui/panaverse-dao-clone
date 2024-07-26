import React from "react";
import Wrapper from "../shared/Wrapper";
import heroPoster from "@/app/asset/images/hero-poster.webp";
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="flex-1  ">
            <h4 className="font-semibold text-teal-800 text-sm md:text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
              <hr className="w-full"/>
            </h4>
            <h1 className="md:text-6xl text-4xl font-semibold">Certified Web 3.0 and
            <br/> Metaverse Developer</h1>
            <p className="md:text-lg text-xs md:leading-7 text-gray-700 my-3">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              <br />
              <br/>
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <Button text="Learn more"/>
          </div>
          <div className="flex-1">
            <Image src={heroPoster} alt="Generative ai "/>
            
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
