const container = document.querySelector('.container');
const myBox = document.querySelector('#myBox');

// 3초 후 .container 요소의 끝에 #myBox 요소를 추가
setTimeout(() => {
  container.appendChild(myBox);
}, 3000);
