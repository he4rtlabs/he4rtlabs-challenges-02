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


insert = () => {
  var myModal = document.getElementById('staticBackdrop')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })
}