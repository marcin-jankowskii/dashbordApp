import React, { useState, useEffect } from 'react';
import styles from '../styles/Clock.module.css';
import responsiveStyles from '../styles/Responsive.module.css';

const Clock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.clock}>
            <p className={styles.time}>{currentTime.toLocaleTimeString()}</p>
            <p className={styles.date}>{currentTime.toLocaleDateString()}</p>
        </div>
    );
};

export default Clock;