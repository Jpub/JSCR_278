// input 요소 참조
const element = document.querySelector('#myFile');

// 파일 선택 기능
element.addEventListener('change', (event) => {
  const target = event.target;
  // 선택된 파일 참조
  const files = target.files;
  // 배열 타입이므로 0번째 파일 참조
  const file = files[0];

  // 유저가 선택한 파일명 표시
  alert(`${file.name} 파일이 선택되었습니다.`);
});
