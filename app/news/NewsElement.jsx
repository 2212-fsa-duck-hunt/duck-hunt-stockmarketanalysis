import React from "react";
import { useEffect, useState } from "react";

export default function NewsElement(props) {
    console.log("what are props!!!!!", props);
    const title = props.data.title;
    const description = props.data.description;
    const imageUrl = props.data.image_url;
    return (
        <div className='newsbox'>
            <h4> {`${title}`} </h4>
            <img className="picture" src={`${imageUrl}`} />
            <div className="description"> {`${description}`}</div>
        </div>
    )
}