/** 전화번호 입력란  */
const phoneNumberText = document.querySelector('#phoneNumberText');

/** 경고 메시지  */
const warningMessage = document.querySelector('#warningMessage');

// 문자가 입력될 때마다 내용 체크
phoneNumberText.addEventListener('keyup', () => {
  // 입력된 전화번호
  const phoneNumber = phoneNumberText.value;
  // 전화번호에 하이픈(-)이 포함되면 공백(‘ ‘)으로 변환
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, ''); // 09012345678

  // 0으로 시작하는 10자리 혹은 11자리의 번호 형식 체크
  if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
    warningMessage.innerText = '전화번호의 형식에 맞춰 입력해 주세요.';
  } else {
    warningMessage.innerText = '';
  }
});
