import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchText, query }) => {
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
        <div className="w-10/12 h-max mt-12 text-gray-500 text-2xl outline-none border-none">
            <form type="submit" className="w-full" onSubmit={handleSubmit}>
                <input
                    className="w-full text-left py-8 pl-12 font-medium flex justify-center rounded-md shadow-md"
                    type="text"
                    value={pictureTag || query}
                    onChange={handleChange}
                    placeholder="Search free high-resolution photos"
                />
            </form>
        </div>
    );
};

export default SearchBar;
