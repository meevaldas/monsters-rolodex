import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/Card-list/Card-list.component';
import { SearchBox } from './Components/Search-box/Search-box.component';
 
class App extends Component{
  constructor(){
    super();
      this.state = {
       foods : [],
       searchField: ''
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({foods : users}));
  }

  render(){
    const {foods,searchField} = this.state;
    const filterfoods= foods.filter(food =>
    food.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1>Monsters- Rolodex</h1>
        <SearchBox 
        placeholder="Search Monsters" 
        handleChange = {e => {this.setState({ searchField: e.target.value});}}        
        />
        <CardList foods = {filterfoods}>
        </CardList>
      </div>
    );
  }
}

export default App;
