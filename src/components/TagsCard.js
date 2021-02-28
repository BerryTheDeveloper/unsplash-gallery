import React, { useState } from "react";

const TagsCard = ({ photos, updatePhotos }) => {
    const getSlider = () => {
        const sliderDiv = window.document.querySelector("#slider");
        if (!sliderDiv) return;
        return sliderDiv;
    };

    const getSliderPosition = () => {
        const slider = getSlider();
        if (!slider) return;
        return slider.scrollWidth - slider.offsetWidth;
    };

    const [sliderPosition, setSliderPosition] = useState(getSliderPosition());

    const slideLeft = (e) => {
        const slider = getSlider();
        slider.scrollLeft -= 500;
        setSliderPosition(getSliderPosition() - slider.scrollLeft);
    };
    const slideRight = (e) => {
        const slider = getSlider();
        slider.scrollLeft += 500;
        setSliderPosition(getSliderPosition() - slider.scrollLeft);
    };

    return (
        <div className="w-full relative mb-10 relative z-0">
            <div
                id="slider"
                className="w-10/12 mx-auto flex flex-nowrap overflow-x-scroll hide-scroll-bar">
                {sliderPosition !== getSliderPosition() && (
                    <button
                        className="slide-left absolute top-1/2 left-1 transform -translate-y-1/2 focus:outline-none hidden sm:block"
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
                )}
                {photos.map((photo) =>
                    photo.tags.map((tag) =>
                        tag.tile === "" ? (
                            ""
                        ) : (
                            <button
                                key={tag.title}
                                className="py-3 px-6 bg-white bg-opacity border-2 border-black border-solid flex justify-center items-center text-2xl font-semibold text-gray-700 mr-6 hover:bg-gray-200 hover:bg-opacity-200 cursor-pointer"
                                onClick={(e) => updatePhotos(e)}>
                                {tag.title}
                            </button>
                        )
                    )
                )}
                {sliderPosition !== 0 && (
                    <button
                        className="slide-right absolute top-1/2 right-1 transform -translate-y-1/2 focus:outline-none hidden sm:block"
                        onClick={slideRight}>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default TagsCard;
