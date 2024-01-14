import React from 'react';
import Clock from './components/Clock';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Bookmarks from './components/Bookmarks';
import styles from './styles/App.module.css';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Clock />
            <SearchBar />
            <Weather />
            <Bookmarks />
        </div>
    );
};
export default App;
