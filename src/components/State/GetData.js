import React, { Component } from 'react';
import { getData } from '../Content/data';

class GetData extends Component {
    constructor(props) {
        super(props)
        var arr = getData()
        this.state = {arr}
    }
    render() {
        return (
            <div style = {{display: "flex", flexWrap: "wrap", gap: "50", padding: "40"}}>
                {this.state.arr.map((key=>
                    <div>
                        <p>Tên sản phẩm: {key.name}</p>
                        <img src={key.image} alt='sản phẩm'></img>
                        <p>Loại: {key.loai}</p>
                    </div>
                ))}
                
            </div>
        );
    }
}

export default GetData;