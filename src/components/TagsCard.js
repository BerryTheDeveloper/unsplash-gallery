import React from "react";

const TagsCard = ({ photos }) => {
    const slideLeft = (e) => {
        const slider = window.document.querySelector("#slider");
        slider.scrollLeft -= 500;
    };

    return (
        <div className="w-full relative mb-10">
            <div
                id="slider"
                className="w-10/12 mx-auto flex flex-nowrap overflow-x-scroll hide-scroll-bar">
                <button
                    className="absolute top-1/2 left-1 transform -translate-y-1/2"
                    onClick={slideLeft}>
                    <svg
                        className="w-5 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </button>
                {photos.map((photo) =>
                    photo.tags.map((tag) =>
                        tag.tile === "" ? (
                            ""
                        ) : (
                            <span
                                key={tag.title}
                                className="py-3 px-6 bg-white bg-opacity border-2 border-black border-solid flex justify-center items-center text-2xl font-semibold text-gray-700 mr-6 hover:bg-gray-200 hover:bg-opacity-200">
                                {tag.title}
                            </span>
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default TagsCard;
