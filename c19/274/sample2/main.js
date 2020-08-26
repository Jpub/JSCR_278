// 제네레이터 정의
function* range(start, end) {
  let result = start;
  while (result <= end) {
    yield result;
    result++;
  }
}

// 사용 예
for (let value of range(2, 6)) {
  console.log(value); // 결과: 2, 3, 4, 5, 6…의 순서로 출력
}
