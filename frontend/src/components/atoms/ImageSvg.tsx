import React from "react";

const ImageSvg = () => {
    return (
        <svg
            className="w-full h-auto max-w-md"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M250 500C388.071 500 500 388.071 500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500Z"
                fill="#E2E8F0"
            />
            <path
                d="M150 200H350V300H150V200Z"
                fill="#CBD5E0"
            />
            <path
                d="M150 350H250V400H150V350Z"
                fill="#CBD5E0"
            />
            <path
                d="M300 350H350V400H300V350Z"
                fill="#CBD5E0"
            />
            <path
                d="M150 100H350V150H150V100Z"
                fill="#CBD5E0"
            />
        </svg>
    )
}

export default ImageSvg;
