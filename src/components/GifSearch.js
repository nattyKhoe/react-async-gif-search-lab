import React from 'react';

export default class GifSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label for="GifSearch">GifSearch</label>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        )
    }
    }