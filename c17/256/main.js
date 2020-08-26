const a = 10;

try {
  a = 20; // a에 값을 다시 대입하면 에러 발생
} catch (error) {
  console.log(`에러가 발생했습니다:${error.message}`);
}

// 중단없이 실행
console.log(`상수 a의 값은 ${a}입니다.`);
