import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";


export default class RecipeList extends Component{
  render () {
    var {recipes, handleDetails, value, handleChange, handleSubmit, error} = this.props
    return (
      <div>
        <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className='container my-5'>
          <div className= "row">
            <div className="col-10 mx-auto col-md-6 text-center mb-3">
              <h1 className= "text-slanted">My favourite recipes</h1>
            </div>
          </div>

          <div className= "row" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          {error ? <h1 className="text-danger">{error}</h1> :
            recipes.map(recipe => {
              return(
                <Recipe
                  key={recipe.recipe_id}
                  recipe= {recipe}
                  handleDetails= {handleDetails}
                />
              )
            })
          }
          </div>
        </div>
      </div>

    )
  }
}
