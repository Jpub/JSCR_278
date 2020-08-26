const array = ['사자', '호랑이', '곰'];

const iterator = array[Symbol.iterator]();

const next1 = iterator.next();
console.log(next1.value); // 결과: ‘사자’
console.log(next1.done); // 결과: false

const next2 = iterator.next();
console.log(next2.value); // 결과: ‘호랑이’
console.log(next2.done); // 결과: false

const next3 = iterator.next();
console.log(next3.value); // 결과: ‘곰’
console.log(next3.done); // 결과: false

const next4 = iterator.next();
console.log(next4.value); // 결과: undefined
console.log(next4.done); // 결과: true
