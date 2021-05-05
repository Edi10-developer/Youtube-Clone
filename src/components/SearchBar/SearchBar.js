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
        className='input-field'
        alt="Img"
      />
      {/*<button onClick={handleSubmit(termsOfsearch)}>Search</button> */}
    </SearchDiv>
  );
};

export default SearchBar;
