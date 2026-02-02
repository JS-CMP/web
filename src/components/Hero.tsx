import V1_Button from "./Buttons/V1_button"
import Hero_button from "./Buttons/Hero_button"
import HeroGraph from './Buttons/HeroGraph'

export default function Hero() {
    return (
        <div className="gap flex min-h-[80vh] justify-center items-center flex-col lg:flex-row px-4 lg:px-0">
            <div className="w-full lg:w-1/2 gap-10 lg:gap-20 flex flex-col mt-10 lg:mt-0">
                <V1_Button/>
                <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[90%]">
                    <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white">
                        JSCMP transpiles your JavaScript code to C++
                    </span>
                    <span className="text-white text-base md:text-lg">
                        With JSCMP, leverage the simple syntax of JavaScript script while benefiting from the speed of C++.
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-7">
                    <Hero_button text="Online transpiller" bgColor="bg-white" textColor="text-black" fontWieght="font-semibold" href="/web/coming-soon"/>
                    <Hero_button text="Download" bgColor="bg-[#F0C417]" textColor="text-black" fontWieght="font-semibold" borderColor="border-b-1 border-b-[#FFFFFF]" href="https://github.com/JS-CMP/JS-CMP/releases/"/>
                </div>
            </div>
            <HeroGraph />
        </div>
    )
}
