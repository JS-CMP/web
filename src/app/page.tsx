import BottomPage from "@/components/BottomPage";
import NewsLetter from "@/components/NewsLetter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main_Tuto from "../components/Main_Tuto";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className={`mb-12 md:mb-16 lg:mb-[80px] w-[80%] md:w-[70%] lg:w-[60%] border-b border-b-[#4F4D4D] mx-auto`}></div>
            <Main_Tuto/>
            <div className={`my-12 md:my-16 lg:my-[80px] w-[80%] md:w-[70%] lg:w-[60%] border-b border-b-[#4F4D4D] mx-auto`}></div>
            <NewsLetter/>
            <BottomPage/>
        </div>
    );
}
