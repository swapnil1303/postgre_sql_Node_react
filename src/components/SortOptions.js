import React from 'react';

const SortOptions = ({ currentSortField, onSortByChange, onSortOrderChange, sortOrder }) => {
    return (
        <div className='container sortOptions'>
            <label htmlFor="sortBy">Sort By:</label>
            <select id="sortBy" value={currentSortField} onChange={(e) => onSortByChange(e.target.value)}>
                <option value="customer_name">Customer Name</option>
                <option value="location">Location</option>
            </select>
            <button onClick={onSortOrderChange}>Sort {sortOrder === 'asc' ? 'Desc' : 'Asc'}</button>
        </div>
    );
};

export default SortOptions;
