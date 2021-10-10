import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    return (
      <form>
        <PersonalForm />
        <ProfessionalForm />
        <input 
          type="button"
          value="enviar"
        />
        <input 
          type="button"
          value="Limpar"
        />
      </form>
    )
  }
}

export default Form; 
