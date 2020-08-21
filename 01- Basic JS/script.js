let buttons = document.querySelectorAll('.bg-btn');

function changeBg(btn) {

   if (btn.target.className.includes('dark')) {
      document.querySelector('#background-change').style.backgroundColor = '#568259';
   } 
   else if (btn.target.className.includes('medium')) {
      document.querySelector('#background-change').style.backgroundColor = '#96E6B3';
   } 
   else {
      document.querySelector('#background-change').style.backgroundColor = '#CCFCCB';
   };

}

buttons.forEach(button => button.addEventListener('click', changeBg));




