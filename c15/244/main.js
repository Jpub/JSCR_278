const section = document.querySelector('.localStorage'); // 부모 요소 가져오기
const btnRead = section.querySelector('.btnRead'); // 버튼 요소 가져오기
const btnSave = section.querySelector('.btnSave'); // 버튼 요소 가져오기
const input = section.querySelector('input'); // 텍스트 입력 박스 요소

// 저장하기 버튼 클릭 시
btnSave.addEventListener('click', () => {
  // 텍스트 입력 박스의 문자열 가져오기
  const data = input.value;

  // localStorage에 저장
  localStorage.setItem('myKey', data);
});

// 불러오기 버튼 클릭 시
btnRead.addEventListener('click', () => {
  // localStorage에서 불러오기
  const data = localStorage.getItem('myKey');

  // 텍스트 입력 박스에 문자열 대입
  input.value = data;
});
