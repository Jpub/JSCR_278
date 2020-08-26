// input 요소 참조
const element = document.querySelector('#myRange');
// 변경 이벤트 감시
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 현재 값 가져오기
  const value = event.target.value;

  // 화면에 표시
  document.querySelector('.log').innerHTML = `현재 값은 ${value}입니다.`;
}
