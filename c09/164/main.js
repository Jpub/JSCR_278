// textarea 참조
const element = document.querySelector('#myText');
// 이벤트 등록
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 데이터 값 가져오기
  const value = event.target.value;

  // 줄바꿈 코드를 태그로 변경
  const htmlStr = value.split('\n').join('<br />');
  document.querySelector('.log').innerHTML = htmlStr;
}
