import Header from "../components/Header";
import Hero from "../components/Hero";
import Main_Tuto from "../components/Main_Tuto";
import BlogListPage from "@/app/blog/page";
import BlogPage from "@/app/blog";

export default function Home() {
  return (
    <div>
    <Header/>
      <div className="w-full">
      <BlogPage/>
      </div>
    {/*<Hero/>*/}
    {/*<Main_Tuto/>*/}
    </div>
  );
}
