import React from 'react';
import styles from '../styles/Bookmarks.module.css';

const Bookmarks: React.FC = () => {
    const bookmarks = [
        { name: 'Gmail', url: 'https://mail.google.com/' },
        { name: 'GitHub', url: 'https://github.com/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/' }
    ];

    return (
        <div className={styles.bookmarks}>
            <h3>Zakładki</h3>
            <ul className={styles.bookmarkList}>
                {bookmarks.map((bookmark, index) => (
                    <li key={index}>
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                            {bookmark.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bookmarks;
