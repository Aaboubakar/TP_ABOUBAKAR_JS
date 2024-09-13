const b = document.getElementById('cadre');

function gestionEvenement1() {
  b.style.borderRadius = `50%`;
  b.style.background = 'yellow';
  b.innerHTML = 'Double click';
  b.style.transform = `scale(1.5)`;
}

function gestionEvenement2() {
  b.style.transform = `rotate(30deg)`;
  b.innerHTML = 'Mouse over';
}

function gestionEvenement3() {
  console.log('Good job !!!');
  b.innerHTML = 'Mouse leave';
  b.style.background = 'purple';
  b.style.color = 'red';
}

function gestionEvenement4(e) {
  b.style.left = e.pageX + 'px';
  b.style.top = e.pageY + 'px';
  b.innerHTML = 'mouse move';
  b.style.transform = 'scale(0.75) translate(-50%, -50%)';
  b.style.border = '10px solid teal';
}

// deplacement horizontal(droite-gauche) de notre shape, apres avoir fait un click

let topPos = 0;
let direction = -1;
function rightLeft() {
  b.style.position = 'absolute';
  if (topPos == 1000) {
    direction = 1;
    b.style.background = 'red';

    b.style.borderRadius = `100%`;
  } else if (topPos == -10) {
    direction = -1;
    b.style.background = 'green';

    b.style.borderRadius = `5px`;
  }
  topPos += -2 * direction;

  b.style.transform = `translateX(${topPos}px)`;

  b.innerHTML = 'Click';

  requestAnimationFrame(rightLeft);
}

console.log(b.innerHTML);

b.addEventListener('click', rightLeft);

b.addEventListener('ondblclick', gestionEvenement1);

b.addEventListener('mouseover', gestionEvenement2);

b.addEventListener('mouseleave', gestionEvenement3);

b.addEventListener('mousemove', gestionEvenement4);
