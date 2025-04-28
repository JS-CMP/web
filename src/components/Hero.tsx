import V1_Button from "./Buttons/V1_button"
import Hero_button from "./Buttons/Hero_button"
import HeroGraph from './Buttons/HeroGraph'

export default function Hero() {
    return (
        <div className="gap flex min-h-[80vh] justify-center items-center">
            <div className="w-1/2 gap-20 flex flex-col">
                <V1_Button/>
                <div className="flex flex-col gap-10 w-[90%]">
                    <span className="font-extrabold text-6xl text-white">
                        JSCMP transpiles your JavaScript code to C++
                    </span>
                    <span className="text-white">
                        With JSCMP, leverage the simple syntax of JavaScript script while benefiting from the speed of C++.
                    </span>
                </div>
                <div className="flex gap-7">
                    <Hero_button text="Online transpiller" bgColor="bg-white" textColor="text-black" fontWieght="font-semibold" href="/coming-soon"/>
                    <Hero_button text="Download code" bgColor="bg-[#F0C417]" textColor="text-black" fontWieght="font-semibold" borderColor="border-b-1 border-b-[#FFFFFF]" href="https://github.com/JS-CMP/web/archive/refs/heads/main.zip"/>
                </div>
            </div>
            <HeroGraph />
        </div>
    )
}