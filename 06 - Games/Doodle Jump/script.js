document.addEventListener('DOMContentLoaded', ()=> {
   const grid = document.querySelector('.grid');
   const doodler = document.createElement('div');
   let doodlerLeftSpace = 50;
   let doodlerBottomSpace = 150;
   let isGameOver = false;
   let platformCount = 5;
   let platforms = [];
   let upTimerId;
   let downTimerId;

   function createDoodler() {
      grid.appendChild(doodler);
      doodler.classList.add('doodler');
      doodler.style.left = doodlerLeftSpace + 'px';
      doodler.style.bottom = doodlerBottomSpace + 'px'
   }

   class Platform {
      constructor(newPlatBottom) {
         this.bottom = newPlatBottom;
         this.left = Math.random() * 315;
         this.visual = document.createElement('div');

         const visual = this.visual;
         visual.classList.add('platform');
         visual.style.left = this.left + 'px';
         visual.style.bottom = this.bottom + 'px';
         grid.appendChild(visual);

      }
   }

   function createPlatforms() {
      for(let i = 0; i < platformCount; i++) {
         let platformGap = 600 / platformCount;
         let newPlatBottom = 100 + i * platformGap;
         let newPlatform = new Platform(newPlatBottom)
         platforms.push(newPlatform)
         console.log(platforms);
      }
   }

   function movePlatforms() {
      if(doodlerBottomSpace > 200) {
         platforms.forEach(platform => {
            platform.bottom -= 4;
            let visual = platform.visual;
            visual.style.bottom = platform.bottom + 'px'
         })
      }
   }

   function gameOver() {
      console.log('Game Over');
   }

   function fall() {
      clearInterval(upTimerId);
      downTimerId = setInterval(function() {
         doodlerBottomSpace -=5;
         doodler.style.bottom = doodlerBottomSpace + 'px'

         if (doodlerBottomSpace <= 0) {
            gameOver();
            isGameOver = true;
            clearInterval(upTimerId)
            clearInterval(downTimerId)
         }

      }, 30);
   }

   function jump() {
      clearInterval(downTimerId);
      upTimerId = setInterval(function() {
         doodlerBottomSpace += 20
         doodler.style.bottom = doodlerBottomSpace + 'px'

         if (doodlerBottomSpace > 350) {
            fall()
         }

      }, 30)
   }

   function start() {
      if (!isGameOver) {
         createDoodler()
         createPlatforms()
         setInterval(movePlatforms, 30)
         jump()
      }
   }

   // Attach to button
   start()
})