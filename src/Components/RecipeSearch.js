import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default class RecipeSearch extends Component{

  render () {
    var {value, handleSubmit, handleChange} = this.props
    return (
      <Jumbotron style= {{display: "flex", backgroundImage:'url("../images/jumbotron.jpg")',backgroundPosition:"center center", backgroundSize:'cover', color: 'white', textAlign:'center', height: 650}}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 mb-3 text-center">
            <h1 className="text-capitalize text-slanted" style={{fontWeight:"bold"}}>
              search for recipes with{" "}<strong className="text-danger">Food2Fork</strong>
            </h1>
            <form className='mt-4'onSubmit={handleSubmit}>
              <label htmlFor="search" >
                Please type recipes or ingredients seperated by a comma
              </label>
              <InputGroup>
                <Input type = "text" name= "search" style={{height:50}} placeholder="chicken, onions, carrots" className="form-control" value= {value} onChange={handleChange} />
                <InputGroupAddon addonType="append"><Button color="danger"><FontAwesomeIcon  icon={faSearch} /></Button></InputGroupAddon>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
      </Jumbotron>
    )
  }
}
