import React from "react"
import axios from 'axios'
import Movie from './movie'
import './App.css'


class App extends React.Component {
    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')   
       this.setState({movies,isLoading: false}) ;
    } 

    state = {
       isLoading: true,
       movies: []
    };

    constructor(props) {
        super(props)
        console.log('constructor');
    }


    componentDidMount() {
       this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ): (
                    <div className="movies">
                    {movies.map(movie => (
                    <Movie
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    poster = {movie.medium_cover_image}
                    summary = {movie.summary}
                    genres = {movie.genres}
                    />
                    
                   ))} 
                    </div>
                )}
                                
            </section>
        )
    }
}

export default App;