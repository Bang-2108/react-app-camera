import React, { Component } from 'react';

class DienTichClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            length: 0,
            width: 0,
            area: 0,
        }
    }
    handleLengthChange = (e) => {
        this.setState({ length: e.target.value })
    }
    handleWidthChange = (e) => {
        this.setState({ width: e.target.value })
    }
    caculaterArea = () => {
        const { length, width } = this.state
        this.setState({
            area: length, width

        })
    }
    render() {
        const { length, width, area } = this.state;
        return (
            <div>
                <h2>Tính Diện Tích Hình Chữ Nhật</h2>
                <div>
                    <label>Chiều dài: </label>
                    <input type="number" value={length} onChange={this.handleLengthChange} />
                </div>
                <div>
                    <label>Chiều rộng: </label>
                    <input type="number" value={width} onChange={this.handleWidthChange} />
                </div>
                <button onClick={this.calculateArea}>Tính diện tích</button>
                <div>
                    <h3>Diện tích: {area}</h3>
                </div>
            </div>
        );
    }
}

export default DienTichClass;