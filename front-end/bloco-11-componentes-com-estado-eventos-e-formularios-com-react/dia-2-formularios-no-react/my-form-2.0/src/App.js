import React from 'react';
import Form from './Form';


const initialState = {
  name: '',
  email: '',
  CPF: '',
  Adress: '', 
  city: '',

};

class App extends React.Component {

  constructor(props) {
    super(props) 
    this.state = initialState; 
  }


  render() {
    return (
      <Form />
    )
  }
}

export default App;