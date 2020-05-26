import React, { useState } from 'react';

function SearchRecipes({ value }){
    const [search, setSearch] = useState('');
    console.log(search);

    function UpdateSearch(e){
        setSearch(e.target.value);
    }

    function getSearch(e){
        e.preventDefault();
        value(search);
        setSearch("");
    }

    return(
        <form className="search-Form" onSubmit={getSearch}>
            <input className="search-bar" type="text" value={search} onChange={UpdateSearch}/>
            <button className="search-button" type="submit">Seach</button>
        </form>
    );
}

export default SearchRecipes;
