import React from "react";

const ModalCard = ({
    setOpenModal,
    photo,
    previousPhoto,
    nextPhoto,
    hideRightArrow,
    hideLeftArrow,
    scrollPosition,
}) => {
    const handleCopyToClipboard = () => {
        const buttonValue = document.querySelector(".share");
        const inputForCopy = document.body.appendChild(
            document.createElement("input")
        );
        inputForCopy.value = buttonValue.value;
        inputForCopy.select();
        document.execCommand("copy");
        document.body.removeChild(inputForCopy);
        alert("URL Copied.");
    };

    const handleBackgroundLikeChange = () => {
        const buttonLike = document.querySelector(".like");
        buttonLike.classList.toggle("bg-red-500");
    };

    return (
        <div
            className="w-full h-screen absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            style={{ top: scrollPosition }}>
            <button
                id="close"
                className="w-max h-max absolute top-1 left-1 ml-6 mt-6 outline-none border-0 focus:outline-none"
                onClick={() => setOpenModal(false)}>
                <svg
                    className="w-10 h-10 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="w-10/12 max-w-xs sm:max-w-sm flex flex-col bg-white shadow-2xl rounded-md">
                <div className="w-11/12 flex flex-col sm:flex-row mx-auto justify-between items-center">
                    <div className="flex pt-2 sm:pt-4">
                        <img
                            className="rounded-full w-12 h-12"
                            src={photo.user.profile_image.small}
                            alt={photo.user.name}
                        />
                        <div className="pl-4">
                            <p className="text-black font-medium">
                                {photo.user.name}
                            </p>
                            <a
                                target="_blank"
                                href={`https://unsplash.com/@${photo.user.username}`}
                                className="text-gray-500 hover:text-gray-800">
                                @{photo.user.username}
                            </a>
                        </div>
                    </div>
                    <div className="flex pt-2 sm:pt-0 pr-2">
                        <button
                            className="like block px-2 py-2 mr-2 mt-2 border-2 border-solid border-gray-200 rounded-xl hover:border-gray-500 focus:outline-none"
                            onClick={() => handleBackgroundLikeChange()}>
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
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                        <a
                            href={photo.links.download}
                            className="block px-2 py-2 mr-2 mt-2 sm:mt-2 sm:mr-0 border-2 border-solid border-gray-200 rounded-xl hover:border-gray-500 focus:outline-none"
                            target="_blank">
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-auto pt-2">
                    <img
                        className="w-max"
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                    />
                </div>
                <div className="w-11/12 mx-auto py-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex pb-2 sm:pb-0 justify-end">
                        {photo.user.location !== null && (
                            <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        )}

                        <p className="text-black font-medium pl-1">
                            {photo.user.location}
                        </p>
                    </div>
                    <div className="flex">
                        <button
                            className="share px-2 py-2 border-2 border-solid border-gray-300 rounded-xl flex justify-end text-gray-500 font-bold text-md mr-2 hover:border-gray-500 focus:outline-none"
                            value={`https://unsplash.com/photos/${photo.id}`}
                            onClick={() => handleCopyToClipboard()}>
                            <svg
                                className="w-5 h-5 mr-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                            </svg>
                            Share
                        </button>
                        <a
                            href={`https://unsplash.com/photos/${photo.id}/info`}
                            target="_blank"
                            className="px-2 py-2 border-2 border-solid border-gray-300 rounded-xl flex justify-end text-gray-500 font-bold text-md hover:border-gray-500">
                            <svg
                                className="w-6 h-6 mr-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Info
                        </a>
                    </div>
                </div>
            </div>
            {!hideLeftArrow && (
                <button
                    id="previousPictureArrow"
                    className="w-max h-max absolute top-1/2 transform -transition-y-1/2 -left-1 sm:left-1 ml-2 focus:outline-none"
                    onClick={previousPhoto}>
                    <svg
                        className="w-10 h-10 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            )}
            {!hideRightArrow && (
                <button
                    id="nextPictureArrow"
                    className="w-max h-max absolute top-1/2 transform -transition-y-1/2 -right-1 sm:right-1 mr-2 focus:outline-none"
                    onClick={nextPhoto}>
                    <svg
                        className="w-10 h-10 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ModalCard;
