import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductList, filterProducts } from '../actions/ProductActions';
import Product from '../components/Product/Product';

const mapStateToProps = ({productReducer}) => ({
    productsData: productReducer.productsData
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProductList,
        filterProducts,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
