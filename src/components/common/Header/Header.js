import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react';
import classNames from 'classnames/bind';
import logo from '../../../nykaa_logo.svg';
import styles from './Header.css';
const cx = classNames.bind(styles);

const menuStyle = {
    borderRadius: 0,
    boxShadow: 'none',
    width: '100%',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    height: '5em',
    color: '#666',
}
function Header() {
    return (
        <Menu borderless fixed={'top'} style={menuStyle}>
            <Container>
                <Menu.Item as='a' href='/' className={cx('headerIcon')}>
                    <Image size='tiny' src={logo} className={cx('logoImage')}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default Header;
