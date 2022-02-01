import React from 'react';

class ProfessionalForm extends React.Component {

  render() {

    return (

      <fieldset>
          <legend>Informações Profissionais</legend>
          <div>
            Resumo do Currículo:
            <textarea
              name="resume"
              maxLength="1000"
              required
            />
          </div>
          <div>
          Cargo:
            <input
              type="Text"
              name="cargo"
              maxLength="40"
              required
            />
          </div>
          <div>
          Descrição do cargo:
            <textarea
              name="description"
              maxLength="500"
              required
              />
          </div>
      </fieldset>       
    );
  }

}

export default ProfessionalForm;