import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    constructor(){
        super()
        this.state = {}
    }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=pq8XjNxMpYQahvK7AxTqbCmOr3HXpeS5&rating=g`)
        .then(response=>response.json())
        .then(json=>{
            let gifs = json.data.slice(0,3);
            console.log(gifs);
            this.setState({gifs});
        })
        .catch(console.error);
        console.log(this.state);
        
    }


    render (){
        let gifs = this.state;
        return(
            <React.Fragment>
                <GifSearch handleSubmit={this.handleSubmit}/>
                { this.state.data===true ?(
                    gifs.map(gif=>(
                    <GifList url={gif.images.original.url}/>
                ))):null}
            </React.Fragment>
        )
    }
}