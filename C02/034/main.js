//  #submitButton 클릭 시의 처리 작업 설정
document.querySelector('#submitButton').addEventListener('click', (event) => {
  // 전화번호 가져오기
  const phoneNumber = document.querySelector('#phoneNumberText').value;

  // 전화번호에 하이픈(-)이 삽입된 경우 ‘ ‘(공백)으로 변환
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  // 01012345678
  alert(`전화번호는 ${trimmedPhoneNumber}입니다.`);

  // 버튼의 기본 작동을 해제
  event.preventDefault();
});
