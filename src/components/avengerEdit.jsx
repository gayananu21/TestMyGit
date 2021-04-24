import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom"

let token =localStorage.getItem('login')

const errStyle = { color:'red',  fontSize: 14};

export default class EditAvenger extends Component {

  constructor(props) {
    super(props)

    this.onChangeAvengerName = this.onChangeAvengerName.bind(this);
    this.onChangeAvengerBirthName = this.onChangeAvengerBirthName.bind(this);
    this.onChangeAvengerLikeCount = this.onChangeAvengerLikeCount.bind(this);
    this.onChangeAvengerMovies = this.onChangeAvengerMovies.bind(this);
    this.onChangeAvengerDeceased = this.onChangeAvengerDeceased.bind(this);
    this.onChangeAvengerImgUrl = this.onChangeAvengerImgUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

     // State
     this.state = {
        name: '',
        birthName: '',
        likeCount: '',
        imgUrl: '',
        deceased:'',
        movies:[],
        errormessage: ''
       
  
      
        
      }
    
    
  }


 

  componentDidMount() {
    axios.get('http://localhost:5000/api/avengers/' + this.props.match.params.id,{

      headers:{
        "token":token
    }
    })
      .then(res => {
        this.setState({
            name: res.data.name,
            deceased: res.data.deceased,
            likeCount: res.data.likeCount,
            birthName: res.data.birthName,
            imgUrl: res.data.imgUrl,
            movies:res.data.movies
            
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeAvengerName(e) {
    
    let val = e.target.value;
    let err = '';
   
      if (!val) {
        err = <p style={errStyle}>Avenger name can' be empty</p>;
      
    }
    else if (val.length<3) {
        err = <p style={errStyle}>Please enter a valid name</p>;
      
    }
    else if (val.length>15) {
        err = <p style={errStyle}>Please enter a valid name</p>;
      
    }
    else if (Number(val)) {
        err = <p style={errStyle}>Avenger name should be string</p>;
      
    }
    this.setState({errormessage: err});
    this.setState({ name: e.target.value })
    
  }

  onChangeAvengerBirthName(e) {
    this.setState({ birthName: e.target.value })
  }

  onChangeAvengerLikeCount(e) {
    this.setState({ likeCount: e.target.value })
  }

  onChangeAvengerMovies(e) {
    this.setState({ movies: e.target.value })
  }

  onChangeAvengerDeceased(e) {
    this.setState({ deceased: e.target.value })
  }

  onChangeAvengerImgUrl(e) {
    this.setState({ imgUrl: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.state.name;
    if (!(name)) {
      alert("Avenger name can't be empty");
    }
    else if(name.length<3){
        alert("Please enter valid name");
    }
    else if(name.length>15){
        alert("Please enter valid name");
    }
    else if(Number(name)){
        alert("Avenger name should be a String");
    }
    else{
         const avengerObject = {
      name: this.state.name,
      birthName: this.state.birthName,
      likeCount: this.state.likeCount,
      movies: this.state.movies,
      deceased: this.state.deceased,
      imgUrl: this.state.imgUrl
    };


    axios.put('http://localhost:5000/api/avengers/' + this.props.match.params.id, avengerObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
            // Redirect to Student List 
            this.props.history.push('/Avengers')
      }).catch((error) => {
        console.log(error)
      })
    }

   
  }

  
 

  

  render() {
      
    return (
        
        
    <div onSubmit={this.mySubmitHandler} className="form-wrapper">
      <form  onSubmit={this.onSubmit}>
        <Form.Group  controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" autoComplete="off"  value={this.state.name} onChange={this.onChangeAvengerName} />
          {this.state.errormessage}
        </Form.Group>

        <Form.Group controlId="BirthName">
          <Form.Label>BirthName</Form.Label>
          <Form.Control type="text" autoComplete="off" value={this.state.birthName} onChange={this.onChangeAvengerBirthName} />
        </Form.Group>

        <Form.Group controlId="LikeCount">
          <Form.Label>LikeCount </Form.Label>
          <Form.Control type="text" autoComplete="off" value={this.state.likeCount} onChange={this.onChangeAvengerLikeCount} />
        </Form.Group>

        <Form.Group controlId="Movies">
          <Form.Label>Movies</Form.Label>
          <Form.Control type="text"  autoComplete="off" value={this.state.movies} onChange={this.onChangeAvengerMovies} />
        </Form.Group>

        <Form.Group controlId="Deceased">
          <Form.Label>Deceased</Form.Label>
          <Form.Control type="text"  autoComplete="off" value={this.state.deceased} onChange={this.onChangeAvengerDeceased} />
        </Form.Group>

        <Form.Group controlId="ImgUrl">
          <Form.Label>ImgUrl</Form.Label>
          <Form.Control type="text" autoComplete="off" value={this.state.imgUrl} onChange={this.onChangeAvengerImgUrl} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="cancel">
          Update Avenger
        </Button><br/><br/>
        <Link to={"/Avengers"}> <Button variant="btn btn-outline-dark" size="lg" block="block" type="submit"> 
          Cancel
        </Button></Link>
      </form>
    </div>);
  }
}
