import React from 'react';
import styles from './ScrollButton.module.css';
import { getImageUrl } from "../../utils";

const ScrollButton = ({ isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <a href="#navbar">
            <button className={styles.floatingButton}>
                {/* <img src={getImageUrl("scroll/up.png")} alt="ScrollUp Icon" className={styles.scrollUpIcon} /> */}
                <p className={styles.ScrollText}>Up</p>
            </button>

        </a>
    );
};

export default ScrollButton;
