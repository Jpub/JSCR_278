const element = document.querySelector('#myFile');
const imgEl = document.querySelector('.log img');

// 파일 선택 기능
element.addEventListener('input', (event) => {
  const target = event.target;
  // 선택된 파일 참조
  const files = target.files;
  // 배열 타입이므로 0번째 파일 참조
  const file = files[0];

  // FileReader 인스턴스 생성
  const reader = new FileReader();
  // 읽기 작업 완료
  reader.addEventListener('load', () => {
    // 이미지 표시
    imgEl.src = reader.result;
  });
  // 텍스트 파일 형식으로 읽어오기
  reader.readAsDataURL(file);
});
