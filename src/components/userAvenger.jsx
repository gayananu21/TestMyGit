import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

class AvengerUser extends Component {

    state = {
       
 
        
    };
    
  
    showMovies() {
        if (this.props.avenger.movies.length == 0) return <p>No movies available</p>;
        return this.props.avenger.movies.map((movie, index) => (
        <li key= {index}>{movie}</li>
        ));
    }


    render() {
     
      
        return (
        
           
           <div  className="card"  style={{width: "18rem"}}>
  <img src={this.props.avenger.imgUrl} width="300" height="350" className="card-img-top" alt="..."/>
  <div className="card-body">
        <h5 className="card-title">{this.props.avenger.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul>
       {this.showMovies()}
    </ul>
    <button 
    className="btn btn-primary" 
    onClick= {this.props.onLike}
    >
        Like <span className="badge bg-dark">{this.props.avenger.likeCount}</span>
    </button>{" "}
   
<br/>
<br/>


<Link className="avenger-detail" to={"/detail/"+ this.props.avenger.id}>
                        <button className="btn btn-warning">Show more...</button>
</Link><br/><br/>

           
  </div>
</div>

      

        );
    }
}

export default AvengerUser;