import React from 'react';
import PropTypes from 'prop-types';
import { Card,Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './ProductCard.css';
const cx = classNames.bind(styles);

export const ProductCard = ({productsData}) => {
    const renderCard = () => {
        return productsData.map(product => {
            const size = product.sizeVariation.reduce((acc, item) => [...acc,item.title], []).join(', ');
            return (
                <div className={cx('productCard')} key={product.sku}>
                    <Card key={product.sku}>
                        <Image size='small' className={cx('productImage')} src={product.imageUrl} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{product.title}</Card.Header>
                            <Card.Description>
                                {product.subTitle}
                            </Card.Description>
                             <Card.Meta>
                                <span className={cx('productSize')}>{`Sizes: ${size}`}</span>
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                </div>
            )
        });
    }
    return(
        <div className={cx('productGroup')}>
            {renderCard()}
        </div>
    );
}

ProductCard.propTypes = {
	productsData: PropTypes.arrayOf(PropTypes.object)
};

export default ProductCard;