import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NewsElement(props) {
    console.log("props", props)
    const link = props.data.url
    const title = props.data.title;
    const description = props.data.description;
    const imageUrl = props.data.image_url;
    return (
        <div className='newsbox'>
            <h4 style={{ maxWidth: '322px' }}>
                <Link href={link}>{`${title}`}</Link>
            </h4>
            <img className="picture" src={`${imageUrl}`} />
            <div className="description"> {`${description}`}</div>
        </div>
    )
}