import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    

    deleteStudent() {
        let id = this.props.obj._id
        axios.delete(`http://localhost:5000/api/carts/${id}`)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

            
    }

    

    render() {
        return (
         
            <tbody>
            <tr>
                <td><img src={this.props.obj.imgUrl} width="80" height="80"></img></td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.likeCount}</td>
                <td>{this.props.obj.movies}</td>
                
                <td>
                    
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
            </tbody>
            
        );
    }
}