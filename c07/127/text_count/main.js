/** 텍스트 영역 */
const textarea = document.querySelector('.textarea');

/** 입력중인 문자 수 */
const string_num = document.querySelector('.string_num');

//  텍스트를 입력할 때마다 onKeyUp( )을 실행
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
  // 입력된 텍스트
  const inputText = textarea.value;
  // 문자 수를 반영
  string_num.innerText = inputText.length;
}
