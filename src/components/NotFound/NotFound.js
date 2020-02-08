import React from 'react';
import classNames from 'classnames/bind';
import Layout from '../../Layout';
import styles from './NotFound.css';

const cx = classNames.bind(styles);

const NotFound = () => {
    return(
        <Layout>
            <div className={cx('notFound')}>
                <p>Page Not Found :(</p>
            </div>
        </Layout>
    )
}
export default NotFound;
