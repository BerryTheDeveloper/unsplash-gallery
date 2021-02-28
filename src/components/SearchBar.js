import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({
    setDisplay,
    options,
    display,
    search,
    searchText,
    query,
}) => {
    const [pictureTag, setPictureTag] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pictureTag === "") return;
        searchText(pictureTag);
        setDisplay(false);
        history.push(`/pictures/${pictureTag}`);
    };

    const handleChange = (e) => {
        let term = e.target.value;
        setPictureTag(term);
        if (term.split("").length > 2) {
            search(term);
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    };

    const handleQuery = (q) => {
        searchText(q);
        history.push(`/pictures/${q}`);
        setDisplay(false);
    };

    useEffect(() => {
        setPictureTag(query);
    }, [query]);

    return (
        <div className="w-10/12 h-max mt-12 text-gray-500 text-2xl outline-none border-none">
            <form
                type="submit"
                className="w-full relative"
                onSubmit={handleSubmit}>
                <input
                    className="w-full text-left py-8 pl-12 font-medium flex justify-center rounded-xl border-b-2 border-gray-500 shadow-md focus:outline-none"
                    type="text"
                    value={pictureTag}
                    onChange={handleChange}
                    placeholder="Search free high-resolution photos"
                />
                {display && (
                    <div className="absolute w-full flex flex-col bg-white text-left font-medium flex justify-center shadow-md rounded-md z-10">
                        {options.length !== 0 ? (
                            options.map((option) => (
                                <div
                                    key={option.priority}
                                    className="w-full py-8 pl-12 cursor-pointer hover:bg-gray-100 "
                                    onClick={() => handleQuery(option.query)}>
                                    {option.query}
                                </div>
                            ))
                        ) : (
                            <div className="w-full py-8 pl-12 cursor-pointer hover:bg-gray-100 ">
                                No options available....
                            </div>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
};

export default SearchBar;
