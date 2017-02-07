/**
 * Created by dcate on 2/6/17.
 */
import React, { PropTypes } from 'react';

const SearchBar = ({ handleSearchQueryChange, handleSubmitSearch }) => (
    <div>
        <input
            type="text"
            onChange={(event) => handleSearchQueryChange(event)}
        />
        <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={(event) => handleSubmitSearch(event)}
        />
    </div>
);

SearchBar.propTypes = {
    handleSearchQueryChange: PropTypes.func.isRequired,
    handleSubmitSearch: PropTypes.func.isRequired
};

export default SearchBar;