import React from 'react'
import { Link } from 'react-router-dom';


export const ProductItem = (props) => {
    

    let onDelete = (id)=> {
        if(confirm("ban co chan chan muon xoa khong")){//eslint-disable-line
            props.onDelete(id)
        }
    }
    let {index, product} = props;
    let statusName = product.status ? 'Còn Hàng' : 'Hêt Hàng';
    let statusClassName = product.status ? 'success': 'warning';

    return(
        <tr>
            <td >{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.count}</td>
            <td><button className={`btn btn-${statusClassName}`}><small>{statusName}</small></button></td>
            <td>{product.price}</td>
            <td>
                <Link to={`product/${product.id}/edit`} type="button" className="btn btn-success mr-2"><i className="fas fa-pen"></i> Sửa</Link>
                <button onClick={()=>{onDelete(product.id)}} type="button" className="btn btn-danger"><i className="fas fa-box-open"></i> Xóa</button>
            </td>
        </tr>
    )
}

export default ProductItem