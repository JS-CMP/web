import BottomPage from "@/components/BottomPage";
import NewsLetter from "@/components/NewsLetter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main_Tuto from "../components/Main_Tuto";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className={`mb-[80px] w-[60%] border-b border-b-[#4F4D4D] mx-[20%]`}></div>
            <Main_Tuto/>
            <div className={`my-[80px] w-[60%] border-b border-b-[#4F4D4D] mx-[20%]`}></div>
            <NewsLetter/>
            <BottomPage/>
        </div>
    );
}
