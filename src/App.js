import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import NewCat from './pages/NewCat'
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
    }
  }
  
 


export default App