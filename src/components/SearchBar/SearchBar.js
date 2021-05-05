import React, { useState } from 'react';
import { SearchDiv } from './styles';

const SearchBar = ({ handleSubmit }) => {
  const [termsOfsearch, setTermsOfsearch] = useState('');

  return (
    <SearchDiv>
      <input 
        value={termsOfsearch}
        onChange={event => {
            setTermsOfsearch(event.target.value)
            handleSubmit(termsOfsearch)
        }}
      />
    </SearchDiv>
  );
};

export default SearchBar;
