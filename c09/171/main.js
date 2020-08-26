// form 요소 참조
const element = document.querySelector('#radioGroup');
// 변경을 감시
element.addEventListener('change', handleChange);

function handleChange(event) {
  // 현재 선택 상태를 가져오기
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;

  console.log(`drink의 값은 ${drinkValue}입니다.`);
  console.log(`fruit의 값은 ${fruitValue}입니다.`);
}
