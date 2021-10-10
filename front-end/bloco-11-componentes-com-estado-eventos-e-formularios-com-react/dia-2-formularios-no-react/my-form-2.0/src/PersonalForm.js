import React from 'react';

const brazilStates = ['Acre (AC)','Alagoas (AL)','Amapá (AP)','Amazonas (AM)','Bahia (BA)','Ceará (CE)',
'Distrito Federal (DF)','Espírito Santo (ES)','Goiás (GO)','Maranhão (MA)','Mato Grosso (MT)','Mato Grosso do Sul (MS)','Minas Gerais (MG)','Pará (PA)','Paraíba (PB)','Paraná (PR)','Pernambuco (PE)','Piauí (PI)',
'Rio de Janeiro (RJ)','Rio Grande do Norte (RN)','Rio Grande do Sul (RS)','Rondônia (RO)','Roraima (RR)','Santa Catarina (SC)','São Paulo (SP)','Sergipe (SE)','Tocantins (TO)'];

class PersonalForm extends React.Component {
  render() {

    return (

      <fieldset>
          <legend>Informações Pessoais</legend>
            <div>
                <input  
                  type="name"
                  name="name"
                  maxLength="40"
                  required
                />
            </div>
            <div>
                <input  
                  type="email"
                  name="email"
                  maxLength="50"
                  required
                />           
            </div>
            <div>
                <input  
                  type="number"
                  name="CPF"
                  maxLength="11"
                  required
                />      
            </div>
            <div>
                <input  
                  type="text"
                  name="adress"
                  maxLength="200"
                  required
                />      
            </div>
            <div>
                <input  
                  type="text"
                  name="city"
                  maxLength="28"
                  required
                />      
            </div>
            <div>
                <select 
                  name="statesCountry"
                  required
                  defaultValue=""
                >
                  <option value="">Selecione seu estado:</option>
                  {
                  brazilStates.map((value, key) => (
                  <option key={key}>{value}</option>
                  ))
                  }
                </select>    
            </div>
            <div>
              <label>
                  <input
                    type="radio"
                    name="apto"
                    required
                  />
              Apartamento
              </label>
              <label>
                  <input
                    type="radio"
                    name="house"
                    required
                  />
              Casa
              </label>
            </div>
      </fieldset>       
    );
  }
}

export default PersonalForm; 