import Image from "next/image";
import { ThreeDBoxesBackground } from "./components/3d-boxes-background";
import { AnimatedCountdown } from "./components/animatedcountdown";

import { Loader } from "./box/page";
import { PasswordGenerator } from "./components/passwordgenerator";
import { ImageCarousel } from "./components/imagecoruel";
import { Expandingcards } from "./components/expandingcards";
import { AnimatedNavigation } from "./components/animatedNavigation";
import { ContentPlaceholder } from "./components/contentplaceholder";
import { Insectgame } from "./components/insectgame";
import { RippleButton } from "./components/buttonrippleeffect";
import { RangeSlider } from "./components/customslider";
import { DragList } from "./components/draganddrop";
import KanbanBoard from "./components/kanbansystem";
import LoginForm, { WaveField } from "./components/formwave";
import WaterApp from "./components/drinkwater";
import HoverCard from "./components/Hover";
import GitHubprofile from "../githubprofile/pages";
import ToastNotification from "@/toastnotification/pages";
import SplitLanding from "./components/spiltlandingpage";
import DrawingApp from "./components/drawing";
import FeedbackCard from "./components/feedbackui";
import FAQ from "./components/faqcollapse";
import MobileNav from "./components/mobilenavigation";
import Navbar from "./components/mobilenavigation";



export default function Home() {
  return (
    <>
    {/* <div className=" bg-slate-900 inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-5 gap-20 justify-center items-center">
        {[...Array(10)].map((_,i) => (
            <>
                <ThreeDBoxesBackground key={i}  />
               
            </>
        ))}
      </div>
    </div> */}

    {/* animated countdown timer */}
    {/* <AnimatedCountdown targetDate="2026-12-31T23:59:59" /> */}

    {/* blurry loader */}
    {/* <Loader /> */}

    {/* password generator */}
    {/* <PasswordGenerator /> */}

    {/* image-carousel */}
    {/* <ImageCarousel /> */}

    {/* <Expandingcards /> */}

    {/* <AnimatedNavigation /> */}

    {/* <ContentPlaceholder /> */}

    {/* <Insectgame /> */}
   {/* <RippleButton className=" flex align-center justify-center   bg-green-600 px-6 py-3 rounded-xl text-white">
  Click Me
</RippleButton> */}

{/* <RangeSlider min={0} max={100} /> */}

{/* <DragList /> */}

{/* <KanbanBoard /> */}\


{/* <LoginForm /> */}
{/* <WaterApp /> */}

{/* <HoverCard /> */}

{/* <Loader /> */}

{/* <GitHubprofile /> */}

{/* <ToastNotification /> */}
{/* <SplitLanding /> */}

{/* <DrawingApp /> */}

{/* <FeedbackCard /> */}

{/* <FAQ /> */}

{/* <MobileNav /> */}  
<Navbar />



    </>
  )
}
