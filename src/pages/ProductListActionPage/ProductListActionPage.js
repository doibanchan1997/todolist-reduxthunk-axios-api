import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
    actAddProductRequest,
    actGetProductEditingRequest,
    actUpdateProductRequest
} from "./../../actions";
export const ProductListActionPage = (props) => {
  let history = useHistory();
  const [product, setProduct] = useState({
    id: "",
    txtName: "",
    txtPrice: "",
    chkbStatus: "",
  });

  let { id } = useParams();
  let { ItemEditting } = props;
  useEffect(() => {
    if (id) {
      props.onGetProduct(id);
      if (ItemEditting) {
        setProduct({
          txtName: ItemEditting.name,
          txtPrice: ItemEditting.price,
          chkbStatus: ItemEditting.status,
        });
      }
    }
  }, [ItemEditting.id]);

  let handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  let onSave = (e) => {
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    e.preventDefault();
    if (id) {
      props.onUpdateProduct(product);
    } else {
      props.onAddProduct(product);
    }
    history.goBack();
  };
  var { txtName, txtPrice, chkbStatus } = product;
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Thêm Sản Phẩm</div>
          <form className="card-body text-left" onSubmit={onSave}>
            <div className="form-group">
              <label>
                <h6>Tên Sản Phẩm</h6>{" "}
              </label>
              <input
                type="text"
                name="txtName"
                className="form-control"
                value={product.txtName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <h6>Giá</h6>{" "}
              </label>
              <input
                type="number"
                name="txtPrice"
                className="form-control"
                value={product.txtPrice || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-group mb-4">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="chkbStatus"
                  onChange={handleChange}
                  checked={product.chkbStatus || ""}
                  value={product.chkbStatus || ""}
                />

                <strong>còn Hàng</strong>
              </label>
            </div>
            <Link to="/product-list" className="btn btn-danger mr-3">
              Hủy bỏ
            </Link>
            <button className="btn btn-success" type="submit">
              Lưu lại
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ItemEditting: state.ItemEditting,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onGetProduct: (id) => {
      dispatch(actGetProductEditingRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListActionPage);
