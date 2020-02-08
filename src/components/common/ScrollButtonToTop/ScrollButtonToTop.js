import React, { useState, useEffect } from "react";
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './ScrollButtonToTop.css';

const cx = classNames.bind(styles);

const ScrollButtonToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className={cx('scroll-to-top')}>
            {isVisible && <button
                title='Back to top'
                className={cx('scroll')}
                onClick={scrollToTop}>
                <Icon name='angle up' size='large' />
            </button>}
        </div>
    );
};

  export default ScrollButtonToTop;