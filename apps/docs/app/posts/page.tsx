import React from "react";
import Link from "next/link";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

export default async function Posts() {
    const data = await getData();
    // console.log("data", data)
    return (
        <div className="container mx-auto py-20 grid grid-cols-5 gap-5">
            {data?.map((item: any, index: number) => (
                <div key={index} className="p-5 border border-green-600">
                    <h1 className="text-black">{item?.title}</h1>
                    <p className="text-black py-5">{item?.body}</p>
                    <Link href={`/posts/${item?.id}`} className="text-black border rounded-lg px-2">Details</Link>
                </div>
            ))}
        </div>
    );
}
