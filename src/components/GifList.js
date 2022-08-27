import React from 'react';

export default class GifList extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <img src={this.props.url} alt="meme" />
        )
    }
}