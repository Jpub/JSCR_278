const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  // XHR 생성
  const req = new XMLHttpRequest();
  // 데이터 종류 설정
  req.responseType = 'blob';

  // 불러오기 실패 시 이벤트
  req.addEventListener('abort', (event) => {
    // 화면에 표시
    document.querySelector('#log').textContent = '불러오기 작업을 실패하였습니다.';
  });

  // 불러오기 완료 시 이벤트
  req.addEventListener('load', (event) => {
    // response 가져오기
    const data = event.target.response;
    // 이미지 데이터 변환
    const source = URL.createObjectURL(data);

    // 이미지 생성
    const image = new Image();
    image.src = source;
    // 텍스트 출력
    document.querySelector('#log').appendChild(image);
  });
  // 파일 지정
  req.open('GET', './sample.jpg');
  // 불러오기 시작
  req.send();

  // 50% 확률
  if (Math.random() > 0.5) {
    // 불러오기 작업 중단 설정
    req.abort();
  }
});
