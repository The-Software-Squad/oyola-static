import { HomeModernIcon } from "@heroicons/react/24/outline";
import CallBackForm from "./calllback-form";
import Section from "./section";
import { stays } from "@/data/stays";
import HowItWorks from "./how-it-works";

export default function ServiceHero({ title, subtitle, button_text, background_image }: { title: string, subtitle: string, button_text: string, background_image: string }) {
    return (
        <div
            className={`relative h-[50vh] lg:h-[75vh] bg-cover bg-local bg-origin-border bg-center rounded-2xl`}
            style={{ backgroundImage: `url('${background_image}')` }}
        >
            <div className="header-gradient h-full w-full absolute z-1 top-0 left-0 "></div>
            <div className=" pt-28 px-10 lg:px-32 absolute top-0 z-30 h-full w-full flex flex-col items-center gap-6 justify-start">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 font-dm_sans text-center">
                    {title}
                </h1>
                <p className=" text-md text-gray-900 lg:text-xl text-center font-poppins">
                    {subtitle}
                </p>
                <button className="button-primary"> {button_text} </button>
            </div>
            <div className=" w-full flex justify-center items-center px-2">
                <div className="w-full  flex items-center justify-center lg:w-max">
                    {/* <SearchComponent /> */}
                    <a href="#callbackform">
                    </a>
                </div>
            </div>
        </div>
    )
}
