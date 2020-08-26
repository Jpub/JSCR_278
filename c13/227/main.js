// 배열 생성
const listFunctions = [];

// 동적으로 함수 추가
for (let i = 0; i < 5; i++) {
  // 1초 후 처리하는 비동기 함수 생성
  const func = (resolve) => {
    // setTimeout으로 지연 작업 처리
    setTimeout(() => {
      console.log(`함수 ${i}가 완료되었습니다.`, new Date().toLocaleTimeString());
      resolve(); // Promise 완료
    }, 1000);
  };
  // 배열에 보관
  listFunctions.push(func);
}
// 배열 내용 출력
console.log(listFunctions); // 결과: [ [Function: func], ...

execute();

async function execute() {
  // 비동기 처리 순서대로 실행
  for (let i = 0; i < listFunctions.length; i++) {
    const func = listFunctions[i];
    await new Promise(func);
  }
}
