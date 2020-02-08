import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductList } from '../actions/ProductActions';
import Product from '../components/Product/Product';

const mapStateToProps = ({productReducer}) => ({
    productsData: productReducer.productsData
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProductList,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
