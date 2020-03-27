import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Button } from 'reactstrap';
import "./App.css"
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import NewCat from './pages/NewCat'
<<<<<<< HEAD

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [], // We start with an empty array, so the component can finish rendering before we make our fetch request
=======
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [], // We start with an empty array, so the component can finish rendering before we make our fetch request
    }
    this.getCats() // Calls our fetch method when the component loads for the first time
    }
    handleNewCat = cat => {
      console.log({cat})
    }
    componentWillMount(){
    	this.getCats()
    }

    getCats = () => {
       // Making a fetch request to the url of our Rails app
       // fetch returns a promise
      fetch("http://localhost:3000/cats")
      .then((response)=>{
        //Make sure we get a successful response back
        if(response.status === 200){
          // We need to convert the response to JSON
          // This also returns a promise
          return(response.json())  
        }
      })
      .then((catsArray)=>{
         //Finally, we can assign the cats to state, and they will render
        this.setState({ cats: catsArray })
      })
    }
    render(){
      return(
        <React.Fragment>
          <Header/>
          <Router>
            <Switch>
              <Route exact path="/cat/:id" component={ CatShow } />
              <Route exact path="/createcat" render={ (props) => <NewCat handleNewCat={ this.handleNewCat } /> }/>
              <Route exact path="/" render={ (props) => <CatIndex cats={ this.state.cats } /> } />
            </Switch>
          </Router>
        </React.Fragment>
      )
>>>>>>> 928d51dd1c4cf09d3c0b32a88b95bf5ab388b008
    }
    this.getCats() // Calls our fetch method when the component loads for the first time
  }

  componentDidMount() {
    this.getCats()
  }

  getCats = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://localhost:3000/cats")
      .then((response) => {
        //Make sure we get a successful response back
        if (response.status === 200) {
          // We need to convert the response to JSON
          // This also returns a promise
          return (response.json())
        }
      })
      .then((catsArray) => {
        //Finally, we can assign the cats to state, and they will render
        this.setState({
          cats: catsArray
        })
      })
  }
<<<<<<< HEAD

  handleCreateCat = (newcat) => {
    return fetch("http://127.0.0.1:3000/cats", {
      // converting an object to a string
    	body: JSON.stringify(newcat),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getCats method
      if(response.ok){
        return this.getCats()
      }
    })
  }

  render() {
    return ( 
    <React.Fragment >
      <Header/>
        <Router>
        <Link to = "/newcat">
            <Button className="button"> Add a New Cat!! </Button> 
          </Link>
          <Link to = "/catindex" >
            <Button className="button"> All Cats </Button> 
          </Link> 
          <br/>
          <Switch >
            <Route exact path = "/newcat" render = { props => < NewCat handleCreateCat = { this.handleCreateCat }/>}/> 
            <Route path = "/catindex" render = { props => < CatIndex cats = { this.state.cats }/>} />
          </Switch> 
        </Router>
      </React.Fragment>
      )
    }
  }
=======
  
 

>>>>>>> 928d51dd1c4cf09d3c0b32a88b95bf5ab388b008



  
  export default App