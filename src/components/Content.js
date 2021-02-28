import { useState } from "react";
import ImageCard from "./ImageCard";
import ModalCard from "./ModalCard";
import SearchBar from "./SearchBar";
import TagsCard from "./TagsCard";

const Content = ({
    display,
    setDisplay,
    search,
    options,
    searchText,
    photos,
    query,
    updatePhotos,
}) => {
    const getScrollPosition = () =>
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

    const [photo, setPhoto] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(getScrollPosition());
    const [hideRightArrow, sethideRightArrow] = useState(false);
    const [hideLeftArrow, sethideLeftArrow] = useState(false);

    const changeVisibilityArrows = (index) => {
        index === photos.length - 1
            ? sethideRightArrow(true)
            : sethideRightArrow(false);
        index === 0 ? sethideLeftArrow(true) : sethideLeftArrow(false);
    };

    const handleClick = (e) => {
        setScrollPosition(getScrollPosition());
        photos.forEach((photo, index) => {
            const dataKey = e.target.attributes["data-key"].value;
            if (dataKey === photo.id) {
                setPhoto(photo);
                changeVisibilityArrows(index);
                setOpenModal(true);
            }
        });
    };

    const nextPhoto = () => {
        photos.forEach((eachPhoto, index) => {
            if (eachPhoto.id === photo.id) {
                if (index === photos.length - 1) {
                    sethideLeftArrow(false);
                } else if (index === photos.length - 2) {
                    setPhoto(photos[index + 1]);
                    sethideRightArrow(true);
                } else {
                    setPhoto(photos[index + 1]);
                    sethideLeftArrow(false);
                    sethideRightArrow(false);
                }
            }
        });
    };
    const previousPhoto = () => {
        photos.forEach((eachPhoto, index) => {
            if (eachPhoto.id === photo.id) {
                if (index === 0) {
                    sethideRightArrow(false);
                } else if (index === 1) {
                    sethideLeftArrow(true);
                    setPhoto(photos[index - 1]);
                } else {
                    setPhoto(photos[index - 1]);
                    sethideLeftArrow(false);
                    sethideRightArrow(false);
                }
            }
        });
    };

    return (
        <div className="w-full pt-12 flex jusityfy-center items-center flex-col relative">
            {photos.length !== 0 && (
                <>
                    <div className="w-3/4 flex justify-center items-center">
                        <SearchBar
                            search={(term) => search(term)}
                            searchText={(text) => searchText(text)}
                            query={query}
                            display={display}
                            options={options}
                            setDisplay={setDisplay}
                        />
                    </div>
                    <div className="w-11/12 mt-10 flex justify-center flex-wrap">
                        <div className="w-9/12 text-5xl mx-auto py-10 self-start text-black font-bold capitalize ">
                            {query}
                        </div>
                        <TagsCard photos={photos} updatePhotos={updatePhotos} />
                        {photos.map((photo) => {
                            return (
                                <ImageCard
                                    key={photo.id}
                                    id={photo.id}
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
                            previousPhoto={previousPhoto}
                            nextPhoto={nextPhoto}
                            hideRightArrow={hideRightArrow}
                            hideLeftArrow={hideLeftArrow}
                            scrollPosition={scrollPosition}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Content;
