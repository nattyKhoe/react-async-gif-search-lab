import React from 'react';

export default class GifList extends React.Component{
    constructor(props){
        super(props)
        this.state= {};
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps) {
            this.setState({});
            this.props.gifs.map (gif=>(this.setState({...this.state})));
            // return (this.props.gifs.map(gif=>(
            //         <li key={gif.id}>Dolphin </li>
            //         // <li key={gif.id}>{gif.id}</li>
            //         // <li key={gif.id}>{gif.images.original.url}</li>
            //         // <iframe src={gif.images.original.url} title="dolphin"/>
            //         // <img src={gif.images.original.url} />
        };
    };

    render() {
        return (
            (this.state !== null)?(
            <ul>
                <li><img src={this.state[0].images.original.url} alt="error"/></li>
                <li><img src={this.state[1].images.original.url} alt="error"/></li>
                <li><img src={this.state[2].images.original.url} alt="error"/></li>
            </ul>
            ): null
        );
    };
};