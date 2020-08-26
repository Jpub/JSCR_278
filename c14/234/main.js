const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  async function load() {
    // 파일 읽어오기
    const data = await fetch('sample.json');
    // JSON으로 해석
    const obj = await data.json();
    console.log(obj); // 결과: {name: "A학교", classes: Array(2)}
    // 텍스트 출력
    document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '  ');
  }

  load();
});
