import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    return (
      <form>
        <PersonalForm />
        <ProfessionalForm />
      </form>
    )
  }
}

export default Form; 
