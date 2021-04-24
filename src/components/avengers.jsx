import React, { Component } from "react";
import Avenger from "./avenger";
import axios from "axios";



let token =localStorage.getItem('login')

class Avengers extends Component {

    state = {

        allAvengers: [],
        rate:""
       
        
       
    };
    render() {
      
       
        
        return (
            <div className="container" >
               
                <div className="row">
            
                    {this.state.allAvengers.map((avenger) => (

                        <div  key={avenger.id} className="col">
                        <Avenger 
                        key= {avenger.id}
                        avenger={avenger}
                         
                        onLike={() => this.likeAvenger(avenger)}
                        onDelete={() => this.deleteAvenger(avenger.id)}
                        onCurrency ={() => this.Currency(avenger)}

                        
                        
                        

                        />
                         
                    </div>

                    

                    ))}


                          


                    
                </div>
            </div>
            
        );
    }
    async componentDidMount() {
        const {data} = await axios.get("http://localhost:5000/api/avengers");
        let avengers = data.map((avenger) => {
            return{
                id: avenger._id,
                imgUrl:avenger.imgUrl,
                name: avenger.name,
                birthName: avenger.birthName,
                likeCount: avenger.likeCount,
                movies: avenger.movies,
            };
        });
        this.setState({ allAvengers: avengers});



        
    }

    

    async likeAvenger(avenger){

         await axios.put(`http://localhost:5000/api/avengers/${avenger.id}` , {

        
            id:avenger._id,
            id: avenger._id,
            imgUrl:avenger.imgUrl,
            name: avenger.name,
            birthName: avenger.birthName,
            likeCount: avenger.likeCount,
            movies: avenger.movies,
        
    });


    let updatedAvengers = [...this.state.allAvengers];
    let index = updatedAvengers.indexOf(avenger);
    updatedAvengers[index] = {...avenger};
    updatedAvengers[index].likeCount ++;
    this.setState({ allAvengers: updatedAvengers});


    }





  

    async Currency(){

        await axios({
            method: "GET",
            url: "https://v6.exchangerate-api.com/v6/b1545c28a1aa27fbdd3d66ad/latest/LKR",
            
          })
           
         
            .then((response) => {
              
            localStorage.setItem(`exRate`, response.data.conversion_rates.USD)


              console.log(response.data.conversion_rates.USD);

            })
            .catch((error) => {
              console.log(error);
            });
            
    }


    
 

    
    async deleteAvenger(id){
        await axios.delete(`http://localhost:5000/api/avengers/${id}`,{

        headers:{
            "token":token
        }
        });
        let updatedAvengers = this.state.allAvengers.filter(
            (avenger) => avenger.id !== id,

        );
        this.setState({allAvengers: updatedAvengers});
    }
}

export default Avengers; 