import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { Switch, Route } from "react-router-dom";
import Content from "./components/Content";
import axios from "axios";

function App() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);

    const getPhotos = (query) => {
        const api = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCES_KEY}&page=1&query=${query}`;
        axios
            .get(api)
            .then((data) => {
                setPhotos(data.data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const getSearch = (searchTerm) => {
        if (searchTerm === "") return;
        const api = `https://api.datamuse.com/sug?s=${searchTerm}`;
        axios(api)
            .then((data) => {
                setOptions(data.data);
            })
            .catch((err) => console.log(err));
    };

    const updatePhotos = (e) => {
        setQuery(e.target.innerText);
    };

    useEffect(() => {
        getPhotos(query);
    }, [query]);

    useEffect(() => {
        getSearch(searchTerm);
    }, [searchTerm]);

    return (
        <div className="w-full">
            <Switch>
                <Route exact={true} path="/">
                    <div className="w-full h-screen bg-image bg-cover bg-no-repeat">
                        <div className="w-11/12 h-full mx-auto pt-2 sm:pt-12 md:pt-2">
                            <div className="w-3/4 flex m-auto flex-col text-left justify-start">
                                <h1 className="text-5xl sm:text-7xl font-bold text-white pb-8">
                                    Unsplash
                                </h1>
                                <p className="text-white font-medium text-2xl">
                                    The internet's source of freely-usable
                                    images.
                                </p>
                                <p className="text-white font-medium text-2xl">
                                    Powered by creators everywhere
                                </p>
                                <SearchBar
                                    search={(term) => setSearchTerm(term)}
                                    setDisplay={setDisplay}
                                    searchText={(text) => setQuery(text)}
                                    query={query}
                                    display={display}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </Route>
                <Route exact={true} path="/pictures/:id">
                    {isLoading ? (
                        <h1 className="text-6xl text-center mx-auto mt-32">
                            Loading...
                        </h1>
                    ) : (
                        <Content
                            search={(term) => setSearchTerm(term)}
                            searchText={(text) => setQuery(text)}
                            photos={photos}
                            query={query}
                            updatePhotos={updatePhotos}
                            display={display}
                            setDisplay={setDisplay}
                            options={options}
                        />
                    )}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
