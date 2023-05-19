const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      string = eval(string);
    } else if (buttonText === 'AC') {
      string = "";
    } else if (buttonText === 'DEL') {
      string = string.slice(0, -1);
    } else {
      string += buttonText;
    }

    input.value = string;
  });
});
























































/* let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  })
})*/
