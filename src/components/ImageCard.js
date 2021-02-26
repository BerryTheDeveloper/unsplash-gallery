const ImageCard = ({ imageSmall, imageTags, handleClick, alt }) => {
    return (
        <div className="bg-white max-w-sm m-3 rounded shadow-lg">
            <img
                src={imageSmall}
                alt={alt}
                className="w-full cursor-pointer"
                onClick={handleClick}
            />
            <div className="px-6 py-4">
                {imageTags.map((tag) => (
                    <span
                        key={tag.title}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
