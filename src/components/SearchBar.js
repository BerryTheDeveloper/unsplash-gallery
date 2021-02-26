import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchText }) => {
    const [pictureTag, setPictureTag] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pictureTag === "") return;
        searchText(pictureTag);
        history.push(`/pictures/${pictureTag}`);
    };

    const handleChange = (e) => {
        setPictureTag(e.target.value);
    };

    return (
        <div className="w-full h-max mt-12 text-gray-500 text-2xl outline-none border-none">
            <form type="submit" onSubmit={handleSubmit}>
                <input
                    className="w-2/4 text-left py-8 pl-12 font-medium flex justify-center rounded-md shadow-md mx-auto"
                    type="text"
                    value={pictureTag}
                    onChange={handleChange}
                    placeholder="Search free high-resolution photos"
                />
            </form>
        </div>
    );
};

export default SearchBar;
