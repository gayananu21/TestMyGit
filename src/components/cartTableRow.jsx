import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
       
    }

    

 

    

    render() {
        return (
         
            <tbody>
            <tr>
                <td width="50"> <img src={this.props.avenger.imgUrl} width="80" height="80"></img></td>
                <td width="150">{this.props.avenger.name}</td>
                <td width="150">{this.props.avenger.name}</td>
                <td width="100">{this.props.avenger.likeCount}</td>
                <td width="150">{this.props.avenger.movies}</td>
                
                <td width="100"> 
                    
                    <Button  onClick={this.props.onDelete} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
            </tbody>
            
        );
    }
}