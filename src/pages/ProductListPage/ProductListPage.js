import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actDeleteProductRequest, actFetchAllProductRequest } from "./../../actions/index";
import ProductItem from "./../../components/ProductItem/ProductItem";
import ProductList from "./../../components/ProductList/ProductList";

export const ProductListPage = (props) => {
  
  let { products } = props;
  useEffect(() => {
    props.fetchAllProducts();
  },[products.id]);
  let onDelete = (id) => {
    props.deleteProduct(id);
  };
  let showProductItem = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={onDelete}
          />
        );
      });
    }
    return result;
  };

  
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Link type="button" to="product/add" className="btn btn-primary">
            Them San Pham
          </Link>
        </div>
      </div>
      <ProductList>{showProductItem(products)}</ProductList>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchAllProductRequest());
    },
    deleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
