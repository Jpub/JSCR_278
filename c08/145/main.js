const container = document.querySelector('.container');
// 삽입하는 .new-box 요소
const newBox = `<div class="new-box box">.new-box 요소</div>`;

setTimeout(() => {
// .new-box 요소를 .container 요소 제일 앞에 추가
  container.insertAdjacentHTML('afterbegin', newBox);
// .new-box 요소를 .container 요소 뒤에 추가
  container.insertAdjacentHTML('afterend', newBox);
}, 3000);
