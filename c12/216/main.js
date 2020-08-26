// 캔버스 요소 참조
const canvas = document.querySelector('#my-canvas');
// 컨텍스트 가져오기
const context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 100);
context.fillStyle = 'green';
context.fillRect(25, 25, 50, 50);

// Base64 문자열 가져오기
const data = canvas.toDataURL();
console.log(data);

// img 요소 대입
const img = document.querySelector('#my-img');
img.src = data;
