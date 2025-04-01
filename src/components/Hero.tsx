import V1_Button from "./Buttons/V1_button"
import Hero_button from "./Buttons/Hero_button"
import HeroGraph from './Buttons/HeroGraph'

export default function Hero() {
    return (
        <div className="py-10 px-20 gap flex">
            <div className="w-1/2 gap-10 flex flex-col">
                <V1_Button/>
                <span className="font-extrabold text-6xl text-white">
                    JSCMP transpiles your code JavaScript C++
                </span>
                <span className="text-white">
                    The goal was to keep the speed of interpreted code like java script while benefiting from the speed of compiled languages ​​like c++. We created JS CMP which is an open source project and still under development
                </span>
                <div className="flex gap-7">
                    <Hero_button text="Online transpiller" bgColor="bg-white" textColor="text-black" fontWieght="font-semibold"/>
                    <Hero_button text="Download code" bgColor="bg-[#F0C417]" textColor="text-black" fontWieght="font-semibold" borderColor="border-b-1 border-b-[#FFFFFF]"/>
                </div>
            </div>
            <HeroGraph />
        </div>
    )
}