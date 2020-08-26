// 참조 가져오기
const numA = document.querySelector('#numA');
const numB = document.querySelector('#numB');
const result = document.querySelector('.result');
const btn = document.querySelector('button');

// worker 생성
const worker = new Worker('worker.js');

// 버튼 클릭 시
btn.addEventListener('click', () => {
  worker.postMessage([Number(numA.value), Number(numB.value)]);
  console.log('[메인스크립트] worker로 데이터 전송');
});

// worker 데이터를 가져올 때
worker.onmessage = function(e) {
  // 결과를 화면에 표시
  result.textContent = e.data;
  console.log('[메인스크립트] worker에서 메시지 가져오기');
};
