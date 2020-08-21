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




