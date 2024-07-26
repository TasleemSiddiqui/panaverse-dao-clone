import React from "react";
import Wrapper from "../shared/Wrapper";
import Content from "../shared/Content";
import Cards from "../shared/Cards";

const CoreTracks = () => {
  return (
    <section>
      <Wrapper>
        <div className="max-w-screen-sm">
          <Content
            heading="Core Courses  (Common in All Specializations)"
            subHeading="Program of Studies"
            para="Every participant of the program will start by completing the following three core courses."
            btnText="Enroll Now"
          />
        </div>
        <div className="md:grid grid-cols-3">
          <Cards
            heading="Quarter I"
            para="CS-101: Object-Oriented Programming using TypeScript"
            No={1}
          />
          <Cards
            heading="Quarter II"
            para="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform 2"
            No={2}
          />
          <Cards
            heading="Quarter III"
            para="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            No={3}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
