import React, { useState } from 'react';
import { SearchDiv } from './SearchBar-styled';

const SearchBar = props => {
    const [termsOfSearch, setTermsOfSearch] = useState('');
    return (
        <SearchDiv>
            <input
                value={termsOfSearch}
                type="text"
                placeholder="Write something..."
                className="input-field"
                onInput={e => setTermsOfSearch(e.target.value)}
                onChange={e => setTermsOfSearch(e.target.value)}
            />
            <button onClick={props.onClick}>Search</button>
        </SearchDiv>
    )
}
export default SearchBar;