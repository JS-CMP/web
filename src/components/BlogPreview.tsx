import React from "react";

export const blogPosts = [
    {
        id: 1,
        title: "How to Learn React in 2025",
        date: "April 28, 2025",
        description:
            "A modern guide to learning React efficiently, with tips and best practices for beginners and experienced developers.",
        imageUrl: "https://i.imgur.com/OG4U9MM.jpeg",
        markdown: "/blog-posts/beta-test-plan.md",
    },
    {
        id: 2,
        title: "Understanding JavaScript Closures",
        date: "April 20, 2025",
        description:
            "Closures can be tricky! This article explains them in a simple, practical way with real-world examples.",
        imageUrl: "https://i.imgur.com/42AnNaV.jpeg",
        markdown: "/blog-posts/beta-test-plan.md",
    },
    {
        id: 3,
        title: "10 CSS Tricks You Need to Know",
        date: "April 10, 2025",
        description:
            "Boost your front-end skills with these essential CSS techniques that every developer should master.",
        imageUrl: "https://i.imgur.com/OtWeocI.jpeg",
        markdown: "/blog-posts/beta-test-plan.md",
    },
];

export default function BlogPreview() {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-10">
                {blogPosts.slice(0, 2).map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#21212a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition w-full h-full"
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
                                <button
                                    className={`px-4 py-2 border rounded-md bg-[#F0C417] text-black font-semibold`}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}