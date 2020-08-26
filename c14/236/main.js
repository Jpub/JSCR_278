const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시

  async function load() {
    // 데이터 가져오기
    const res = await fetch('./sample.jpg');
    // blob으로 해석
    const blob = await res.blob();

    // img 요소 생성
    const image = new Image();
    // blob을 src 속성에 대입
    image.src = URL.createObjectURL(blob);
    // 화면에 표시
    document.querySelector('#log').appendChild(image);
  }

  load();
});
