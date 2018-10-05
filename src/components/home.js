import React, {Component} from 'react'


import Banner from '../components/banner';
import ArtistList from '../components/artist_list';

const URL_ARTIST = 'http://localhost:3000/artists';
class Home extends Component{
    constructor(props){
        super(props)


        this.state = {
            artists: ''
        }

    }

    componentDidMount(){
        fetch(URL_ARTIST,{
           method:'GET', 
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artists:json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList allArtists={this.state.artists}/>
            </div>
        )
    }
}

export default Home;