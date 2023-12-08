import React from "react";
import { useState } from "react";


function More(){ 
const [like, setLike]=useState(450),
[isLike, setIsLike]=useState(false),

onLikeButtonClick = () => {
    setIsLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
}
    return(
        <>
            <h1 className="text-center mt-5">This is Like Button</h1>
           
            <center>
                <div className={"" + (isLike ? "text-primary" : "")}>
                    <i style={{ fontSize: "60px" }} className="fa fa-thumbs-up" onClick={onLikeButtonClick}></i>
                    <br />
                    <p className="text-dark">Like {like}</p>
                </div>
            </center>
        </>
    )
}

export default More;