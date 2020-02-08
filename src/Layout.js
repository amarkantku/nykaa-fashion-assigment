import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import styles from './Layout.css';
const cx = classNames.bind(styles);
class Layout extends Component {
	render() {
		return (
			<div className={cx('LayoutWrapper')}>
				<Header />
				<Container fluid>
					{this.props.children}
				</Container>
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};

export default Layout;
