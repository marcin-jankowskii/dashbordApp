import React from 'react';
import styles from '../styles/Bookmarks.module.css';

const Bookmarks: React.FC = () => {
    const bookmarks = [
        { name: 'Gmail', url: 'https://mail.google.com/' },
        { name: 'GitHub', url: 'https://github.com/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/' }
    ];

    return (
        <div className={styles.bookmarksContainer}>
            {bookmarks.map((bookmark, index) => (
                <a key={index} href={bookmark.url} className={styles.bookmark} target="_blank" rel="noopener noreferrer">
                    {bookmark.name}
                </a>
            ))}
        </div>
    );
};

export default Bookmarks;
