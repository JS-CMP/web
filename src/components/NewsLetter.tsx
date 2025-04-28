import BlogPreview from "./BlogPreview";

export default function NewsLetter() {
    return (
        <div className="w-full">
            <div className="mb-10 flex gap-4">
                <h1 className="text-4xl font-bold">Behind the Code...</h1>
            </div>
            <p className="pb-6">Want to learn more about the inner workings of JS-CMP? 
                Our blog covers key concepts, design decisions, and development updates.</p>
            <BlogPreview />
        </div>
    );
}