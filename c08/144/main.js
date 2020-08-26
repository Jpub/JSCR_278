const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const targetBox = document.querySelector('#targetBox');

// 4초 후 #targetBox 요소의 앞에 #myBox1 요소 추가
setTimeout(() => {
  targetBox.before(myBox1);
}, 3000);

// 4초 후 #targetBox 요소의 뒤에 #myBox2 요소 추가
setTimeout(() => {
  targetBox.after(myBox2);
}, 4000);
