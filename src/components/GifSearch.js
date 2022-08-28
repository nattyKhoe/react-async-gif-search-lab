import React from 'react';

export default class GifSearch extends React.Component {
    constructor(props){
        super(props)
        this.state= {search:""};
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(event,this.state.search);
    }

    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <label >GifSearch</label>
                <input type="text" onChange={this.handleChange}/>
                <button type="submit">Search</button>
            </form>
        )
    }
    }