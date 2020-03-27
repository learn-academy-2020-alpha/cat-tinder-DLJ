import React, { Component } from 'react'
import { ListGroup, ListGroupItemHeading } from 'reactstrap';

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <ListGroup>
      <ListGroupItemHeading>Single Cats Club: </ListGroupItemHeading>
      </ListGroup>
      { this.props.cats.map((cat, index) => {
  return(
    <ListGroup key={ index }>
      <h4>{ cat.name }</h4>
      <small>{ cat.age } - { cat.enjoys }</small>
      <br/>
    </ListGroup>
    )
  })}
      </React.Fragment>
    )
  }
}

export default CatIndex