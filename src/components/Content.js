import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";

const Content = ({ searchText, photos, query }) => {
    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <div className="w-full pt-12 flex jusityfy-center items-center flex-col">
            <SearchBar searchText={searchText} />
            <div className="w-11/12 mt-10 flex justify-center flex-wrap">
                <div className="w-9/12 text-5xl mx-auto py-10 self-start text-black font-bold">
                    {query}
                </div>

                <div className="w-full">
                    <div className="w-9/12 mx-auto flex flex-nowrap mb-10 overflow-x-scroll">
                        {photos.map((photo) =>
                            photo.tags.map((tag) =>
                                tag.tile === "" ? (
                                    ""
                                ) : (
                                    <span
                                        key={tag.title}
                                        className=" w-max py-3 px-6 inline-block bg-gray-200 text-2xl font-semibold text-gray-700 mr-6">
                                        {tag.title}
                                    </span>
                                )
                            )
                        )}
                    </div>
                </div>
                {photos.map((photo) => {
                    return (
                        <ImageCard
                            key={photo.id}
                            imageSmall={photo.urls.small}
                            alt={photo.alt_description}
                            imageTags={photo.tags}
                            handleClick={handleClick}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Content;
