import React from "react";

export default function Images()
{
    const n=9;
    return <div className="gallery">{[...Array(n)].map((e, i) => <span  key={i}><img src="/dog.jpg"/></span>)}</div>
}