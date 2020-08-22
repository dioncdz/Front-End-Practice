/*************************BG CHANGE********************************/

let buttons = document.querySelectorAll('.bg-btn');

buttons.forEach(button => button.addEventListener('click', ()=>{
   if (button.className.includes('dark')) {
      document.querySelector('#background-change').style.backgroundColor = '#568259';
   } 
   else if (button.className.includes('medium')) {
      document.querySelector('#background-change').style.backgroundColor = '#96E6B3';
   } 
   else {
      document.querySelector('#background-change').style.backgroundColor = '#CCFCCB';
   }
}));

/*************************ELEMENT ADD*******************************/
const container = document.querySelector('#add-element .title');
const pAdd = document.createElement('p');
const headerAdd = document.createElement('h3');
const divAdd = document.createElement('div');

container.classList.add('pAdd');

pAdd.style.color = 'red';
headerAdd.style.cssText ='color: blue; font-size: 20px';
divAdd.style.cssText ='background: pink; font-size: 1rem; border: 2px dotted black';

pAdd.textContent = 'Add <p> Element, color: red';
headerAdd.textContent = 'Add <h3> element, color: blue';

container.appendChild(pAdd);
container.appendChild(headerAdd);
container.appendChild(divAdd).innerHTML = `<h1>I'm a div</h1><p>Me too</p>`;








