/** 성 입력란 */
const familyNameText = document.querySelector('#familyNameText');

/** 이름 입력란  */
const firstNameText = document.querySelector('#firstNameText');

/** 성명  */
const fullName = document.querySelector('#fullName');

// 문자가 입력될 때마다 onKeyUp( ) 실행
firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);

/** 문자가 입력될 때마다 실행되는 함수  */
function onKeyUp() {
  // 성
  const familyName = familyNameText.value;

  // 이름
  const firstName = firstNameText.value;

  // 성명을 출력
  fullName.innerHTML = familyName + ' ' + firstName;

  // 다음과 같이 기술할 수도 있음
  // fullName.innerHTML = `${familyName} ${firstName}`;
}
