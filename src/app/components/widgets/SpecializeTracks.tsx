"use client"
import React, { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import Cards from "@/app/components/shared/Cards";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";

interface IQuater {
  name: string;
  desc: string;
  qNo: number;
}

interface IPrograms {
  name: string;
  description: string;
  slug: string;
  img: any;
  quater: IQuater[];
}

const SpecializeTracks = () => {
  const [data, setData] = useState<IPrograms[]>([]);
  const [selectedData, setSelectedData] = useState<IPrograms | null>(data.find((item:any)=>item.slug.current == "wmd")||null);
console.log(selectedData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "program"] {
          name,
          description,
          slug,
          img,
          "quater": quater[] {
            name,
            desc,
            qNo
          }
        }`);
        setData(result);
        if (!selectedData && result.length > 0) {
          setSelectedData(result[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (slug: string) => {
    const selectedItem = data.find((item) => item.slug === slug);
    setSelectedData(selectedItem || null);
  };

  return (
    <Wrapper>
      <div className="md:flex">
        {/* Left side */}
        <div className="md:flex-1 self-start md:sticky top-16">
          {selectedData && (
            <div>
              <div className="flex flex-col p-10">
                <h4 className="font-semibold text-teal-800 text-sm md:text-lg">
                  Specialization Program
                </h4>
                <h1 className=" text-4xl  font-semibold  whitespace-pre-line ">
                  {selectedData.name}
                </h1>
                <p className="md:text-lg text-xs md:leading-7 text-gray-700 my-3">
                  {selectedData.description}
                </p>
              </div>
              <div className="md:flex gap-4">
                {selectedData.quater.map((item, i) => (
                  <div key={i} className="">
                    <Cards heading={item.name} para={item.desc} No={item.qNo}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Right side */}
        <div className="md:flex-1 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-3 border-b-2 border-gray-200 p-5 cursor-pointer"
              onClick={() => handleItemClick(item.slug)}
            >
              <div className="flex justify-center  items-center md:h-28 md:min-w-60 object-contain bg-black overflow-hidden rounded-md">
                <Image
                  src={urlForImage(item.img)}
                  alt={item.name}
                  width={180}
                  height={150}
                  className="object-contain items-stretch rounded-md"
                />
              </div>
              <div>
                <h4 className="text-teal-700 font-semibold text-sm">
                  Specialize Program
                </h4>
                <h1 className="md:text-xl font-semibold">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </Wrapper>
  );
};

export default SpecializeTracks;
