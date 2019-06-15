import React, {Component} from 'react';
import './App.css';
import Helmet from 'react-helmet';

import RecipeDetails from "./Components/RecipeDetails";
import RecipeList from "./Components/RecipeList";


class App extends Component{
  constructor(){
    super();
    this.state = {
      recipes: [],
      // url:`https://www.food2fork.com/api/search?key=${YOUR API KEY}`,
      // base_url:`https://www.food2fork.com/api/search?key=${YOUR API KEY}`,
      details_id:35382,
      pageIndex: 1,
      search:"",
      query:"&q=",
    }
  }

    async getRecipes() {
      try {
        var data = await fetch(this.state.url)
        var jsonData = await data.json();
        if(jsonData.recipes.length === 0){
          this.setState(()=>{
            return{error:"Sorry, but your search did not return any results"}
          })
        } else {
          this.setState(()=>{
            return {recipes:jsonData.recipes, error: ""}
          })
        }
      } catch (error) {
        console.log(error);
      }
    }

  componentDidMount (){
    this.getRecipes();
  }

  displayPage=(index) =>{
    switch(index){
      default:
        case 1:
          return <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit= {this.handleSubmit} error= {this.state.error}/>
        case 0:
          return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
    }
  };

  handleIndex = index => {
    this.setState({pageIndex:index})
  }

  handleDetails =(index, id)=>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }

  handleChange =(e) => {
    this.setState({search:e.target.value})
  }

  handleSubmit =(e) => {
    e.preventDefault();
    var {base_url, query, search}= this.state;
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,search:""}
    },() => {
      this.getRecipes()
    })
  }

  render() {
    return (
      <div>
        <Helmet bodyAttributes={{style: 'background-color : #F0F0F0'}}/>
        {this.displayPage(this.state.pageIndex)}
      </div>
    );
  }
}

export default App;
