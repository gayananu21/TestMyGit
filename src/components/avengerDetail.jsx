import React, { Component } from "react";
import axios from 'axios';
import {decode as base64_decode, encode as base64_encode} from 'base-64'


export default class AvengerDetail extends Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);

   
    // State
    this.state = {
      name: '',
      birthName: '',
      likeCount: '',
      imgUrl: '',
      deceased:'',
      movies:[],
      userId:""


      
    }
  }

 async componentDidMount() {
   
   await axios.get('http://localhost:5000/api/avengers/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          deceased: res.data.deceased,
          likeCount: res.data.likeCount,
          birthName: res.data.birthName,
          imgUrl: res.data.imgUrl,
          movies:res.data.movies,

          
        
        });
      })
      .catch((error) => {
        console.log(error);
      })

  }

 async onSubmit(e) {


    
  let token =localStorage.getItem('login')

  await axios.post('http://localhost:5000/api/auth/get/userId',token,{
     
      headers:{
        'token':token
      }
    })
  .then((res) => {

   if(res.data){

    this.userId =(res.data);

   

   }

   else{
      console.log("Error while authorization please Log in again.")
    }
    
    
  }).catch((error) => {
    console.log('Error while authorization please Log in again.')
    console.log(error)
  })


    const CartAvengerObject = {
      
      userId:this.userId,
      name: this.state.name,
      likeCount: this.state.likeCount,
      movies: this.state.movies,
      imgUrl:this.state.imgUrl,
      
    };

    

   await axios.post(`http://localhost:5000/api/carts/`, CartAvengerObject,{
      headers:{
        "token":token
      }
    })
      .then((res) => {
        console.log(res.data)
        console.log(token)
        console.log('Avenger added to cart successfully ')
           
      }).catch((error) => {
        console.log(error)
      })



  }

  render() {

    return(
        <div  className="card"  style={{width: "18rem"}}>
        <img src={this.state.imgUrl} height="350" className="card-img-top" className="card-img-top" alt="..."/>
        <div className="card-body">
              <h5 className="card-title">{this.state.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul>
           {this.state.movies.map((movie, index) => (
        <li key= {index}>{movie}</li>
        ))}
          </ul>
          <button 
           
          className="btn btn-primary" 
         
   
          >
              Like <span className="badge bg-dark">{this.state.likeCount}</span>
          </button><br/><br/>{" "}
          <button className="btn btn-warning" onClick={this.onSubmit}>Add to cart</button>
          

          </div>
</div>

    )
  }

}
