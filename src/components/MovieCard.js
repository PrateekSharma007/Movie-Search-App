import React from "react";
import data from "./data"

class MovieCard extends React.Component{
    render(){
        // const {movie} = this.props;
        return (

            
            <div className="moviecard">
                
                
                <div className="left">
                    <img src = {this.props.movie.posterUrl} alt="movie poster" srcset="" />
                </div>
                <div className="right">
                <div className="title">{this.props.movie.title}</div>
                <div className="plot">{this.props.movie.plot}</div>
                <div className="footer">
                    <div className="runtime">Runtime: {this.props.movie.runtime} mins</div>
                    <button className = "favourite-btn">Add to favourite</button>
                </div>
                </div>
                
            </div>
            
          
            
        )
    }
}


export default MovieCard;

