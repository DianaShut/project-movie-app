import React, { useState } from 'react';

import {IMovie} from "../../../interfaces";
import {searchService} from "../../../services";
import { SearchBar } from '../SearchBar';
import {Link, useParams} from "react-router-dom";
import css from './SearchResults.module.css'

const SearchPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSearch = (term: string) => {
        setLoading(true);
        searchService.getBySearch(term, '1').then(({ data }) => {
            setSearchResults(data.results);
            setLoading(false);
        }).catch(error => {
            console.error('Error searching movies:', error);
            setLoading(false);
        });
    };

    return (
        <div className={css.searchBar}>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {/*{!loading && searchResults.length === 0 && <p>No results found</p>}*/}
            {!loading && searchResults.length > 0 && (
                <div className={css.searchResults}>
                    <h2>Search Results</h2>
                    {searchResults.map(movie => (
                            <Link to={`/movie/${movie.id}`}>
                                <h4>{movie.title}</h4>
                            </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;

