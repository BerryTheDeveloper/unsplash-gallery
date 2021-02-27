import { useState } from "react";
import ImageCard from "./ImageCard";
import ModalCard from "./ModalCard";
import SearchBar from "./SearchBar";
import TagsCard from "./TagsCard";

const Content = ({ searchText, photos, query, updatePhotos }) => {
    const getScrollPosition = () =>
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

    const [photo, setPhoto] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

    const handleClick = (e) => {
        setScrollPosition(getScrollPosition());
        photos.filter((photo) => {
            if (e.target.alt === photo.alt_description) {
                const previousSibling = e.target.parentElement.previousSibling;
                const nextSibling = e.target.parentElement.nextSibling;
                // if (
                //     previousSibling !== null &&
                //     previousSibling.className.includes("image")
                // )
                //     console.log(previousSibling);
                // if (
                //     nextSibling !== null &&
                //     nextSibling.className.includes("image")
                // )
                //     console.log(nextSibling);

                setPhoto(photo);
                setOpenModal(true);
            }
        });
    };

    const nextPhoto = () => {};

    return (
        <div className="w-full pt-12 flex jusityfy-center items-center flex-col relative">
            {photos.length !== 0 && (
                <>
                    <div className="w-3/4 flex justify-center items-center">
                        <SearchBar
                            searchText={(text) => searchText(text)}
                            query={query}
                        />
                    </div>
                    <div className="w-11/12 mt-10 flex justify-center flex-wrap">
                        <div className="w-9/12 text-5xl mx-auto py-10 self-start text-black font-bold capitalize ">
                            {query}
                        </div>
                        <TagsCard photos={photos} updatePhotos={updatePhotos} />
                        ;
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
                    {openModal && (
                        <ModalCard
                            photo={photo}
                            setOpenModal={setOpenModal}
                            nextPhoto={nextPhoto}
                            scrollPosition={scrollPosition}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Content;
