const btn = document.querySelector('button'); // 버튼 요소 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  async function load() {
    const data = await fetch('sample.txt'); // ①
    const text = await data.text(); // ②
    console.log(text); // ③
    // 텍스트 출력
    document.querySelector('#log').innerHTML = text;
  }

  load();
});
