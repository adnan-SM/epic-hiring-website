import React from "react";

function BlobImage() {
    const imgSrc = 'https://svgshare.com/i/Xh9.svg';
    return (
        <div>
            <img src={imgSrc} title='' className="absolute left-0 -mt-64 hidden lg:block"/>
        </div>
    );
}

export default BlobImage;
