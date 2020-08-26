function* myGenerator() {
  console.log('안녕하세요.');
  yield 1000;
  console.log('오늘은 날씨가 좋아요.');
  yield 2000;
  console.log('내일은 비가 올 것 같아요.');
  yield 3000;
}
const myIterable = myGenerator();

// 결과
// 1초 후, ‘안녕하세요’ 출력 후 1000 출력
// 2초 후, ‘오늘은 날씨가 좋아요.’ 출력 후 2000 출력
// 3초 후, ‘내일은 비가 올 것 같아요.’ 출력 후 3000 출력
// 이후에는 undefined 출력
setInterval(() => {
  console.log(myIterable.next().value);
}, 1000);
