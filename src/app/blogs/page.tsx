import React from "react";
import {blogPosts} from "@/blog/blog";
import BottomPage from "@/components/BottomPage";

export default function BlogListPage() {
    return (
        <div className="bg-[#19191f] text-gray-200 p-6">
            <h1 className="text-4xl font-bold mb-10 text-center">Dev-log</h1>
            <div className="max-w-5xl mx-auto space-y-10">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#21212a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                    >
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="flex flex-col p-6 gap-2">
                            <h2 className="text-2xl font-semibold">{post.title}</h2>
                            <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                            <p className="mt-4 text-gray-300">{post.description}</p>
                            <div className="flex">
                                <a className={`hover:underline px-4 py-2 border rounded-md bg-[#F0C417] text-black font-semibold`} href={`/web/blog/${post.id}`}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BottomPage/>
        </div>
    );
}
