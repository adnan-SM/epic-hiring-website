import React from "react";

function DarkModeImage({ isExpanded, imageClicked }) {
    let imgSrc = 'https://svgshare.com/i/Xed.svg';
    if (isExpanded) {
        imgSrc = 'https://svgshare.com/i/Xdm.svg';
    }
    return (
        <div>
            <img src={imgSrc} title='' className="fixed right-0 mt-36 hidden lg:block cursor-pointer" onClick={imageClicked}/>
        </div>
    );
}

export default DarkModeImage;
