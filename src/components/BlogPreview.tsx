import React from "react";
import { blogPosts } from "../blog/blog";

export default function BlogPreview() {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                {blogPosts.slice(0, 2).map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#21212a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition w-full h-full"
                    >
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 md:h-60 object-cover"
                        />
                        <div className="flex flex-col p-4 md:p-6 gap-2">
                            <h2 className="text-xl md:text-2xl font-semibold">{post.title}</h2>
                            <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                            <p className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base">{post.description}</p>
                            <div className="flex mt-2">
                                <a href={`/web/blog/${post.id}`}
                                    className={`px-4 py-2 border rounded-md bg-[#F0C417] text-black font-semibold text-sm md:text-base`}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}