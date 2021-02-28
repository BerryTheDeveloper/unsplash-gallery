const ImageCard = ({ id, imageSmall, imageTags, handleClick, alt }) => {
    return (
        <div className="image bg-transparent max-w-sm m-3">
            <img
                data-key={id}
                src={imageSmall}
                alt={alt}
                className="w-full cursor-pointer"
                onClick={handleClick}
            />
            <div className=" py-4">
                {imageTags.map((tag) => (
                    <span
                        key={tag.title}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                        #{tag.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
