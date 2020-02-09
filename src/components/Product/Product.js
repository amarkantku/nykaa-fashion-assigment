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
            scrollPos: 0,
            keyword: '',
            count: 5, // Assumption - load only five record on page load
        }
        this.delayedCallback = debounce(this.handleProductFilter, 500)
        this.loadProduct();
    }
    componentDidMount() {
        window.addEventListener('scroll', debounce(this.handleScroll, 1000));
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    loadProduct = () => {
        const { count, keyword } = this.state;
        if(keyword) {
            this.props.actions.filterProducts({ keyword });
        } else {
            this.props.actions.getProductList({ count });
        }
    }

    handleScroll = () => {
        if(document.body.getBoundingClientRect().top > this.state.scrollPos) {
            this.setState({
               ...this.state,
            });
        } else {
            this.setState({
                ...this.state,
                count: this.state.count + 5,
                scrollPos: document.body.getBoundingClientRect().top,
            }, () => {
                this.loadProduct();
            });

        }
    }

    onChange = (event) => {
        event.persist();
        this.delayedCallback(event.target.value);
    }

    handleProductFilter = (value) => {
        this.setState({
            ...this.state,
            keyword: value 
        }, () => {
            const { keyword } = this.state;
            if(keyword){
                this.props.actions.filterProducts({ keyword });
            } else {
                this.loadProduct();
            }
        });
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
