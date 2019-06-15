import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { recipe } from "../tempDetails"


export default class RecipeDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipe:recipe,
      // url:`https://www.food2fork.com/api/get?key=${YOUR API KEY}=${this.props.id}`
    };
  }

  async componentDidMount (){
    try{
      var data = await fetch(this.state.url)
      var jsonData = await data.json();
      this.setState({recipe:jsonData.recipe})
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    var {image_url, publisher, publisher_url, source_url, title, ingredients}= this.state.recipe;
    var {handleIndex}= this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button type="button" className= "btn btn-danger mb-5 text-capitalize" onClick={()=>handleIndex(1)}>
              back to recipe list
            </button>
            <img src={image_url} className="d-block w-100" alt='recipe'/>
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>{title}</h6>
            <h6 className="text-capitalize text-slanted" style={{color:"#888", fontStyle:"italic"}}>provided by {publisher}</h6>
            <a href={publisher_url} target='blank' rel='noopener noreferrer' className="btn btn-info mt-2 text-capitalize">publisher webpage</a>
            <a href={source_url} target='blank' rel='noopener noreferrer' className="btn btn-secondary mt-2 mx-3 text-capitalize">recipe url</a>
            <ul className="list-group mt-4">
            <h2 className="mt-3 mb-4">Ingredients</h2>
            {
              ingredients.map((item, index)=>{
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
