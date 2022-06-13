let figure = document.querySelectorAll('.figure');

for (let ball of figure) {
    ball.onmousedown = function(event) {

        this.classList.toggle('activs');
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;
      
        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        document.body.append(ball);
      
        moveAt(event.pageX, event.pageY);
      
        // переносит мяч на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
          ball.style.left = pageX - shiftX + 'px';
          ball.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // передвигаем мяч при событии mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // отпустить мяч, удалить ненужные обработчики
        ball.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          ball.onmouseup = null;
        };
      
      };
      
      ball.ondragstart = function() {
        return false;
      };
}

// function clickfigure() {

//     this.classList.toggle('activs');
//     if (this.hasAttribute('draggable')) {
//         this.removeEventListener('dragend', dragStone);
//         this.removeEventListener('dragstart', dragStoneStart);
//         this.removeAttribute('draggable');
//     } else {
//         this.addEventListener('dragend', dragStone);
//         this.addEventListener('dragstart', dragStoneStart);
//         this.draggable = 'true';
//     }

// }

// let offsetX;
// let offsetY;

// function dragStone(e) {
//     this.style.top = (e.pageY - offsetY) + 'px';
//     this.style.left = (e.pageX - offsetX) + 'px';
// }

// function dragStoneStart(e) {
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
// }
