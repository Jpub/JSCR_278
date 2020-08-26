const btnRead = document.querySelector('.btnRead'); // 버튼 요소 가져오기
const btnSave = document.querySelector('.btnSave'); // 버튼 요소 가져오기

// 저장하기 버튼 클릭 시
btnSave.addEventListener('click', () => {
  // 쿠키 저장(대입은 개별로 저장됨)
  document.cookie = 'id=1';
  document.cookie = 'age=30';
  document.cookie = `name=${encodeURIComponent('山田')}`;
});

// 불러오기 버튼 클릭 시
btnRead.addEventListener('click', () => {
  // 쿠키 불러오기
  alert(document.cookie);
});
