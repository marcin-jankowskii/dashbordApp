import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim()) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
                placeholder="Wyszukaj w Google..."
            />
            <button type="submit" className={styles.searchButton}>Szukaj</button>
        </form>
    );
};

export default SearchBar;
