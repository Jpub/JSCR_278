const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  async function load() {
    // 파일 가져오기
    const response = await fetch('sample.xml');
    // 텍스트 형식으로 해석
    const text = await response.text();
    // XML 형식으로 해석
    const xml = new DOMParser().parseFromString(text, 'application/xml');

    console.log(xml); // 결과: #document
    // 텍스트 출력
    document.querySelector('#log').textContent = text;
  }

  load();
});
