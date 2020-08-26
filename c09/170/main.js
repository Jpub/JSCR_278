//form 요소 참조
const element = document.querySelector('form#radioGroup');

// 현재 선택 상태 확인
const drinkValue = element.drink.value;
const fruitValue = element.fruit.value;

console.log(`drink의 값은 ${drinkValue}입니다.`);
console.log(`fruit의 값은 ${fruitValue}입니다.`);
