const section = document.querySelector('.localStorage'); // 부모 요소 가져오기
const btnClear = section.querySelector('.btnClear'); // 버튼 요소 가져오기
const btnRemove = section.querySelector('.btnRemove'); // 버튼 요소 가져오기
const btnSave = section.querySelector('.btnSave'); // 버튼 요소 가져오기
const input = section.querySelector('input'); // 텍스트 입력 박스 요소

// 저장하기 버튼 클릭 시
btnSave.addEventListener('click', () => {
  // 텍스트 입력 박스의 문자열 가져오기
  const data = input.value;

  // localStorage에 저장
  localStorage.setItem('myKey1', data);
  localStorage.setItem('myKey2', data);
});

// 삭제하기 버튼 클릭 시
btnRemove.addEventListener('click', () => {
  // localStorage에서 삭제
  localStorage.removeItem('myKey1');
});

// 전체 삭제 버튼 클릭 시
btnClear.addEventListener('click', () => {
  // 전체 삭제하기
  localStorage.clear();
});
