/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './cartTableRow';
import {decode as base64_decode, encode as base64_encode} from 'base-64'



export default class StudentList extends Component {
    

  constructor(props) {
    super(props)
    this.state = {
      students: [],
      userId:"",

    };
  }

  

 
 async componentDidMount() {
   
 

   
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



    const cartFilterObject = {

        userId:this.userId
        
          
    }



    const{data} =await axios.post('http://localhost:5000/api/carts/myCart',cartFilterObject)
    let avengers=data.map((avenger) => {
      return{
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        movies: avenger.movies,
        likeCount: avenger.likeCount,
        name: avenger.name
      };
    });
    this.setState({ students: avengers});
    
     
  }



  async deleteStudent(id) {
    
    axios.delete(`http://localhost:5000/api/carts/${id}`)
        .then((res) => {
            console.log('Student successfully deleted!')
            let updatedAvengers = this.state.students.filter(
                (avenger) => avenger.id !== id,
    
            );
            this.setState({students: updatedAvengers});
        }).catch((error) => {
            console.log(error)
        })

        
        
}


  DataTable() {
    return this.state.students.map((avenger, i) => {
      return  <StudentTableRow avenger={avenger} onDelete={() => this.deleteStudent(avenger.id)} />
    });
  }


  


  render() {
    return (

      <div className="container" >
     
      <div className="row">
        

    
    <div className="striped bordered hover">
     
<h5>Welcome to cart</h5><br/>

      <Table striped bordered hover>

  
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
              
    </div>
  </div>);
  }
}
