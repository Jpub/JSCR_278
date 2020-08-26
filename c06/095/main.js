// 버튼을 참조
const btn = document.querySelector('button');

// 버튼 클릭 시 작업
btn.addEventListener('click', (event) => {
  // 확인창 표시
  const isYes = confirm('날씨가 화창한가요?');
  // 유저가 입력한 결과를 화면에 표시
  document.querySelector('.log').innerHTML = isYes;
});
