import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class Recipe extends Component{
  render () {
    var {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id,
    } = this.props.recipe;
    var {handleDetails} =this.props;

    return (
      <div className="col-10.mx-auto col-md-6 col-lg-4 my-3">
        <div className= "card" style={{height:400}}>
          <img src ={image_url}
            className="img-card-top"
            style={{height:"14em"}}
            alt='recipe'/>
          <div className="card-body text-capitalize">
            <h6 style={{fontWeight:"bold"}}>{title}</h6>
            <h6 className="text-slanted" style={{color:"#888", fontStyle:"italic"}}>
              provided by {publisher}
            </h6>
          </div>
          <div className="card-footer" style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <button type="button" onClick={()=>handleDetails(0,recipe_id)} className="btn btn-danger text-capitalize" style={{marginRight:15}}>
              details
            </button>
            <a href={source_url} className="btn btn-secondary text-capitalize" target="_blank" rel="noopener noreferrer" style={{marginLeft:15}}>recipe url</a>
          </div>
        </div>
      </div>
    )
  }
}
