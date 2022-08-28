import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {};

    handleSubmit = async (event, state) => {
        event.preventDefault()
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${state}&api_key=pq8XjNxMpYQahvK7AxTqbCmOr3HXpeS5&rating=g`);
        const json = await response.json();
        const gifTemp = await json.data.slice(0,3);
        this.setState({gifTemp});
    };
       


    render (){
        return(
            <React.Fragment>
                <GifSearch handleSubmit={this.handleSubmit}/>
                {this.state.gifTemp !== null ?
                <GifList gifs={this.state.gifTemp}/>
                :null}
            </React.Fragment>
        )
    }
}