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


/*************************QUOTE GENERATOR*******************************/

const quoteButton = document.querySelector('#quote-generator');
let quoteOutput = document.querySelector('#quote');
let quotes = [
   "Life has bigger plans for you than you possibly know",
   "A burning sense of passion is the most potent fuel for your dreams",
   "Remarkable people are priority-driven. This is the secret of time mastery. Build your days around your priorities and you will play in rare air.",
   "The best antidote for fear is knowledge.",
   "We live in an age when we have forgotten what life is all about.",
   "To risk is to live.",
   "Investing in yourself is the best investment you will ever make. it will not only improve your life, it will improve the lives of all those around you",
   "The purpose of life is a life of purpose",
   "I once read that people who study others are wise but those who study themselves are enlightened",
   "Laughter opens your heart and soothes your soul. No one should ever take life so seriously that they forget to laugh at themselves.",
]

let lastNum;

function appendQuote() {
   let num = Math.floor(Math.random() * 10);
   console.log(num);
   if(lastNum === num) {
      return appendQuote()
   }
   lastNum = num;
   quoteOutput.innerHTML = `${quotes[num]}`;
   
}

quoteButton.addEventListener('click', appendQuote);



