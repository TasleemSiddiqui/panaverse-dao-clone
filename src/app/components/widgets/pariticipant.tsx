import React from "react";
import Wrapper from "../shared/Wrapper";
import poster from "@/../../public/outcome-poster.webp";
import Image from "next/image";
import Icon from "@/app/asset/images/panaverse-icon.png";

import { Check } from "lucide-react";
const Pariticipant = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex">
          <div className="flex-1">
            <Image src={poster} alt={"outcome"} />
          </div>
          <div className="flex-1 relative">
            <h1 className="md:text-5xl font-extrabold ">
              The Outcome for Participants of the Program
            </h1>
            <p className="text-xl my-5 leading-8 text-gray-500">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex  items-center gap-4">
                <Image src={Icon} alt="icon" />{" "}
                <h4 className="text-xl font-medium">Product Ownership</h4>{" "}
              </div>
              <div className="flex  items-center gap-4">
                <Image src={Icon} alt="icon" />{" "}
                <h4 className="text-xl font-medium">Freelacing</h4>{" "}
              </div>
              <div className="flex  items-center gap-4">
                <Image src={Icon} alt="icon" />{" "}
                <h4 className="text-xl font-medium">Global Marketing by Panaverse DAO</h4>{" "}
              </div>
              <div className="flex  items-center gap-4">
                <Image src={Icon} alt="icon" />{" "}
                <h4 className="text-xl font-medium">Boosting Economy.</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Pariticipant;
