const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  // XHR 생성
  const req = new XMLHttpRequest();
  // 데이터 종류 설정
  req.responseType = 'blob';

  req.addEventListener('progress', (event) => {
    // 진행 상황 계산(0~1)
    const rate = event.loaded / event.total;

    // 진행 바 폭 변경
    const element = document.querySelector('.progress-bar');
    element.style.width = `${rate * 100}%`;
  });

  // 불러오기 완료 후 이벤트
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
  // 가져오기 시작
  req.send();
});
