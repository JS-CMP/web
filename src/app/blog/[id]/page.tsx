import React from "react";
import Hero_button from "@/components/Buttons/Hero_button";
import { blogPosts } from "@/blog/blog";
import MarkdownRenderer from "@/components/MarkdownRender/MardownRender";
import { readFile } from "fs/promises";
import BottomPage from "@/components/BottomPage";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ id: post.id.toString() }));
}


export default async function BlogPage({ params }: any) {
    const post = blogPosts.find((p) => p.id.toString() === params.id);

    if (!post) {
        return <div className="text-white">Post not found</div>;
    }

    const content = await readFile("public" + post.markdown, "utf-8");

    return (
        <div className="bg-[#19191f] text-gray-200 p-6">
            <div className="max-w-4xl mx-auto">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-72 object-cover rounded-2xl mb-8"
                />
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-400 mb-10">{post.date}</p>

                <div className="prose prose-invert max-w-none">
                    <MarkdownRenderer content={content} />
                </div>

                <div className="mt-10">
                    <Hero_button href="/web/blogs" text="Back to Blog List" bgColor="bg-[#F0C417]" textColor="text-black"  />
                </div>
            </div>
            <BottomPage/>
        </div>
    );
}
