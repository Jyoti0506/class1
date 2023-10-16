import React, { Component } from 'react'

const randNum = () => {
    return Math.floor(Math.random() * 1000)
};

class Ex10 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgId:237
        }
    }

    genImage() {
        //state handler
        this.setState({
            imgId:randNum()
        });
    }

    render() {
        return (
            <div>
                <h1>Image generator</h1>
                <button onClick={this.genImage.bind(this)} >Generate next Image</button>
                <img src={`https://picsum.photos/id/${this.state.imgId}/200/300`} alt="no image" />
            </div>
        )
    }
}

export default Ex10