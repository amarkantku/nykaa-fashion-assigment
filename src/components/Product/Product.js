import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import SearchField from '../common/SearchField/SearchField';

import ProductCard from '../Product/ProductCard/ProductCard';
import classNames from 'classnames/bind';
import styles from './Product.css';
const cx = classNames.bind(styles);

export default class Product extends Component {
    static propTypes = {
        actions: PropTypes.objectOf(PropTypes.func),
        productsData: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        actions: {},
        productsData: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            itemList: Array.from(Array(5).keys(), n => n + 1),
            scrollPos: 0,
        }
        this.delayedCallback = debounce(this.handleProductFilter, 500)
        this.props.actions.getProductList();
    }
    componentDidMount() {
        window.addEventListener('scroll', debounce(this.handleScroll, 1000));
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(document.body.getBoundingClientRect().top > this.state.scrollPos) {
            this.setState({
               ...this.state,
            });
        } else {
            this.setState({
                ...this.state,
                scrollPos: document.body.getBoundingClientRect().top,
                itemList: [...this.state.itemList, ...Array.from(Array(5).keys(), n => n + this.state.itemList.length + 1)],
            });
        }
    }

    onChange = (event) => {
        event.persist();
        this.delayedCallback(event.target.value);
    }

    handleProductFilter(value) {
        console.log(value)
    }

    render() {
        const { productsData } = this.props;
        return (
            <React.Fragment>
                <div className={cx('searchFieldWrapper')}>
                    <SearchField onChange={this.onChange} onClick={this.handleProductFilter}/>
                </div>
                <div className={cx('productsWrapper')}>
                    <ProductCard productsData={productsData}/>
                </div>
            </React.Fragment>
        )
    }
}
