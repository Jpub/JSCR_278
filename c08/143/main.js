const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');

// 3초 후 .container 제일 앞에 #myBox1 요소 추가
setTimeout(() => {
  container.insertBefore(myBox1, container.firstElementChild);
}, 3000);

// 4초 후 #box2 요소의 앞에 #myBox2 요소 추가
setTimeout(() => {
  container.insertBefore(myBox2, box2);
}, 4000);
