import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { Switch, Route } from "react-router-dom";
import Content from "./components/Content";

function App() {
    const [photos, setPhotos] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    const getPhotos = (query) => {
        const api = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCES_KEY}&page=1&query=${query}&orientation=squarish`;
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setPhotos(data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPhotos(query);
    }, [query]);

    return (
        <div className="w-full">
            <Switch>
                <Route exact={true} path="/">
                    <div className="w-full h-screen bg-blue-200">
                        <div className="w-11/12 h-full m-auto flex flex-col items-center">
                            <div className="w-3/4 ml-auto flex pt-96 flex-col text-left justify-start">
                                <h1 className="text-7xl font-bold text-white pb-8">
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
                                    searchText={(text) => setQuery(text)}
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
                            searchText={(text) => setQuery(text)}
                            photos={photos}
                            query={query}
                        />
                    )}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
