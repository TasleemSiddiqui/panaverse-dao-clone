import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/widgets/Hero";
import CoreTracks from "@/app/components/widgets/CoreTracks";
import SpecializeTracks from "./components/widgets/SpecializeTracks";
import Pariticipant from "./components/widgets/pariticipant";

export default function Home() {
  return (
  <main >
    <Hero/>
   <CoreTracks/>
   <SpecializeTracks/>
   <Pariticipant/>
  </main>
  );
}
