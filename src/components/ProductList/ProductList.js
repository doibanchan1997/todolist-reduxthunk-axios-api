import React from 'react'
export const Product = (props) => {
    return(
        <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Danh sach san pham
                        </div>
                        <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Stt</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Trạng thái</th>
                                    <th>Giá</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.children}
                            </tbody>
                        </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        
    )
}

export default Product