// 버튼 참조
const btn = document.querySelector('button');
// 버튼 클릭 시 이벤트
btn.addEventListener('click', (event) => {
  const text = prompt('오늘의 날씨는 어떤가요？', '여기 입력해 주세요');
  // 입력한 문자열을 화면에 표시
  document.querySelector('.log').innerHTML = text;
});
