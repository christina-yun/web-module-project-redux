import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

import { Link, useParams, useHistory } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // const movie = props.faves.favorites.find(movie=>movie.id===Number(id))

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.faves.favorites.map(movie=>{
                const handleDelete = () => {
                    props.removeFavorite(movie.id)
                    push('/movies/');
                }
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span onClick={handleDelete} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        faves: state.faves
    })
}

export default connect (mapStateToProps, { removeFavorite }) (FavoriteMovieList);