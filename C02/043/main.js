document.querySelector('#tweetButton').addEventListener('click', () => {
// 트윗 내용 가져오기
  let tweetText = document.querySelector('#tweetTextArea').value;

// #JavaScript와 빈칸을 트윗 내용에 추가하기
  tweetText += ' #JavaScript';

  // 인코딩하기
  const encodedText = encodeURIComponent(tweetText);

  // 링크 작성하기
  const tweetURL =
    `https://twitter.com/intent/tweet?text=${encodedText}`;

  // 링크 열기
  window.open(tweetURL);
});
