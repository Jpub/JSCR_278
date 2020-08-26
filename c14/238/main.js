const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  // XHR 생성
  const req = new XMLHttpRequest();
  // 불러오기 완료 후 이벤트
  req.addEventListener('load', (event) => {
    // response 가져오기
    const text = event.target.responseText;

    // 텍스트 출력
    document.querySelector('#log').innerHTML = text;
  });
  // 파일 지정
  req.open('GET', './sample.txt');
  // 가져오기 시작
  req.send();
});
