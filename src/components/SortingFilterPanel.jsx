// src/components/SortingFilterPanel.js
import React from 'react';
// import './SortingFilterPanel.css'; // Import the CSS for styling

const SortingFilterPanel = () => {
    return (
        <div className='sortingFilterPanel'>
            <h3>Sort & Filter</h3>
            {/* Add your sorting and filtering options here */}
            <div className='filterSection'>
                <h4>Sort By</h4>
                <select>
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                    <option value="release_date">Release Date</option>
                </select>
            </div>
            <div className='filterSection'>
                <h4>Filter By Genre</h4>
                <select>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    {/* Add more genres as needed */}
                </select>
            </div>
        </div>
    );
};

export default SortingFilterPanel;
