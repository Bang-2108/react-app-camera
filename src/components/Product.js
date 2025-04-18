import React from "react";

function Product(props) {
    return (
    //     <div className="col-sx-3 col-sm-3 col-md-3 col-lg-3">
    //         <img src='https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png' alt="Sản phẩm" width="150" />
    //         <p>Mô tả Sản Phẩm</p>
    //         <p>Giá sản phẩm</p>
    //     </div>
    // );

    <div className="col-sx-3 col-sm-3 col-md-3 col-lg-3">
             <img src={props.linkanh} alt="Sản phẩm" width="150" />
             <p>{props.title}</p>
             <p>Giá sản phẩm: {props.price}</p>
         </div>
    )
}
    export default Product;


