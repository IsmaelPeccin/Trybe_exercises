function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercício 1 
  //O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  //Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  //Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  //Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasDez (){

  let listDays = document.getElementById('days');

  for (let index2 = 0; index2 < dezDaysList.length; index2 += 1) {
    
    let dezDay = dezDaysList[index2];
    let numDayDez = document.createElement('li');

    if (dezDay === 24 || dezDay === 31) {
      numDayDez.className = 'holiday day';
      numDayDez.innerHTML = dezDay;
      listDays.appendChild(numDayDez);
    }
    else if (dezDay === 4 || dezDay === 11 || dezDay === 18){
      numDayDez.className = "friday day";
      numDayDez.innerHTML = dezDay;
      listDays.appendChild(numDayDez);
    }
    else if (dezDay === 25) {
      numDayDez.className = 'holiday friday day';
      numDayDez.innerHTML = dezDay;
      listDays.appendChild(numDayDez);
    }
    else {
      numDayDez.className = 'day';
      numDayDez.innerHTML = dezDay;
      listDays.appendChild(numDayDez); 
    }
  }
}
criaDiasDez ();   

  //Exercício 2 
  //Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  //Adicione a este botão a ID "btn-holiday" .
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
 
  function createButtonHoliday(buttonName) {

    let divButtons = document.querySelector(".buttons-container");
    let buttonHoliday = document.createElement('button'); 

    buttonHoliday.id = "btn-holiday";
    buttonHoliday.innerText = buttonName;
    divButtons.appendChild(buttonHoliday); 
  }
  createButtonHoliday('Feriados');

  // Exercício 3 
  // Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  function changeButtonColor() {

    let buttonHoliday = document.querySelector('#btn-holiday');
    let allHolidays = document.querySelectorAll(".holiday");
    let originalColor =  "rgb(238,238,238)";
    let setColor = 'yellow';  


    buttonHoliday.addEventListener('click', function(){
      for (index3 = 0; index3 < allHolidays.length; index3 += 1) {
        if (allHolidays[index3].style.backgroundColor === setColor) {
          allHolidays[index3].style.backgroundColor = originalColor;
        }
        else {
          allHolidays[index3].style.backgroundColor = setColor;
        }
      }
    });
  }
  changeButtonColor();

  // Exercício 4 
  // Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  //Adicione a este botão o ID "btn-friday" .
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function createButtonFriday(btnName) {

    let btnFriday = document.createElement('button'); 
    let divButtons = document.querySelector(".buttons-container");

    btnFriday.id = "btn-friday"; 
    btnFriday.innerHTML = btnName; 
    divButtons.appendChild(btnFriday); 
  }
  createButtonFriday('Sexta-feira'); 

  // Exercício 5 
  // Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
  //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

  function clickFriday () {

    let buttonFriday = document.querySelector('#btn-friday');
    let allFridays = document.getElementsByClassName('friday');
    let setText = 'Sextou!!';
    let arrayFri = [4, 11, 18, 25];

    buttonFriday.addEventListener('click', function(){
      for (let index4 = 0; index4 < allFridays.length; index4 += 1) {
        if (allFridays[index4].innerHTML !== setText) {
          allFridays[index4].innerHTML = setText;
        }
        else {
          allFridays[index4].innerHTML = arrayFri[index4];
        }

      }
    });
  }
  
  clickFriday();