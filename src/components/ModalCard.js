import React from "react";

const ModalCard = ({ setOpenModal, photo, nextPhoto }) => {
    return (
        <div className="w-full h-screen absolute inset-0 bg-black bg-opacity-50">
            <button
                id="close"
                className="w-max h-max absolute top-1 left-1 ml-6 mt-6 outline-none border-0"
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
            <div className="w-10/12 h-5/6 flex flex-col bg-white mt-20 mx-auto shadow-2xl rounded-md">
                <div className="w-11/12 flex mx-auto justify-between items-center">
                    <div className="flex pt-2">
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
                                className="text-gray-500">
                                @{photo.user.username}
                            </a>
                        </div>
                    </div>
                    <div className="flex pr-2">
                        <a className="block px-2 py-2 mr-2 border-2 border-solid border-gray-300 rounded-xl">
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
                        </a>
                        <a
                            href={photo.links.download}
                            className="block px-2 py-2 border-2 border-solid border-gray-300 rounded-xl">
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
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:md:max-w-lg xl:md:max-w-xl 2xl:max-w-3xl m-auto">
                    <img
                        className="w-max"
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                    />
                </div>
                <div className="w-11/12 mx-auto mt-auto mb-10 flex justify-between items-center">
                    <div className="flex justify-end">
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
                        <button className="px-2 py-2 border-2 border-solid border-gray-500 rounded-xl flex justify-end text-gray-500 font-bold text-md mr-2">
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
                        <button className="px-2 py-2 border-2 border-solid border-gray-500 rounded-xl flex justify-end text-gray-500 font-bold text-md">
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
                        </button>
                    </div>
                </div>
            </div>
            <button
                id="previousPictureArrow"
                className="w-max h-max absolute top-1/2 transform -transition-y-1/2 left-1 ml-2 outline-none border-0">
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
            <button
                id="nextPictureArrow"
                className="w-max h-max absolute top-1/2 transform -transition-y-1/2 right-1 mr-2 outline-none border-0"
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
        </div>
    );
};

export default ModalCard;
