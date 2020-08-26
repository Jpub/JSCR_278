// 삽입하고 싶은 요소를 참조
const container = document.querySelector('.container');
for (let i = 0; i < 6; i++) {
  // Image 객체 생성
  const img = document.createElement('img');
  // src 속성에 파일 주소 지정
  img.src = `images/photo-${i}.jpg`;
  // 요소에 삽입
  container.appendChild(img);
}
