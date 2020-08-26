const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1); // 결과: [5, 1, 8, 3...(생략)]
const array2 = ['사자', '여우', '곰', '호랑이', '기린'];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2); // 결과: [“기린”, “사자”, “곰”, “여우”, “호랑이”]
/**
 * 배열 셔플
 * 기존 배열의 변경없이 새로운 배열을 반환
 * @param sourceArr 기존 배열
 * @returns 셔플된 배열
 */
function shuffleArray(sourceArr) {
  // 기존 배열의 복제 생성
  const array = sourceArr.concat();
  // Fisher Yates 알고리즘
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
