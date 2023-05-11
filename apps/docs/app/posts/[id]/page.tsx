import React from "react";

export async function generateStaticParams() {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`).then((res) =>
        res.json(),
    );
    return posts.map((post: any) => ({
        id: post.id.toString(),
    }));
}

async function getData(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function Post({ params }: { params: { id: number } }) {
    const data = await getData(params.id);

    return (
        <div className="container mx-auto py-20 grid grid-cols-5 gap-5">
            <div className="p-5 border border-green-600">
                <p>user id: {data?.userId}</p>
                <span>id:{data?.id}</span>
                <h1 className="text-black">{data?.title}</h1>
                <p className="text-black py-5">{data?.body}</p>
            </div>
        </div>
    );
}
