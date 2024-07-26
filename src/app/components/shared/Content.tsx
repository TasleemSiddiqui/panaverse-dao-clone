import React, { FC } from "react";
import Button from "./Button";

const Content: FC<{
  heading: string;
  subHeading: string;
  para: string;
  btnText: string;
}> = ({ heading, subHeading, para, btnText }) => {
  return (
    <div className="flex flex-col ">
      <h4 className="font-semibold text-teal-800 text-sm md:text-lg">
        {subHeading}
       
      </h4>
      <h1 className=" text-4xl  font-semibold  whitespace-pre-line ">{heading}</h1>
      <p className="md:text-lg text-xs md:leading-7 text-gray-700 my-3">
        {para}
      </p>
      <Button text={btnText} />
    </div>
  );
};

export default Content;
