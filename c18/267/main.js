class LikeCounter {
  constructor() {
    // 버튼 클릭 횟수
    this.clickedCount = 0;

    const button = document.querySelector('.button');
    const clickedCountText = document.querySelector('.clickedCountText');

    // 화살표 함수로 이벤트 리스너 정의
    button.addEventListener('click', () => {
      this.clickedCount += 1;
      clickedCountText.textContent = this.clickedCount;
    });
  }
}

new LikeCounter();
