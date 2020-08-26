// input 요소 참조
const element = document.querySelector('#myText');
// 이벤트 등록
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 값 가져오기
  const value = event.target.value;
  // 화면에 반영
  document.querySelector('.log').innerHTML = value;
}
