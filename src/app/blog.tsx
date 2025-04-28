"use client";

import React, {useEffect} from "react";
import Hero_button from "@/components/Buttons/Hero_button";
import { blogPosts } from "@/blog/blog";
import MarkdownRenderer from "@/components/MarkdownRender/MardownRender";

//{ id }: { id: string }
export default function BlogPage() {
    const id = "1"; // Replace with dynamic ID from URL or props
    const [post, setPost] = React.useState(blogPosts.find((post) => post.id === parseInt(id)));
    const [content, setContent] = React.useState("");

    if (!post) {
        return (
            <div className="bg-[#19191f] text-gray-200 flex items-center justify-center">
                <h1 className="text-3xl">Blog post not found.</h1>
            </div>
        );
    }

    useEffect(() => {
        fetch(post.markdown).then((res) => {
            if (res.ok) {
                res.text().then((text) => {
                    setContent(text);
                });
            } else {
                setPost(undefined);
            }
        })
    }, []);

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
                    <Hero_button href="/blog" text="Back to Blog List" />
                </div>
            </div>
        </div>
    );
}
