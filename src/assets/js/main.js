//import Feature from './functionModel';

// Este será o objeto principal no qual você irá se basear para as funções do desafio!
// Caso haja dúvidas de como prosseguir, favor consultar a sala #js no nosso discord!
let features = [
  {
    feature: "Authentication",
    devHours: 10,
    testHours: 2
  }
];

// alert("He4rtDevs <3");

// Dica: faça o layout e depois pense em como vai funcionar o script.


function insert() {

  let features = [
    {
      feature: "Authentication",
      devHours: 10,
      testHours: 2
    }
  ];
  alert(`Entrou onde deveria entrar`);
  debugger;
  var nameFunction = document.getElementById('name').value;
  var hoursDev = document.getElementById('timeDev').value;
  var hoursTest = document.getElementById('timeTest').value;
  console.log(nameFunction);  
  console.log(hoursDev);  
  console.log(hoursTest);  
  

  let feature = new Feature(nameFunction, hoursDev, hoursTest);

  features.push(feature);

  alert(`Nova Feature: ${feature.getAll()}`);

  // myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  // })
}


class Feature {
  constructor(nameFunction, hoursDev, hoursTest){
    this.nameFunction = nameFunction;
    this.hoursDev = hoursDev;
    this.hoursTest = hoursTest;
  }

  getAll() {
    return `Feature:\n
    Nome: ${this.nameFunction}\n 
    Horas de desenvolvimento: ${this.hoursDev}\n
    Horas de Teste: ${this.hoursTest}
    `;
  }
}