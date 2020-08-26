// form 요소 참조
const formElement = document.querySelector('form');
// 전송 이벤트 감시
formElement.addEventListener('submit', handleSubmit);

// 전송 이벤트 발생 시
function handleSubmit(event) {
  // confirm으로 전송 확인
  const isYes = confirm('이 내용으로 전송하시겠습니까?');

  // ‘취소’를 선택한 경우
  if (isYes === false) {
    // 이벤트 해제
    event.preventDefault();
  }
}
